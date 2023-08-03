# KAKAO_SHOPING_CLONE_CODING
**카카오 쇼핑 홈페이지**를 간단하게 클론코딩한 프로젝트입니다.

## 🖥 프로젝트 기술 스택
- ![React](https://img.shields.io/badge/React-18.2.0-Color?style=6DB33F&logo=react&logoColor=6DB33F)
- ![FontAwesome](https://img.shields.io/badge/Font%20Awesome-6.4.0-6DB33F?style=6DB33F&logo=fontawesome&logoColor=6DB33F)
- ![Axios](https://img.shields.io/badge/Axios-1.4.0-000000?style=6DB33F&logo=axios&logoColor=6DB33F)
- ![React Query](https://img.shields.io/badge/reactquery-3.39.3-4479A1?style=6DB33F&logo=axios&logoColor=6DB33F)
- ![Syteld Component](https://img.shields.io/badge/styled%20components-6.0.0-02303A?style=6DB33F&logo=styledcomponents&logoColor=6DB33F)
- ![Gradle](https://img.shields.io/badge/Gradle-7.4-02303A?logo=gradle&logoColor=02303A)
- ![IntelliJ](https://img.shields.io/badge/IntelliJ-2023.1-000000?logo=intellijidea&logoColor=000000)
- **개발용 라이브러리**
- ![TailWind](https://img.shields.io/badge/tailwindcss-3.3.3-6DB33F?style=6DB33F&logo=tailwindcss&logoColor=6DB33F) 
- ![Babel](https://img.shields.io/badge/babel-7.21.11-85EA2D?style=6DB33F&logo=babel&logoColor=6DB33F)
- 

## Directroy Pattern
- src/services: 통신 모듈과 개별 API 함수
- src/components: Atomic pattern으로 구성된 컴포넌트 디렉터리
- src/hooks: 커스텀 훅
- src/assests: 홈페이지에 필요한 이미지들
- src/layouts: Outlet 컴포넌트를 통한 레이아웃
- src/utils: 자주쓰이는 함수들을 모아 둠
- src/store: 리덕스 툴킷을 사용한 슬라이스를 저장


## Command
```bash
npm install # 의존성 모듈 설치
npm run build # 패키지 번들링
npm run start # 프로젝트 실행
```

## 크램폴린 IDE를 통해 배포
1. 크램폴린 IDE로 접속한다.(https://somthing.com)
2. 컨테이너를 생성한다.
...
9. 터미널을 열고, ./start.sh를 통해 백엔드 환경을 실행한다.
10. 또 다른 터미널을 생성해 npm start로 3000번 포트에 리액트를 실행한다.