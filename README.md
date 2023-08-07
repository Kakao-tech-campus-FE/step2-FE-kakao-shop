# 카테캠 2단계 클론코딩 프로젝트

<img width="1440" alt="스크린샷 2023-08-07 오후 8 31 24" src="https://github.com/kimchanho97/algorithm/assets/104095041/dd8c6994-3d99-4da0-a7ba-e312b3874cb0">

</br>

## 개요

[카카오톡 쇼핑하기](https://store.kakao.com/) 클론코딩 프로젝트

+ 개발 기간: 2023.06.26 ~ 2023.08.04
+ 개발 인원: 프론트엔드 본인 1명
+ 개발 목적: 리액트 학습 및 다양한 라이브러리 적용

</br>

## 시작하기

1. Git 저장소 복제(Clone):
    ```bash
    git clone <repository_url>
    ```
   
2. 라이브러리 설치:
   ```bash
   npm install
   ```

3. 빌드(Build):
    ```bash
    npm run build
    ```
    
4. 실행(Run):
    ```bash
    npm start
    ```

</br>

## 배포환경

+ 배포 도구: 카카오 크램폴린 ide
+ 배포 URL: <https://user-app.krampoline.com/k63920d7dcea9a/>

</br>

## 적용 기술 및 기능 구현

**Languages**

<img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=HTML5&logoColor=white">&nbsp;<img src="https://img.shields.io/badge/CSS-1572B6?style=for-the-badge&logo=CSS3&logoColor=white">&nbsp;<img src="https://img.shields.io/badge/JAVASCRIPT-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=white">

**Stacks**

<img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=white">&nbsp;<img src="https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=Axios&logoColor=white">&nbsp;<img src="https://img.shields.io/badge/Redux-764ABC?style=for-the-badge&logo=Redux&logoColor=white">&nbsp;<img src="https://img.shields.io/badge/React Query-FF4154?style=for-the-badge&logo=React Query&logoColor=white">&nbsp;<img src="https://img.shields.io/badge/Tailwind CSS-06B6D4?style=for-the-badge&logo=Tailwind CSS&logoColor=white">

**Tools**

<img src="https://img.shields.io/badge/Visual Studio Code-007ACC?style=for-the-badge&logo=Visual Studio Code&logoColor=white">&nbsp;<img src="https://img.shields.io/badge/Prettier-F7B93E?style=for-the-badge&logo=Prettier&logoColor=white">&nbsp;<img src="https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=ESLint&logoColor=white">&nbsp;<img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=Git&logoColor=white">

</br>
</br>

### 기능 구현

+ **데이터 페칭 (Data Fetching)**:
  ```
  리액트 쿼리를 활용하여 서버에서 데이터를 비동기적으로 가져오는 기능을 구현했습니다.
  API 요청과 응답 처리를 통해 홈페이지의 동적인 콘텐츠를 업데이트합니다.
  ```

+ **무한 스크롤 (Infinite Scroll)**:
  ```
  Intersection Observer를 사용하여 무한 스크롤 기능을 구현했습니다.
  사용자가 스크롤을 내리면 자동으로 새로운 콘텐츠를 로드하여 페이지를 끝없이 확장합니다.
  ```
  
+ **Redux를 통한 로그인 상태 관리**:
  ```
  Redux를 활용하여 전역적으로 로그인 상태를 관리하는 기능을 구현했습니다.
  로그인 및 로그아웃 상태에 따라 헤더나 다른 컴포넌트를 조건부로 렌더링합니다.
  ```
  
+ **무한 캐러셀 (Infinite Carousel)**:
  ```
  카카오톡 쇼핑하기 홈페이지와 유사한 무한 캐러셀을 구현했습니다.
  다양한 상품 이미지가 자동으로 슬라이드되며, 사용자가 직접 슬라이드할 수도 있습니다.
  ```

</br>

## 폴더구조

```bash
📂 kakao-shop
 ┣ 📂 public
 ┃ ┗ 📜 ...
 ┣ 📂 src
 ┃ ┣ 📂 apis
 ┃ ┣ 📂 assets
 ┃ ┣ 📂 components
 ┃ ┃ ┣ 📂 cart
 ┃ ┃ ┣ 📂 common
 ┃ ┃ ┣ 📂 login
 ┃ ┃ ┣ 📂 main
 ┃ ┃ ┣ 📂 order
 ┃ ┃ ┣ 📂 ordercomplete
 ┃ ┃ ┣ 📂 productdetail
 ┃ ┃ ┗ 📂 signup
 ┃ ┣ 📂 hooks
 ┃ ┣ 📂 layouts
 ┃ ┣ 📂 pages
 ┃ ┣ 📂 store
 ┃ ┣ 📂 styles
 ┃ ┣ 📂 utils
 ┃ ┣ 📜 App.js
 ┃ ┗ 📜 index.js
 ┗ 📜 ...
```

+ apis: API 호출과 관련된 코드가 위치하는 폴더
+ assets: 이미지, 폰트 등의 정적 자원들이 위치하는 폴더
+ components: 페이지 단위별로 아토믹 패턴을 적용한 컴포넌트들이 위치하는 폴더
+ hooks: 커스텀 훅스 (Custom Hooks)가 위치하는 폴더
+ layouts: 레이아웃과 관련된 컴포넌트들이 위치하는 폴더
+ pages: 각 페이지 컴포넌트들이 위치하는 폴더
+ store: Redux와 관련된 파일들이 위치하는 폴더
+ styles: 전역 스타일이나 스타일 유틸리티들이 위치하는 폴더
+ utils: 유틸리티 함수들이 위치하는 폴더
