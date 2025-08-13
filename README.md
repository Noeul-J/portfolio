# Vue 3 + TypeScript + Vite

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

Learn more about the recommended Project Setup and IDE Support in the [Vue Docs TypeScript Guide](https://vuejs.org/guide/typescript/overview.html#project-setup).

## GitHub 잔디표 설정

GitHub 잔디표를 표시하기 위해 GitHub Personal Access Token이 필요합니다.

### 1. GitHub Personal Access Token 생성

1. GitHub에 로그인
2. Settings > Developer settings > Personal access tokens > Tokens (classic)로 이동
3. "Generate new token (classic)" 클릭
4. 토큰 이름 입력 (예: "Portfolio GitHub Activity")
5. 다음 권한 선택:
   - `public_repo`
   - `read:user`
6. "Generate token" 클릭
7. 생성된 토큰을 복사 (한 번만 표시됨)

### 2. 환경변수 설정

프로젝트 루트에 `.env.local` 파일을 생성하고 다음 내용을 추가:

```
VITE_GITHUB_TOKEN=your_github_personal_access_token_here
```

`your_github_personal_access_token_here` 부분을 실제 생성한 토큰으로 교체하세요.

### 3. GitHub 사용자명 설정

`frontend/src/components/SkillSet.vue` 파일에서 `githubUsername` 변수를 본인의 GitHub 사용자명으로 변경하세요:

```javascript
const githubUsername = "your_github_username";
```

### 4. 개발 서버 재시작

환경변수를 설정한 후 개발 서버를 재시작하세요:

```bash
npm run dev
```
