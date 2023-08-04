# KAKAO_SHOPPING
> Kakao Tech Campus
> 카카오 쇼핑 홈페이지 클론코딩 프로젝트  
> 개발기간 : 6.26 ~ 8.04


![메인페이지](https://github.com/YANGSEOKWOO/step2-FE-kakao-shop-2/assets/59641097/3b24dc03-bb68-440d-9bd1-f7758ff99c0e)
## 배포 주소
> https://user-app.krampoline.com/k58dc6edd47efa/
## 애플리케이션 구조
<img width="341" alt="image" src="https://github.com/YANGSEOKWOO/step2-FE-kakao-shop-2/assets/59641097/dd59759f-e1e0-47ac-830d-3a1183fa1004">

### 주요 기능
- 로그인, 회원가입 기능
- 로더 기능
- 상품 상세조회 기능
- 장바구니 담기, 및 조회기능
- 주문 결제 기능
  
### Directory Pattern
#### Atomic Design Patten
│  App.js  
│  index.js  
│  
├─components  
│  ├─atoms  
│  │      Box.jsx  
│  │      Button.jsx  
│  │      Card.jsx  
│  │      CartItem.jsx  
│  │      Container.jsx  
│  │      ControlledCarousel.jsx  
│  │      Counter.jsx  
│  │      Footer.jsx  
│  │      GNB.jsx  
│  │      Input.jsx  
│  │      Label.jsx  
│  │      Loader.jsx  
│  │      OptionItem.jsx  
│  │      OptionList.jsx  
│  │      Photo.jsx  
│  │      Skeleton.jsx  
│  │      Title.jsx  
│  │  
│  ├─molecules  
│  │      CartList.jsx  
│  │      InputGroup.jsx  
│  │      OptionColumn.jsx  
│  │      ProductCard.jsx  
│  │      ProductInformationColumn.jsx  
│  │  
│  ├─organisms  
│  │      LoginForm.jsx  
│  │      ProductGrid.jsx  
│  │      RegisterForm.jsx  
│  │  
│  └─templates  
│          CompleteTemplate.jsx  
│          MainTemplate.jsx  
│          OrderTemplate.jsx  
│          ProductDetailTemplate.jsx  
│  
├─hooks : 커스텀 훅을 모아놓은 공간  
│      useAgree.js  
│      useEffectOnce.js  
│      useFetch.js  
│      useInput.js  
│      useValid.js  
│
├─layouts : GNB, Outlet, Footer 레이아웃, 로그인/아웃여부에 다른 레이아웃  
│      MainLayout.jsx  
│      RequiredAuthLayout.jsx  
│  
├─pages  
│      CartPage.jsx : 장바구니 페이지지  
│      ErrorPage.jsx : 404페이지  
│      Homepage.jsx  
│      LoginPage.jsx : 로그인페이지  
│      NewHomePage.jsx : 메인페이지  
│      OrderCompletePage.jsx : 주문완료 페이지  
│      OrderPage.jsx : 주문페이지  
│      ProductDetailPage.jsx : 개별상품페이지  
│      RegisterPage.jsx : 회원가입 페이지  
│  
├─services : API를 모아놓은 폴더 : axios  
│      cart.js : 장바구니 api  
│      index.js  
│      order.js  
│      product.js  
│      user.js  
│  
├─store : redux 사용  
│  │  index.js  
│  │  
│  └─slices  
│          detailSlice.js  
│          userSlice.js  
│  
├─styles  
│  ├─atoms  
│  │  
│  ├─organisms  
│  │  
│  ├─pages  
│  │  
│  └─templates  
│  
└─utils : 각종 편의함수들을 모아놓은 것  
        convert.js  
# Start Command

```bash
git clone [웹사이트 주소]
cd [클론한 폴더]
npm install # 의존성 모듈 설치
npm run build # 패키지 번들링
npn run start # 프로젝트 실행
```
### 배포 방법
배포 플로우
<img width="398" alt="image" src="https://github.com/YANGSEOKWOO/step2-FE-kakao-shop-2/assets/59641097/c79cf8d1-b156-46e3-8531-dc809dbf0d33">
1. 크램폴린 IDE를 통해 배포  
2. 컨테이너를 생성한다.  
- 스택 : React, 외부프로젝트 : Github로 main과 연결  
3. D2hub 레퍼지토리 생성 및 이미지 빌드
4. Kargo App을 생성(앱 등록하기) 후 배포하기
5. 외부 접속 URL을 설정하여 DKOS 클러스터에 배포된 자신의 app 구동을 확인할 수있다.

### 배포 이후
수정사항이 발생하면, 코드 수정 => D2Hub repo 빌드 => Kargo App 배포
로그 확인하고 싶다 => `kubectl` 명령어

## Stacks
------
#### Environment
<img src="https://img.shields.io/badge/visualstudiocode-007ACC?style=for-the-badge&logo=visualstudiocode&logoColor=white"><img src="https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white">
<img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white">

### Development
<img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=white">
<img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"> 
<img src="https://img.shields.io/badge/tailwindcss-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white">

### test
<img src="https://img.shields.io/badge/puppeteer-40B5A4?style=for-the-badge&logo=puppeteer&logoColor=white">

### 웹사이트 페이지
![개별상품페이지](https://github.com/YANGSEOKWOO/step2-FE-kakao-shop-2/assets/59641097/bb8daa86-6b67-4fc1-b0e0-3364c42d5268)
![장바구니페이지](https://github.com/YANGSEOKWOO/step2-FE-kakao-shop-2/assets/59641097/be7f5b24-6039-4c55-886a-0f5930590254)
![구매완료페이지](https://github.com/YANGSEOKWOO/step2-FE-kakao-shop-2/assets/59641097/81fc5a8c-f8b2-4548-bdec-bb1b36c377c7)
