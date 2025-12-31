# 🎧 PlayShare

> 친구들과 나의 음악 플레이리스트를 공유하는 웹 서비스  
> React + Vite + Supabase 기반 개인 프로젝트

---

## 📌 프로젝트 소개

PlayShare는 음악 플레이리스트를 생성하고 공유하며  
다른 사용자들의 음악 취향을 탐색할 수 있는 웹 서비스입니다.

프론트엔드 개발 역량 강화와  
실제 서비스 구조(MVP)를 경험하기 위해 기획·제작하였습니다.

---

## 🛠 기술 스택

### Frontend
- React
- JavaScript (ES6+)
- Vite
- CSS

### Backend / DB
- Supabase
  - Authentication
  - PostgreSQL Database
  - Storage

### Tools
- Git & GitHub
- Figma
- Notion

---

## ✨ 주요 기능

- 🔐 회원가입 / 로그인 (Supabase Auth)
- 🎵 플레이리스트 생성
- ➕ 음악 추가 / 삭제
- 👥 다른 유저 플레이리스트 조회
- ❤️ 좋아요 / 즐겨찾기
- 🔍 검색 및 필터링
- 📱 반응형 UI 지원

---

## 🖥 화면 구성

| 페이지 | 설명 |
|------|------|
| Home | 서비스 소개 및 인기 플레이리스트 |
| Login / Signup | 사용자 인증 |
| My Playlist | 나의 플레이리스트 관리 |
| Explore | 다른 사용자 플레이리스트 탐색 |
| Playlist Detail | 플레이리스트 상세 페이지 |
| Profile | 사용자 정보 관리 |

---

## 🗂 프로젝트 구조

```bash
src/
 ┣ assets/
 ┣ components/
 ┃ ┣ common/
 ┃ ┗ playlist/
 ┣ pages/
 ┃ ┣ Home.jsx
 ┃ ┣ Login.jsx
 ┃ ┣ Signup.jsx
 ┃ ┣ Playlist.jsx
 ┣ hooks/
 ┣ api/
 ┣ styles/
 ┣ App.jsx
 ┗ main.jsx
```

🔐 인증 흐름 (Authentication Flow)

[비로그인 사용자]
        │
        ▼
 로그인 / 회원가입
 (Supabase Auth)
        │
        ▼
 인증 성공 → 세션 생성
        │
        ▼
 보호된 페이지 접근 가능
        │
        ▼
 로그아웃 → 세션 제거

📌 인증 방식

Supabase Authentication 사용

이메일 / 비밀번호 기반 로그인

📌 인증 처리 로직

로그인 / 회원가입 요청

Supabase Auth에서 사용자 인증

인증 성공 시 세션 정보 유지

인증 상태에 따라 보호된 페이지 접근 제어

로그아웃 시 세션 제거

---

🧠 고민했던 점 & 해결 방법

1️⃣ 상태 관리

전역 상태와 로컬 상태를 분리하여 관리

불필요한 전역 상태 최소화

2️⃣ Supabase 선택 이유

별도의 백엔드 서버 없이 빠른 MVP 구현 가능

Auth + DB + Storage 통합 제공

3️⃣ UX 개선

로딩 상태 UI 제공

빈 데이터 화면 처리

모바일 환경 대응 반응형 설계

---

🚀 실행 방법
git clone https://github.com/kyuwani/playshare.git

cd playshare

npm install

npm run dev

⚙ 환경 변수 설정

VITE_SUPABASE_URL=YOUR_SUPABASE_URL

VITE_SUPABASE_ANON_KEY=YOUR_SUPABASE_ANON_KEY

---

📅 개발 기간

2025.01 ~ 2025.02 (약 4주)

👤 개발자

이름: 노규완

역할: 기획 · 디자인 · 프론트엔드 · 백엔드(Supabase)

GitHub: https://github.com/kyuwani

---

📈 향후 개선 사항

댓글 기능

팔로우 기능

음악 추천 기능

다크 모드

PWA 지원

📄 라이선스

MIT License


---

