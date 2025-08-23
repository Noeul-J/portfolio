<script setup lang="ts">
import { ref, onMounted } from 'vue'
import axios from 'axios'

// GitHub 사용자명 (여기에 본인의 GitHub 사용자명을 입력하세요)
const githubUsername = 'Noeul-J'

// GitHub 잔디표 데이터
const contributionData = ref<any[]>([])
const loading = ref(true)
const error = ref('')

// 실제 GitHub GraphQL API를 사용하여 잔디표 데이터 가져오기
const fetchGitHubContributions = async () => {
  try {
    loading.value = true
    error.value = ''

    const apiUrl = import.meta.env.VITE_GITHUB_API_URL || 'https://api.github.com/graphql';
    const apiToken = import.meta.env.VITE_GITHUB_TOKEN;
    
    // 디버깅을 위한 로그 (개발 환경에서만)
    if (import.meta.env.DEV) {
      console.log('API URL:', apiUrl);
      console.log('Token exists:', !!apiToken);
      console.log('Token length:', apiToken ? apiToken.length : 0);
    }
    
    // 토큰이 없으면 에러 처리
    if (!apiToken) {
      throw new Error('GitHub 토큰이 설정되지 않았습니다. 환경변수 VITE_GITHUB_TOKEN을 확인해주세요.');
    }
   
    // GitHub GraphQL API 사용 (실제 잔디표 데이터)
    const response = await axios.post(apiUrl, {
      query: `
        query {
          user(login: "${githubUsername}") {
            contributionsCollection {
              contributionCalendar {
                totalContributions
                weeks {
                  contributionDays {
                    contributionCount
                    date
                  }
                }
              }
            }
          }
        }
      `
    }, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiToken}`,
      },
    })

    if (response.status !== 200) {
      throw new Error('GitHub GraphQL API 요청 실패')
    }

    const data = response.data
    
    if (data.errors) {
      throw new Error(data.errors[0].message)
    }
    
    // 실제 잔디표 데이터 처리
    const contributions = processContributionData(data.data.user.contributionsCollection.contributionCalendar)
    contributionData.value = contributions
    
  } catch (err: any) {
    console.error('GitHub 데이터 가져오기 실패:', err)
    
    // 401 오류인 경우 특별한 메시지 표시
    if (err.response?.status === 401) {
      error.value = 'GitHub 인증에 실패했습니다. 토큰이 올바른지 확인해주세요.'
    } else if (err.response?.status === 403) {
      error.value = 'GitHub API 요청 한도를 초과했습니다. 잠시 후 다시 시도해주세요.'
    } else if (err.response?.status === 404) {
      error.value = 'GitHub 사용자를 찾을 수 없습니다. 사용자명을 확인해주세요.'
    } else {
      error.value = err.message || '데이터를 가져오는데 실패했습니다.'
    }
  } finally {
    loading.value = false
  }
}

// GitHub 잔디표 데이터 처리 (실제 Contribution Graph 데이터)
const processContributionData = (contributionCalendar: any) => {
  const contributions: any[] = []
  
  // 모든 주의 데이터를 평면화
  contributionCalendar.weeks.forEach((week: any) => {
    week.contributionDays.forEach((day: any) => {
      contributions.push({
        date: day.date,
        count: day.contributionCount
      })
    })
  })
  
  // 최근 6개월 데이터만 필터링
  const now = new Date()
  const sixMonthsAgo = new Date(now)
  sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 6)
  
  const filteredContributions = contributions.filter(contribution => {
    const contributionDate = new Date(contribution.date)
    return contributionDate >= sixMonthsAgo
  })
  
  // 7행 x 26열로 재구성 (GitHub 실제 구조와 동일하게)
  const reorganizedContributions: any[] = []
  const totalCells = 7 * 26 // 182개 셀
  
  // 6개월 데이터를 182개 셀로 맞추기 (최근 데이터가 오른쪽에 오도록)
  const startIndex = Math.max(0, filteredContributions.length - totalCells)
  const dataToUse = filteredContributions.slice(startIndex)
  
  // GitHub 실제 구조: 각 열은 한 주, 각 행은 요일
  // 왼쪽에서 오른쪽으로 시간이 흐르고, 위에서 아래로 요일이 진행
  for (let row = 0; row < 7; row++) {
    for (let col = 0; col < 26; col++) {
      const index = col * 7 + row
      if (index < dataToUse.length) {
        reorganizedContributions.push(dataToUse[index])
      } else {
        // 빈 셀 추가 (왼쪽에 빈 공간)
        reorganizedContributions.push({
          date: '',
          count: 0
        })
      }
    }
  }
  
  return reorganizedContributions
}

// 우주 컨셉 색상 매핑 (네온 우주 테마)
const getContributionClass = (count: number) => {
  if (count === 0) return 'bg-[#aaa1a1]'
  if (count <= 3) return 'bg-[#3b82f0]'
  if (count <= 6) return 'bg-[#1f3a8c]' 
  if (count <= 9) return 'bg-[#8b5cf8]'
  return 'bg-[#ef4444]'
}

const getContributionTooltip = (date: string, count: number | null) => {
  const dateObj = new Date(date)
  const formattedDate = dateObj.toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
  
  if (count === null) {
    return `${formattedDate}: 데이터 없음`
  } else if (count === 0) {
    return `${formattedDate}: 기여 없음`
  } else if (count === 1) {
    return `${formattedDate}: 1개의 기여`
  } else {
    return `${formattedDate}: ${count}개의 기여`
  }
}

// 컴포넌트 마운트 시 실제 GitHub 데이터 가져오기
onMounted(() => {
  fetchGitHubContributions()
})
</script>

<template>
  <section class="skills">
  <div class="container">
      <div class="skills-grid">
        <!-- Frontend -->
        <div class="skill-category">
          <div class="skill-content">
            <h3 class="skill-title">Frontend</h3>
            <div class="skill-list">
              <div class="skill-item">
                <div class="skill-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 100 100" class="icon">
                    <path fill="#41B883" d="M80 7h20L50 93.25 0 7h38.25L50 27 61.5 7z"/>
                    <path fill="#41B883" d="m0 7 50 86.25L100 7H80L50 58.75 19.75 7z"/>
                    <path fill="#35495E" d="M19.75 7 50 59 80 7H61.5L50 27 38.25 7z"/>
                  </svg>
                </div>
                <span class="skill-name">Vue.js</span> 
              </div>
              <div class="skill-item">
                <div class="skill-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 100 100" class="icon">
                    <path fill="#017ACB" d="M0 0h100v100H0z"/>
                    <path fill="#fff" d="M48.016 37.031h4.797v8.282h-12.97v36.843l-.343.094c-.469.125-6.64.125-7.969-.016l-1.062-.093V45.312H17.5v-8.28l4.11-.048c2.25-.03 8.03-.03 12.843 0 4.813.032 10.906.047 13.563.047m36.61 41.219c-1.907 2.016-3.954 3.14-7.36 4.063-1.485.406-1.735.421-5.078.406-3.344-.016-3.61-.016-5.235-.438-4.203-1.078-7.594-3.187-9.906-6.172-.656-.843-1.734-2.593-1.734-2.812 0-.063.156-.203.359-.297s.625-.36.969-.562c.343-.204.968-.579 1.39-.797.422-.22 1.64-.938 2.703-1.579 1.063-.64 2.032-1.156 2.141-1.156.11 0 .313.219.469.485.937 1.578 3.125 3.593 4.672 4.28.953.407 3.062.86 4.078.86.937 0 2.656-.406 3.578-.828.984-.453 1.484-.906 2.078-1.812.406-.641.453-.813.438-2.032 0-1.125-.063-1.437-.375-1.953-.875-1.437-2.063-2.187-6.875-4.312-4.97-2.203-7.204-3.516-9.016-5.282-1.344-1.312-1.61-1.67-2.453-3.312-1.094-2.11-1.235-2.797-1.25-5.937-.016-2.204.031-2.922.265-3.672.329-1.125 1.391-3.297 1.875-3.844 1-1.172 1.36-1.531 2.063-2.11 2.125-1.75 5.438-2.906 8.61-3.015.359 0 1.546.062 2.656.14 3.187.266 5.359 1.047 7.453 2.72 1.578 1.25 3.968 4.187 3.734 4.577-.156.235-6.39 4.391-6.797 4.516-.25.078-.422-.016-.765-.422-2.125-2.547-2.985-3.094-5.047-3.219-1.469-.093-2.25.078-3.235.735-1.03.687-1.53 1.734-1.53 3.187.015 2.125.827 3.125 3.827 4.61 1.938.953 3.594 1.734 3.719 1.734.188 0 4.203 2 5.25 2.625 4.875 2.86 6.86 5.797 7.375 10.86.375 3.812-.703 7.296-3.047 9.765"/>
                  </svg>
                </div>
                <span class="skill-name">TypeScript</span>
              </div>
              <div class="skill-item">
                <div class="skill-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 100 100" class="icon">
                    <path fill="#06B6D4" d="M50 20q-20 0-25 19.994 7.5-9.997 17.5-7.498c3.804.95 6.522 3.71 9.532 6.764 4.902 4.974 10.576 10.731 22.969 10.731q20 0 24.999-19.995-7.5 9.997-17.5 7.5c-3.803-.951-6.521-3.71-9.531-6.765C68.067 25.758 62.392 20 50 20M25 49.991q-20 0-25 19.995 7.5-9.998 17.5-7.498c3.803.952 6.522 3.71 9.532 6.763C31.933 74.225 37.608 79.984 50 79.984q20 0 25-19.995-7.5 9.997-17.5 7.498c-3.803-.95-6.522-3.71-9.532-6.763C43.066 55.75 37.393 49.991 25 49.991"/>
                  </svg>
                </div>
                <span class="skill-name">Tailwind CSS</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Backend -->
        <div class="skill-category">
          <div class="skill-content">
            <h3 class="skill-title">Backend</h3>
            <div class="skill-list">
              <div class="skill-item">
                <div class="skill-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 100 100" class="icon">
                    <path fill="url(#a)" d="M49.64 0C24.254 0 25.839 11.009 25.839 11.009l.028 11.406h24.225v3.424H16.245S0 23.997 0 49.61c0 25.615 14.179 24.707 14.179 24.707h8.462V62.432s-.457-14.18 13.952-14.18H60.62s13.5.219 13.5-13.046V13.273S76.17 0 49.64 0M36.282 7.67a4.354 4.354 0 0 1 4.358 4.358 4.356 4.356 0 0 1-6.027 4.028 4.35 4.35 0 0 1-2.69-4.028 4.355 4.355 0 0 1 4.359-4.358"/>
                    <path fill="url(#b)" d="M50.36 99.48c25.387 0 23.802-11.009 23.802-11.009l-.028-11.405H49.908V73.64h33.847S100 75.485 100 49.869c0-25.615-14.179-24.706-14.179-24.706H77.36v11.886s.457 14.179-13.952 14.179H39.38s-13.5-.218-13.5 13.047v21.933S23.83 99.48 50.36 99.48m13.359-7.67a4.355 4.355 0 0 1-4.028-6.026 4.35 4.35 0 0 1 4.028-2.69 4.355 4.355 0 0 1 4.027 6.027 4.355 4.355 0 0 1-4.027 2.69"/>
                    <defs>
                      <linearGradient id="a" x1="9.61" x2="59.167" y1="8.948" y2="58.01" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#387EB8"/>
                        <stop offset="1" stop-color="#366994"/>
                      </linearGradient>
                      <linearGradient id="b" x1="40.028" x2="93.247" y1="40.453" y2="90.762" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#FFE052"/>
                        <stop offset="1" stop-color="#FFC331"/>
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <span class="skill-name">Python</span>
              </div>
              <div class="skill-item">
                <div class="skill-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 100 100" class="icon">
                    <g clip-path="url(#a)">
                      <path fill="#A179DC" d="M94.74 29.324c-.001-1.677-.36-3.16-1.085-4.431-.713-1.25-1.78-2.3-3.211-3.128-11.815-6.812-23.64-13.603-35.45-20.423-3.185-1.838-6.272-1.77-9.432.094C40.859 4.209 17.316 17.698 10.3 21.76c-2.889 1.673-4.295 4.233-4.295 7.56-.005 13.7 0 27.4-.005 41.1 0 1.64.344 3.093 1.037 4.346.713 1.288 1.795 2.365 3.26 3.213 7.015 4.064 30.562 17.551 35.263 20.325 3.162 1.866 6.25 1.932 9.434.093 11.811-6.82 23.638-13.61 35.454-20.422 1.464-.847 2.546-1.925 3.259-3.213.692-1.252 1.037-2.706 1.037-4.346 0 0 0-27.392-.005-41.092"/>
                      <path fill="#280068" d="M50.508 49.737 7.038 74.766c.712 1.288 1.794 2.365 3.258 3.213C17.314 82.043 40.86 95.53 45.56 98.304c3.162 1.866 6.25 1.932 9.434.093 11.811-6.82 23.638-13.61 35.454-20.422 1.464-.847 2.546-1.925 3.259-3.213z"/>
                      <path fill="#390091" d="M94.74 29.324c-.001-1.677-.36-3.16-1.085-4.431L50.508 49.737l43.199 25.025c.692-1.252 1.036-2.706 1.037-4.346 0 0 0-27.392-.005-41.092"/>
                      <path fill="#fff" d="M76.102 40.38v4.678h4.678V40.38h2.34v4.678h4.677v2.34H83.12v4.678h4.678v2.339H83.12v4.678h-2.34v-4.678h-4.677v4.678h-2.34v-4.678h-4.678v-2.34h4.678v-4.678h-4.678v-2.339h4.678V40.38zm4.678 7.017h-4.678v4.679h4.678z"/>
                      <path fill="#fff" d="M50.603 16.884c12.203 0 22.857 6.627 28.563 16.478l-.055-.095-14.358 8.267c-2.828-4.79-8.014-8.022-13.963-8.088l-.187-.001c-9.071 0-16.426 7.353-16.426 16.425 0 2.966.791 5.747 2.167 8.149 2.83 4.943 8.153 8.277 14.26 8.277 6.142 0 11.495-3.377 14.312-8.372l-.068.12 14.335 8.305C73.54 76.116 63.031 82.722 50.97 82.854l-.367.002c-12.241 0-22.925-6.668-28.618-16.57a32.84 32.84 0 0 1-4.368-16.416c0-18.217 14.768-32.986 32.986-32.986"/>
                    </g>
                    <defs>
                      <clipPath id="a">
                        <path fill="#fff" d="M6 0h88.889v100H6z"/>
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <span class="skill-name">C#</span>
              </div>
              <div class="skill-item">
                <div class="skill-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 100 100" class="icon">
                    <path fill="#1F305F" fill-rule="evenodd" d="M97.811 17c-1.535.052-1.09.743-4.414 1.564-3.357.827-7.416.32-11.026 1.839-9.447 3.958-10.977 19.264-22.228 25.185-7.377 4.167-14.9 5.123-21.626 7.231-5.398 2.165-8.755 3.599-12.713 7.012-3.07 2.648-3.818 5.218-7.029 8.541-3.256 4.425-15.598.495-18.775 6.045 1.676 1.085 2.643 1.383 5.584.995-.608 1.153-4.476 2.671-3.773 4.37 0 0 9.35 1.703 17.234-3.054 3.677-1.496 7.124-4.662 12.837-5.42 7.4-.985 15.739 1.551 24.685 2.265-1.85 3.655-3.756 5.815-5.797 8.828-.63.68.54 1.282 2.71.872 3.902-.967 6.73-2.013 9.536-3.953 3.66-2.525 5.235-4.836 8.322-8.496 2.683 4.301 12.14 5.246 14.08 1.53-3.61-1.53-4.38-9.487-3.143-12.922 1.462-3.273 2.513-7.9 3.694-12.202 1.063-3.874 1.72-9.784 2.992-12.81 1.518-3.761 4.47-4.936 6.685-6.932 2.216-1.996 4.42-3.66 4.353-8.227-.023-1.484-.788-2.305-2.188-2.26" clip-rule="evenodd"/>
                    <path fill="#C0765A" d="M2.823 78.994c5.797.174 7.371.022 11.954-1.968 3.897-1.693 9.109-6.253 13.714-7.726 6.759-2.17 14.007-1.844 21.199-.995 2.406.286 4.824.685 6.55.5 2.694-1.653 2.823-6.14 4.493-6.5-.455 8.682-4.178 14.237-7.9 19.275 7.844-1.383 13.085-6.28 16.256-12.342.962-1.839 2.558-4.847 3.29-6.916.578 1.372-.754 2.243-.13 3.739 5.05-4.167 7.434-8.912 9.48-15.862 2.373-8.041 4.808-14.952 6.337-17.33 1.49-2.323 3.813-3.756 5.933-5.24 2.406-1.693 4.56-3.453 4.93-6.675-2.54-.236-3.126-.821-3.502-2.103-1.271.714-2.44.871-3.762.91-1.147.034-2.407-.016-3.947.141-12.725 1.305-13.315 13.743-22.565 22.874a28 28 0 0 1-2.289 1.94c-2.856 2.131-5.915 3.3-9.137 4.532-5.218 1.99-10.166 2.57-15.058 4.29-3.593 1.26-6.933 2.705-9.885 4.724-.737.506-1.738 1.406-2.379 1.929-1.732 1.417-2.868 2.985-3.97 4.605-1.136 1.664-2.226 3.38-3.896 5.015-2.705 2.654-12.804.776-16.363 3.24-.394.275-.714.601-.928.995 1.94.882 3.239.343 5.471.584.276 2.132-4.622 3.391-3.897 4.364"/>
                    <path fill="#1F305F" d="M83.478 25.166c1.8 1.563 5.578.309 4.904-2.8-2.8-.237-4.42.713-4.904 2.8" clip-rule="evenodd"/>
                    <path fill="#1F305F" d="M96.034 21.528c-.478 1.006-1.394 2.3-1.394 4.858-.006.438-.332.742-.338.062.023-2.503.686-3.582 1.39-5 .32-.578.517-.342.342.08"/>
                    <path fill="#1F305F" d="M95.55 21.15c-.567.957-1.928 2.705-2.147 5.258-.04.439-.4.709-.343.034.247-2.486 1.332-4.043 2.159-5.398.371-.551.545-.298.332.107m-.439-.501c-.646.906-2.738 3.009-3.177 5.528-.078.433-.455.669-.343.005.456-2.457 2.26-4.391 3.194-5.668.416-.523.574-.253.326.135m-.393-.562c-.765.81-3.262 3.486-4.049 5.92-.14.417-.545.602-.343-.044.793-2.373 2.98-4.926 4.088-6.056.49-.456.602-.163.304.18"/>
                  </svg>
                </div>
                <span class="skill-name">MariaDB</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Tools -->
        <div class="skill-category">
          <div class="skill-content">
            <h3 class="skill-title">Tools</h3>
            <div class="skill-list">
              <div class="skill-item">
                <div class="skill-icon">
                  <svg class="icon" viewBox="0 0 24 24" fill="none" aria-label="GitHub" xmlns="http://www.w3.org/2000/svg">
                    <path fill="currentColor" d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.089-.745.084-.729.084-.729 1.205.084 1.84 1.237 1.84 1.237 1.07 1.835 2.809 1.305 3.495.998.108-.776.419-1.305.762-1.605-2.665-.303-5.466-1.332-5.466-5.93 0-1.31.469-2.381 1.236-3.221-.123-.303-.536-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.655 1.653.242 2.873.119 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.625-5.479 5.921.43.372.823 1.102.823 2.222 0 1.606-.015 2.896-.015 3.286 0 .319.216.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                  </svg>
                </div>
                <span class="skill-name">GitHub</span>
              </div>
              <div class="skill-item">
                <div class="skill-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 100 100" class="icon">
                    <path fill="#2496ED" d="M99.014 41.088c-.271-.215-2.803-2.127-8.142-2.127-1.41.006-2.817.127-4.207.362-1.034-7.083-6.89-10.537-7.153-10.692l-1.433-.827-.943 1.361a19.2 19.2 0 0 0-2.55 5.96c-.955 4.043-.374 7.84 1.68 11.087-2.48 1.382-6.459 1.723-7.264 1.753H3.131a3.13 3.13 0 0 0-3.127 3.113A47.4 47.4 0 0 0 2.89 68.004c2.27 5.951 5.645 10.334 10.037 13.017 4.922 3.014 12.918 4.736 21.982 4.736a65.6 65.6 0 0 0 12.207-1.106 51 51 0 0 0 15.932-5.787 43.8 43.8 0 0 0 10.872-8.9c5.22-5.908 8.328-12.488 10.64-18.335h.922c5.714 0 9.227-2.286 11.165-4.203a12.2 12.2 0 0 0 2.945-4.361l.409-1.197z"/>
                    <path fill="#2496ED" d="M9.236 46.036h8.827a.77.77 0 0 0 .771-.771v-7.863a.77.77 0 0 0-.766-.775H9.236a.77.77 0 0 0-.77.771v7.867c0 .426.345.77.77.77m12.164.001h8.828a.77.77 0 0 0 .77-.771v-7.863a.77.77 0 0 0-.766-.775H21.4a.775.775 0 0 0-.775.775v7.863c.003.426.349.77.775.77m12.35.001h8.827a.77.77 0 0 0 .77-.771v-7.863a.77.77 0 0 0-.766-.775h-8.832a.77.77 0 0 0-.77.771v7.867c0 .426.345.77.77.77m12.204.001h8.827a.775.775 0 0 0 .775-.771v-7.863a.775.775 0 0 0-.775-.775h-8.827a.77.77 0 0 0-.771.771v7.867c0 .426.345.77.77.77M21.4 34.724h8.828a.775.775 0 0 0 .77-.775v-7.862a.77.77 0 0 0-.77-.771H21.4a.775.775 0 0 0-.775.77v7.863a.78.78 0 0 0 .775.775m12.35 0h8.827a.775.775 0 0 0 .77-.775v-7.862a.77.77 0 0 0-.77-.771H33.75a.77.77 0 0 0-.771.77v7.863c0 .426.344.773.77.775m12.204 0h8.827a.78.78 0 0 0 .775-.775v-7.862a.775.775 0 0 0-.775-.771h-8.827a.77.77 0 0 0-.771.77v7.863c0 .426.344.773.77.775m.001-11.316h8.827a.775.775 0 0 0 .775-.77V14.77a.775.775 0 0 0-.775-.77h-8.827a.77.77 0 0 0-.771.77v7.868c0 .425.345.77.77.77m12.311 22.628h8.827a.775.775 0 0 0 .775-.771v-7.863a.775.775 0 0 0-.775-.775h-8.827a.77.77 0 0 0-.77.771v7.867c0 .426.345.77.77.77"/>
                  </svg>
                </div>
                <span class="skill-name">Docker</span>
              </div>
              <div class="skill-item">
                <div class="skill-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 100 100" class="icon">
                    <path fill="#0ACF83" d="M33.333 100C42.533 100 50 92.533 50 83.333V66.667H33.333c-9.2 0-16.666 7.466-16.666 16.666S24.133 100 33.333 100"/>
                    <path fill="#A259FF" d="M16.667 50c0-9.2 7.466-16.667 16.666-16.667H50v33.334H33.333c-9.2 0-16.666-7.467-16.666-16.667"/>
                    <path fill="#F24E1E" d="M16.667 16.667C16.667 7.467 24.133 0 33.333 0H50v33.333H33.333c-9.2 0-16.666-7.466-16.666-16.666"/>
                    <path fill="#FF7262" d="M50 0h16.667c9.2 0 16.666 7.467 16.666 16.667s-7.466 16.666-16.666 16.666H50z"/>
                    <path fill="#1ABCFE" d="M83.333 50c0 9.2-7.466 16.667-16.666 16.667S50 59.2 50 50s7.467-16.667 16.667-16.667S83.333 40.8 83.333 50"/>
                  </svg>
                </div>
                <span class="skill-name">Figma</span>
              </div>
              <div class="skill-item">
                <div class="skill-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 100 100" class="icon">
                    <path fill="#36C5F0" fill-rule="evenodd" d="M36.591-.001c-5.517.004-9.981 4.48-9.977 9.998-.004 5.517 4.464 9.994 9.981 9.998h9.982V10C46.58 4.484 42.112.007 36.59-.001q.006 0 0 0m0 26.666H9.981C4.466 26.67-.003 31.147 0 36.663c-.008 5.517 4.46 9.994 9.978 10.002H36.59c5.517-.004 9.986-4.48 9.982-9.998.004-5.52-4.465-9.998-9.982-10.002" clip-rule="evenodd"/>
                    <path fill="#2EB67D" fill-rule="evenodd" d="M99.8 36.663c.004-5.516-4.465-9.993-9.981-9.998-5.517.005-9.986 4.482-9.982 9.998v10.002h9.981c5.517-.004 9.986-4.48 9.982-10.002m-26.614 0V9.997c.005-5.513-4.46-9.99-9.977-9.998-5.517.004-9.986 4.48-9.982 9.998v26.666c-.008 5.517 4.461 9.994 9.978 10.002 5.517-.004 9.986-4.48 9.981-10.002" clip-rule="evenodd"/>
                    <path fill="#ECB22E" fill-rule="evenodd" d="M63.205 99.999c5.517-.004 9.986-4.481 9.982-9.998.004-5.517-4.465-9.994-9.982-9.998h-9.982V90c-.004 5.513 4.465 9.99 9.982 9.998m0-26.67h26.614c5.516-.005 9.985-4.482 9.981-9.999.008-5.517-4.46-9.994-9.977-10.002H63.209c-5.517.004-9.986 4.481-9.982 9.998-.004 5.521 4.461 9.998 9.978 10.002" clip-rule="evenodd"/>
                    <path fill="#E01E5A" fill-rule="evenodd" d="M0 63.33c-.004 5.517 4.465 9.994 9.982 9.998 5.517-.004 9.986-4.481 9.982-9.998v-9.998H9.982C4.465 53.336-.004 57.813 0 63.33m26.614 0v26.667c-.008 5.516 4.46 9.993 9.978 10.002 5.516-.004 9.985-4.481 9.981-9.998V63.338c.008-5.517-4.46-9.994-9.977-10.002-5.521 0-9.986 4.477-9.982 9.994" clip-rule="evenodd"/>
                  </svg>
                </div>
                <span class="skill-name">Slack</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- GitHub Contribution Graph -->
       <div class="github-section">
        <h3 class="github-title">GitHub Activity</h3>
        <div class="github-container">
          <!-- 로딩 상태 -->
          <div v-if="loading" class="loading-state">
            <div class="loading-text">GitHub 데이터를 불러오는 중...</div>
          </div>
          
          <!-- 에러 상태 -->
          <div v-else-if="error" class="error-state">
            <div class="error-text">
              <div class="error-message">데이터를 불러올 수 없습니다</div>
              <div class="error-detail">{{ error }}</div>
            </div>
          </div>
          
          <!-- 잔디표 -->
          <div v-else class="contribution-grid">
            <div v-for="(contribution, index) in contributionData" :key="index" 
                 :class="getContributionClass(contribution.count)"
                 class="contribution-cell"
                 :title="getContributionTooltip(contribution.date, contribution.count)">
            </div>
          </div>
          
          <div class="contribution-legend">
            <span>Less</span>
            <div class="legend-colors">
              <div class="legend-color bg-light"></div>
              <div class="legend-color bg-medium"></div>
              <div class="legend-color bg-dark"></div>
              <div class="legend-color bg-purple"></div>
              <div class="legend-color bg-red"></div>
            </div>
            <span>More</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>



<style scoped>
.skills {
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 50%, #cbd5e1 100%);
  color: #1e293b;
  position: relative;
  overflow: hidden;
  height: 100%;
  display: flex;
  align-items: center;
  padding: 20px 0;
}

.skills::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.08) 0%, transparent 50%),
    radial-gradient(circle at 80% 20%, rgba(139, 92, 246, 0.08) 0%, transparent 50%),
    radial-gradient(circle at 40% 40%, rgba(16, 185, 129, 0.05) 0%, transparent 50%);
  pointer-events: none;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
  position: relative;
  z-index: 1;
  width: 100%;
  transform: scale(0.9);
}

/* Skills Grid */
.skills-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  margin-bottom: 24px;
}

/* Skill Category */
.skill-category {
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 16px;
  padding: 16px;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  position: relative;
  overflow: hidden;
}

.skill-category::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, #3b82f6, #8b5cf6, #06b6d4);
}

.skill-category:hover {
  transform: translateY(-6px);
  box-shadow: 0 16px 20px -5px rgba(0, 0, 0, 0.1), 0 8px 8px -5px rgba(0, 0, 0, 0.04);
  border-color: #3b82f6;
}

.skill-content {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.skill-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: #1e293b;
  text-align: center;
  margin-bottom: 6px;
  position: relative;
}

.skill-title::after {
  content: '';
  position: absolute;
  bottom: -6px;
  left: 50%;
  transform: translateX(-50%);
  width: 30px;
  height: 2px;
  background: linear-gradient(90deg, #3b82f6, #8b5cf6);
  border-radius: 1px;
}

.skill-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.skill-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  transition: all 0.3s ease;
  position: relative;
}

.skill-item:hover {
  background: #f1f5f9;
  border-color: #3b82f6;
  transform: translateX(6px);
  box-shadow: 0 3px 10px rgba(59, 130, 246, 0.15);
}

.skill-icon {
  width: 32px;
  height: 32px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  background: #ffffff;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  border: 1px solid #e2e8f0;
}

.icon {
  width: 24px;
  height: 24px;
}

.skill-name {
  color: #334155;
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 0.025em;
}

/* GitHub Section */
.github-section {
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 16px;
  padding: 24px;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  position: relative;
  overflow: hidden;
  text-align: center;
}

.github-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, #3b82f6, #8b5cf6, #06b6d4);
}

.github-section:hover {
  transform: translateY(-6px);
  box-shadow: 0 16px 20px -5px rgba(0, 0, 0, 0.1), 0 8px 8px -5px rgba(0, 0, 0, 0.04);
  border-color: #3b82f6;
}

.github-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 24px;
  position: relative;
}

.github-title::after {
  content: '';
  position: absolute;
  bottom: -6px;
  left: 50%;
  transform: translateX(-50%);
  width: 30px;
  height: 2px;
  background: linear-gradient(90deg, #3b82f6, #8b5cf6);
  border-radius: 1px;
}

.github-container {
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 24px;
  max-width: 700px;
  margin: 0 auto;
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.06);
  overflow-x: auto;
}

/* Loading & Error States */
.loading-state,
.error-state {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 120px;
}

.loading-text {
  color: #64748b;
  font-size: 1rem;
  font-weight: 500;
}

.error-text {
  text-align: center;
}

.error-message {
  color: #ef4444;
  margin-bottom: 10px;
  font-weight: 600;
}

.error-detail {
  font-size: 0.9rem;
  color: #94a3b8;
}

/* Contribution Grid */
.contribution-grid {
  display: grid;
  grid-template-columns: repeat(26, 1fr);
  grid-template-rows: repeat(7, 1fr);
  gap: 2px;
  width: 100%;
  margin-bottom: 20px;
  padding: 16px;
  background: #ffffff;
  border-radius: 10px;
  border: 1px solid #e2e8f0;
  overflow-x: auto;
  min-width: 0;
}

.contribution-cell {
  width: 16px;
  height: 16px;
  border-radius: 2px;
  transition: all 0.2s ease;
  cursor: pointer;
}

.contribution-cell:hover {
  transform: scale(1.15);
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
}

/* Contribution Colors */
.bg-light {
  background-color: #e2e8f0;
}

.bg-medium {
  background-color: #3b82f0;
}

.bg-dark {
  background-color: #1d4ed8;
}

.bg-purple {
  background-color: #8b5cf6;
}

.bg-red {
  background-color: #ef4444;
}

/* Legend */
.contribution-legend {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  font-size: 0.8rem;
  color: #64748b;
  font-weight: 500;
}

.legend-colors {
  display: flex;
  gap: 2px;
}

.legend-color {
  width: 16px;
  height: 16px;
  border-radius: 2px;
  border: 1px solid #e2e8f0;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .skills {
    padding: 40px 0 60px 0;
  }
  
  .container {
    padding: 0 20px;
  }
  
  .skills-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }
  
  .skill-category {
    padding: 20px;
  }
  
  .skill-title {
    font-size: 1.25rem;
  }
  
  .skill-item {
    padding: 12px 16px;
  }
  
  .skill-icon {
    width: 32px;
    height: 32px;
  }
  
  .icon {
    width: 24px;
    height: 24px;
  }
  
  .skill-name {
    font-size: 1rem;
  }
  
  .github-section {
    padding: 24px;
  }
  
  .github-container {
    padding: 20px;
    overflow-x: auto;
  }
  
  .github-title {
    font-size: 1.25rem;
    margin-bottom: 20px;
  }
  
  .contribution-grid {
    min-width: 500px;
    overflow-x: auto;
  }
  
  .contribution-cell {
    width: 16px;
    height: 16px;
    min-width: 16px;
  }
  
  .legend-color {
    width: 16px;
    height: 16px;
  }
  
  .contribution-legend {
    font-size: 0.8rem;
    gap: 16px;
  }
}

@media (max-width: 768px) {
  .skills {
    padding: 30px 0 50px 0;
  }
  
  .container {
    padding: 0 16px;
  }
  
  .skills-grid {
    grid-template-columns: 1fr;
    gap: 16px;
  }
  
  .skill-category {
    padding: 16px;
  }
  
  .skill-title {
    font-size: 1.125rem;
  }
  
  .skill-item {
    padding: 10px 12px;
  }
  
  .skill-icon {
    width: 28px;
    height: 28px;
  }
  
  .icon {
    width: 20px;
    height: 20px;
  }
  
  .skill-name {
    font-size: 0.9rem;
  }
  
  .github-section {
    padding: 20px;
  }
  
  .github-container {
    padding: 16px;
    overflow-x: auto;
  }
  
  .github-title {
    font-size: 1.125rem;
    margin-bottom: 16px;
  }
  
  .contribution-grid {
    min-width: 400px;
    overflow-x: auto;
  }
  
  .contribution-cell {
    width: 12px;
    height: 12px;
    min-width: 12px;
  }
  
  .legend-color {
    width: 12px;
    height: 12px;
  }
  
  .contribution-legend {
    font-size: 0.75rem;
    gap: 12px;
  }
}

@media (max-width: 480px) {
  .skills {
    padding: 20px 0 40px 0;
  }
  
  .container {
    padding: 0 12px;
  }
  
  .skills-grid {
    gap: 12px;
  }
  
  .skill-category {
    padding: 12px;
  }
  
  .skill-title {
    font-size: 1rem;
  }
  
  .skill-item {
    flex-direction: column;
    text-align: center;
    gap: 8px;
    padding: 12px;
  }
  
  .skill-icon {
    align-self: center;
    width: 24px;
    height: 24px;
  }
  
  .icon {
    width: 18px;
    height: 18px;
  }
  
  .skill-name {
    font-size: 0.85rem;
  }
  
  .github-section {
    padding: 16px;
  }
  
  .github-container {
    padding: 12px;
    overflow-x: auto;
  }
  
  .github-title {
    font-size: 1rem;
    margin-bottom: 12px;
  }
  
  .contribution-grid {
    min-width: 350px;
    overflow-x: auto;
  }
  
  .contribution-cell {
    width: 10px;
    height: 10px;
    min-width: 10px;
  }
  
  .legend-color {
    width: 10px;
    height: 10px;
  }
  
  .contribution-legend {
    flex-direction: column;
    gap: 8px;
    font-size: 0.7rem;
  }
  
  .loading-text,
  .error-message {
    font-size: 0.9rem;
  }
  
  .error-detail {
    font-size: 0.8rem;
  }
}
</style>