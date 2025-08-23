# Vercel 환경변수 설정 가이드

## 1. GitHub Personal Access Token 생성

### GitHub 토큰 생성 방법

1. **GitHub 설정 접속**

   - GitHub.com에 로그인
   - 우측 상단 프로필 → **Settings** 클릭

2. **Developer settings 접속**

   - 좌측 메뉴 하단 **Developer settings** 클릭
   - **Personal access tokens** → **Tokens (classic)** 클릭

3. **새 토큰 생성**

   - **Generate new token** → **Generate new token (classic)** 클릭
   - **Note**: "Portfolio GitHub API" (설명)
   - **Expiration**: 90 days (권장)
   - **Scopes**: `read:user` 체크 (사용자 정보 읽기 권한)

4. **토큰 복사**
   - 생성된 토큰을 안전한 곳에 복사 (다시 볼 수 없음)

## 2. Vercel 대시보드에서 환경변수 설정

### 단계별 설정 방법

1. **Vercel 대시보드 접속**

   - [vercel.com](https://vercel.com)에 로그인
   - 해당 프로젝트 선택

2. **환경변수 설정**

   - **Settings** 탭 클릭
   - **Environment Variables** 섹션으로 이동
   - **Add New** 버튼 클릭

3. **환경변수 추가**

   ```
   Name: VITE_GITHUB_TOKEN
   Value: your_github_personal_access_token_here
   Environment: Production, Preview, Development (필요에 따라 선택)
   ```

4. **추가 환경변수 예시**
   ```
   Name: VITE_GITHUB_API_URL
   Value: https://api.github.com/graphql
   Environment: Production, Preview, Development
   ```

## 2. 로컬 개발 환경 설정

### .env.local 파일 생성

프로젝트 루트에 `.env.local` 파일을 생성하고 다음 내용을 추가:

```env
VITE_GITHUB_TOKEN=your_github_personal_access_token_here
VITE_GITHUB_API_URL=https://api.github.com/graphql
```

### 주의사항

- `.env.local` 파일은 `.gitignore`에 포함되어 Git에 커밋되지 않습니다
- 실제 토큰 값은 절대 Git에 커밋하지 마세요

## 3. 코드에서 환경변수 사용

### Vue 컴포넌트에서 사용

```typescript
// 환경변수 접근
const apiToken = import.meta.env.VITE_GITHUB_TOKEN;
const apiUrl = import.meta.env.VITE_GITHUB_API_URL;

// API 호출 예시
const response = await axios.post(
  apiUrl,
  {
    query: `query { user(login: "username") { ... } }`,
  },
  {
    headers: {
      Authorization: `Bearer ${apiToken}`,
    },
  }
);
```

### TypeScript 타입 안전성

`src/vite-env.d.ts` 파일에서 환경변수 타입을 정의:

```typescript
interface ImportMetaEnv {
  readonly VITE_GITHUB_TOKEN: string;
  readonly VITE_GITHUB_API_URL: string;
}
```

## 4. 환경변수 규칙

### Vite 환경변수 규칙

- 클라이언트에서 사용할 환경변수는 `VITE_` 접두사로 시작해야 합니다
- `VITE_` 접두사가 없는 환경변수는 서버에서만 사용 가능합니다

### 보안 주의사항

- 민감한 정보(API 키, 비밀번호 등)는 클라이언트에 노출되지 않도록 주의
- 가능하면 서버 사이드에서 처리하는 것을 권장

## 5. 배포 후 확인

### 환경변수 확인 방법

1. Vercel 대시보드에서 **Deployments** 탭 확인
2. 최신 배포에서 환경변수가 제대로 설정되었는지 확인
3. 애플리케이션에서 환경변수가 올바르게 로드되는지 테스트

### 문제 해결

#### 401 인증 오류 해결 방법

1. **GitHub Personal Access Token 재생성**:

   - GitHub.com → Settings → Developer settings → Personal access tokens → Tokens (classic)
   - 기존 토큰 삭제 후 새로 생성
   - **Note**: "Portfolio GitHub API"
   - **Expiration**: 90 days
   - **Scopes**: `read:user` 체크

2. **환경변수 재설정**:

   - Vercel 대시보드에서 기존 환경변수 삭제 후 재생성
   - 로컬 `.env.local` 파일에서도 토큰 업데이트

3. **토큰 형식 확인**:
   - 토큰이 `ghp_`로 시작하는지 확인
   - 토큰에 공백이나 특수문자가 포함되지 않았는지 확인

#### 기타 오류 해결

- **환경변수가 제대로 로드되지 않는 경우**:

  1. Vercel 대시보드에서 환경변수 재설정
  2. 프로젝트 재배포
  3. 브라우저 캐시 클리어

- **403 권한 오류**:

  1. GitHub API 요청 한도 초과 - 1시간 후 재시도
  2. 토큰 권한 확인 (`read:user` 필요)

- **404 사용자 없음 오류**:
  1. `src/components/SkillSet.vue`의 `githubUsername` 변수 확인
  2. GitHub 사용자명이 정확한지 확인

#### 디버깅 도구

개발 환경에서는 `EnvDebugger` 컴포넌트가 자동으로 표시되어 환경변수 상태와 API 연결을 테스트할 수 있습니다.

## 6. 예시 컴포넌트

`src/components/ApiService.vue` 파일에서 환경변수 사용 예시를 확인할 수 있습니다.

## 7. 추가 리소스

- [Vercel 환경변수 문서](https://vercel.com/docs/projects/environment-variables)
- [Vite 환경변수 문서](https://vitejs.dev/guide/env-and-mode.html)
