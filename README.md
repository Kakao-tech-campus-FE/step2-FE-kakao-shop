# 카카오 테크 캠퍼스 FE 2단계 클론 프로젝트 - 카카오 쇼핑하기

## 프로젝트 정보

> 카카오 테크 캠퍼스 FE 2단계 과정을 진행하며 수행한 클론 프로젝트입니다. \
> 개발 기간 : 2023년 6월 26일 ~ 동년 8월 4일

## 배포 주소

- 카카오 크램폴린을 통해 배포한 링크입니다. - 2023년 8월 18일 이후 만료 예정
- [https://user-app.krampoline.com/k0980975a1c79a](https://user-app.krampoline.com/k0980975a1c79a)
- 추후 다른 플랫폼으로 배포를 진행할 예정입니다.

## 프로젝트 소개

- 카카오 테크 캠퍼스 FE 2단계 과정을 진행하며 수행한 프로젝트입니다.
- 프로젝트는 카카오톡 쇼핑하기 페이지를 클로닝 하는 것을 목표로 매주 강사님의 강의를 수강 후 강의를 바탕으로 스스로 과제를 진행하는 방식으로 수행했습니다.
- 매주 완료된 과제는 카카오 테크 캠퍼스 레포지토리로 PR후 현업 멘토님의 코드리뷰를 진행했습니다.

## 시작하기

- 레포지토리 클론 후 프로젝트를 실행해 볼 수 있습니다.
  - main 브랜치는 배포를 위한 설정이 되어있어 로컬에서 실행시 `feat-HeoDongHyuk` 브랜치의 프로젝트를 실행하는 것을 권장합니다.

### 요구사항

- Git, NPM

1. 레포지토리 클론하기
   - 전체 프로젝트 클론
     ```markdown
     git clone https://github.com/Heo-Donghyuk/step2-FE-kakao-shop-public.git
     ```
   - `feat-HeoDongHyuk` 브랜치 클론 - (권장)
     ```markdown
     git clone -b feat-HeoDongHyuk https://github.com/Heo-Donghyuk/step2-FE-kakao-shop-public.git
     ```
2. 의존성 패키지 설치

   ```markdown
   npm install
   ```

3. 프로젝트 실행

   ```markdown
   npm run start 또는 npm start
   ```

## 기술 스택 및 개발 환경

<div align=center>
    <img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white"> <img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white"> <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"> <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black">
    <img  src="https://img.shields.io/badge/TailwindCSS-06B6D4?style=for-the-badge&logo=TailwindCSS&logoColor=white">
    <br>
    <img  src="https://img.shields.io/badge/Create React App-09D3AC?style=for-the-badge&logo=createreactapp&logoColor=white">
    <img  src="https://img.shields.io/badge/Redux toolkit-764ABC?style=for-the-badge&logo=Redux&logoColor=white">
    <img  src="https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=Axios&logoColor=white">
    <img  src="https://img.shields.io/badge/React Query-FF4154?style=for-the-badge&logo=React-Query&logoColor=white">
    <br>
    <img  src="https://img.shields.io/badge/VSCode-007ACC?style=for-the-badge&logo=Visual-Studio-Code&logoColor=white">
    <img  src="https://img.shields.io/badge/GIT-F05032?style=for-the-badge&logo=Git&logoColor=white">
    <img  src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=Github&logoColor=white">
    </div>

## 화면 구성

<details>
<summary>각 페이지별 화면 이미지</summary>

### 메인 페이지

![Untitled](https://file.notion.so/f/s/06933f6c-8761-4788-aa47-1204c5d6db81/Untitled.png?id=0bf5fdc8-fac5-48d0-8e6a-fdc3357107dc&table=block&spaceId=82f8aff0-6275-4605-b926-789cc0824552&expirationTimestamp=1691229600000&signature=VsH56eNoZXlOxX8W5Myhd8Njbthk2DfNbnh2Y0AXmZI&downloadName=Untitled.png)

### 회원가입 페이지

![Untitled](https://file.notion.so/f/s/a6d56091-bdd0-4773-b7e2-85a4207228d5/Untitled.png?id=dd98c5f1-4101-41c7-9790-35bd486be627&table=block&spaceId=82f8aff0-6275-4605-b926-789cc0824552&expirationTimestamp=1691229600000&signature=89KPsS4w-tUNjAWcLAxGXcaS_efJYCeWqJC2DPAG_ZQ&downloadName=Untitled.png)

### 로그인 페이지

![Untitled](https://file.notion.so/f/s/40f404ed-5d6e-450d-85e2-439eb4cae2c9/Untitled.png?id=7030cbea-cebb-4fb3-a0b8-58871d79a1ca&table=block&spaceId=82f8aff0-6275-4605-b926-789cc0824552&expirationTimestamp=1691229600000&signature=JYeAiytXHh1d42qSW8sgWMIYI44VZwu7A26QmQAcHSk&downloadName=Untitled.png)

### 상품 상세 페이지

![Untitled](https://file.notion.so/f/s/29c9f495-1543-4329-b9c2-eb3a597c55a1/Untitled.png?id=d7498ec7-6e4c-444e-8cd6-ff88d2bd076a&table=block&spaceId=82f8aff0-6275-4605-b926-789cc0824552&expirationTimestamp=1691229600000&signature=ySQwFaWLD1cqeD_fy7qO0lsEeEs4Z37_7P3khdskGv8&downloadName=Untitled.png)

### 장바구니 페이지

![Untitled](https://file.notion.so/f/s/31e63d14-3d19-4a22-b67f-531d053a00eb/Untitled.png?id=43decd95-0e46-4700-910b-51e0043ec9ca&table=block&spaceId=82f8aff0-6275-4605-b926-789cc0824552&expirationTimestamp=1691229600000&signature=eVgjLEL172K83aBid5YmFJxIwt2I_nakUu2UYhbaoWY&downloadName=Untitled.png)

### 주문하기 페이지

![Untitled](https://file.notion.so/f/s/870b1638-1051-4f8e-8960-3225766b6b94/Untitled.png?id=33c15e57-97c2-4aef-a996-0ed7affff45d&table=block&spaceId=82f8aff0-6275-4605-b926-789cc0824552&expirationTimestamp=1691229600000&signature=QAxTErH4LQLNnRA9tNSy-qpxNJbyH-MYUlG08Dzvcws&downloadName=Untitled.png)

### 주문 완료 페이지

![Untitled](https://file.notion.so/f/s/01631df5-4901-4073-85a3-8a98434b231f/Untitled.png?id=5faaa966-eccd-40bd-bf84-f695af01905a&table=block&spaceId=82f8aff0-6275-4605-b926-789cc0824552&expirationTimestamp=1691229600000&signature=VliEeFcyK7TnFrspHhWqP5St2iBVdOdnfa6QzXScE2M&downloadName=Untitled.png)

</details>

## 주요 기능

- 회원 가입
- 로그인, 로그아웃
- 메인 페이지
  - 전체 상품 조회
- 상세 페이지
  - 개별 상품 상세 조회
  - 옵션 선택, 수량 변경 및 삭제
  - 장바구니 담기
- 장바구니 페이지
  - 옵션 삭제 및 수량 변경
  - 주문하기
- 주문하기 페이지
  - 주문 상품 확인
  - 주문 확정
- 주문 완료 페이지
  - 주문 결과 확인

## 디렉토리 구조

- 프로젝트는 아토믹 디자인 패턴을 기반으로 구현했습니다.

```markdown
/src
├── components : 컴포넌트
│ ├── atoms
│ │ └── ...
│ ├── molecules
│ │ └── ...
│ ├── organisms
│ │ └── ...
│ └── templates
│ └── ...
├── hooks : 커스텀 훅
│ └── ...
├── layouts : 페이지 레이아웃
│ └── ...
├── pages : 페이지
│ ├── HomePage.jsx
│ └── ...
├── services : api 통신, 쿠키 등
│ ├── api
│ │ ├── cart.js
│ │ ├── index.js
│ │ ├── order.js
│ │ ├── product.js
│ │ └── user.js
│ ├── cookie.js
│ └── logout.js
├── store : Redux store 관련 파일
│ ├── index.js
│ └── slices : 리덕스 슬라이스
│ └── ...
├── styles : 컴포넌트별 CSS(재사용을 위한)
│ ├── atoms
│ │ └── ...
│ ├── molecules
│ │ └── ...
│ └── organisms
│ └── ...
└── utils : 각종 유틸리티 함수
└── ...
```

## 배포

### 배포 환경

- 배포는 카카오 크램폴린 서비스에서 진행되었습니다.
- 크램폴린 배포 가이드 PDF
  [](https://file.notion.so/f/s/ea1fce0a-981b-4db5-8aa2-2f0578ea0453/크램폴린_배포_가이드.pdf?id=d903febb-cad5-4bbd-a234-1badbb3fd094&table=block&spaceId=3ef8dbd9-414c-4cf5-813d-32ecb943cc67&expirationTimestamp=1691071200000&signature=zsjoglnNpdIffM6M3yAafGmb2IO5G1zimsdbEDfVQxg&downloadName=크램폴린+배포+가이드.pdf)

### 배포 순서 및 주의사항

<details>
<summary>접기/펴기</summary>

1. 소스코드가 저장된 GitHub 레포지토리를 준비한다.
   - 크램폴린에서 배포에 이용되는 브랜치는 main이다.
   - 다른 브랜치에서 개발한 내용을 개발후 main으로 merge해 주는 작업이 필요하다.
2. React App의 Static Path 설정

   - 배포시 static path, react-router-dom의 path를 추가적으로 처리해 줄 필요가 있다.
   - 배포될 주소는 다음과 같은 형식을 가지고 있는데
     ```markdown
     https://user-app.krampoline.com/[uid]
     ex) https://user-app.krampoline.com/kaw3ge2123sa
     ```
     - react-router-dom에서 /product 페이지로 이동한다고 하면
       - [https://user-app.krampoline.com/product](https://user-app.krampoline.com/product)의 경로로 접근이 된다.
       - 우리는 [https://user-app.krampoline.com/[uid]/product](https://user-app.krampoline.com/product) 의 경로로 접근이 필요하다.
     - kargo 배포시 .env 환경변수를 자동으로 추가해 주는 기능을 제공하는데
       ```markdown
       **_ 아래 내용은 이해를 돕기 위해 추가한 내용입니다. 배포 시 아래 내용으로 자동으로
       삽입됩니다._**
       PUBLIC_URL=/[uid]
       REACT_APP_PATH=/[uid]
       ```
     - 자동으로 추가될 환경변수를 이용하여 path들을 수정할 필요가 있다.
   - 수정 예시

     - 상수로 path를 정의 + || 연산자를 이용하여 환경변수가 없을 때에도 영향이 없도록 처리가 필요하다

     ```JavaScript
     import { BrowserRouter, Routes, Route } from 'react-router-dom';
     const staticServerUri = process.env.REACT_APP_PATH || "";

     function App() {
     return (
        <div className="layout">
            <BrowserRouter>
                <Routes>
                {/_ 단독 레이아웃 _/}
                <Route path={staticServerUri + "/login"} element={<Login/>}></Route>
                    <Route path={staticServerUri + "/signup"} element{<SignUp >}></Route>
                <Route element={<MainLayout />}>
                <Route path={staticServerUri + "/"} element={<Main />}></Route>
                <Route path={staticServerUri + "/product/:productId"} element={<Detail />}></Route>
                <Route path="\*" element={<NotFound />}></Route>
                </Route>
                </Routes>
            </BrowserRouter>
        </div>
     );
     }
     ```

     ```JavaScript
     import { Link, useNavigate } from "react-router-dom";
     const staticServerUri = process.env.REACT_APP_PATH || "";
     function App() {
        const navigate = useNavigate();
        useEffect(() => {
            if (cartItems.length === 0) {
                navigate(staticServerUri + "/");
            }
        }, [cartItems.length, navigate]);
     return (
        <Col>
            <Link to={staticServerUri + "/product/" + props.product.id}>
        </Col>
        );
     }
     ```

3. 프로젝트 루트 디렉토리에 default.conf 파일 생성 및 nginx 설정 진행
   - Dockerfile에서 nginx 설정을 진행하는 코드가 있는데 여기서 이용될 default.conf 파일을 생성, 작성해야 한다.
   - 프로젝트 루트에 default.conf 파일을 생성 및 작성
   - default.conf 소스코드
     ```markdown
     server {
     server*name *;
     location / {
     proxy_pass http://localhost:3000;
     }
     location /api/ {
     proxy_pass http://backend-service.default.svc.cluster.local:8080/;
     }
     }
     ```
4. Dockerfile 생성 및 작성 - D2Hub 이미지 빌드에 필요

   - 마찬가지로 프로젝트 루트에 Dockerfile을 생성한다. 확장명이 없는 파일이다.
   - Dockerfile 소스코드

     ```markdown
     FROM krmp-d2hub-idock.9rum.cc/goorm/node:16
     WORKDIR /usr/src/app
     COPY package\*.json ./
     RUN npm ci
     COPY . .

     RUN apt-get update && \
      apt-get install -y nginx && \
      rm -rf /var/lib/apt/lists/\* && \
      rm /etc/nginx/sites-enabled/default
     COPY default.conf /etc/nginx/conf.d/

     RUN npm install -g serve

     CMD npm run build && service nginx start && serve -s build
     ```

5. 지금까지의 변경 사항을 main 브랜치에 push 한다(개인 레포지토리)
6. 크램폴린 IDE에서 해당 소스저장소(GitHub Repo)를 연동한 컨테이너를 생성한다.
   - 컨테이너 생성
   - 외부 프로젝트 불러오기
     - 해당 개인 레포지토리 연결
   - 소프트웨서 스택 선택 - React 선택
7. D2Hub → 레포지토리 생성 → 레포지토리 이미지 빌드(빌드하기 버튼)
8. Kargo App 생성 → 배포하기(앱 등록하기 버튼)
9. 외부접속 URL을 설정하여 DKOS 클러스터에 배포된 자신의 app의 구동을 확인합니다.
   - 개별 URL 주소가 발급된다.
   - 발급되는 url의 형식은 [https://user-app.krampoline.com/](https://user-app.krampoline.com/)[사용자 별 uid]
10. 앱 배포후 수정사항이 발생하면 수정사항 반영 후 앱 재배포를 수행
    - 코드 수정 → 레포지토리 main 브랜치에 push
    - D2Hub Repo 빌드 (기존에 생성된 D2Hub Repo에서 빌드하기 버튼 클릭)
    - 이후 Kargo app 배포 (기존에 생성된 Kargo app에서 배포하기 버튼 클릭)
11. 배포한 앱의 로그 확인, 배포한 DB에서 SQL문 실행하는 방법 - PDF 참조
</details>

## 추후 수정 예정 사항

- 배포 환경에서 로그아웃이 정상적으로 작동하지 않는 문제
- 카카오 크램폴린 링크 만료 후 다른 플랫폼에서 배포
- 배포를 위한 브랜치 생성하여 배포는 해당 브랜치로 수행
- 현재 main 브랜치는 배포를 위해 static path가 수정되어있는데 이를 수정할 예정이다.

## 주차별 과제 내용

<details>
<summary>접기/펴기</summary>
<details>
<summary>Step-2.-Week-1</summary>
<div>
  
## 카카오 테크 캠퍼스 2단계 - FE - 1주차 클론 과제

</br>

## **과제명**

```
1. 쇼핑몰 웹사이트 탐색을 통한 페이지 구성
2. UI 컴포넌트의 명칭과 사용법 익히기
```

</br>

## **과제 설명**

✅**과제 1.**

```
쇼핑몰 웹사이트를 탐색해 어떠한 페이지 구성을 가지고 있는지 체크합니다.
대부분의 쇼핑몰은 다음의 페이지 구성을 가지고 있습니다.

- 메인 페이지
- 상품 검색 결과 페이지
- 개별 상품 상세 페이지
- 주문 목록 페이지
- 결제 페이지
- 결제 완료 페이지
- 장바구니 페이지
- ...

이와 같이 위의 서비스가 동작하는데 필수적인 페이지가 무엇이 있고, 해당 페이지에서 어떠한 기능이 구현되어야 하는지 작성하세요.
그리고 어떠한 디렉터리 구조로 프로젝트를 진행할지 작성해주세요. (README.md 파일에 작성)
```

```
README.md의 예시 형식입니다. 아래를 참고해 작성해주세요.
각 페이지마다 핵심 기능, 기능 상세 설명, 인터페이스 요구사항이 어떤 것이 있을지 고민해서 작성해주세요.

###예시

#페이지별 구성
1. 로그인 페이지
- 핵심 기능: 로그인 요청 및 사용자 로그인 정보 저장
- 기능 상세 설명: 이메일과 비밀번호를 이용해 로그인을 진행하고, 이에 대한 상태 처리를 합니다.
- 인터페이스 요구사항: 이메일 또는 비밀번호에 들어온 값이 적합하지 않은 경우 적절한 알림을 보냅니다.
-- ...

#디렉터리 구조
- public
- src
- components
- hooks
- routes
- styles
- dto
- ...
```

</br>

✅**과제 2.**

```
프론트 개발자가 다른 프론트 개발자와 소통 및 UI 디자이너와 소통하는데 필수적인 UI 컴포넌트의 명칭과 사용법을 익힙니다.
수업시간에 배운 컴포넌트의 명칭과 사용법 이외에 대표적인 UI 라이브러리 홈페이지를 조사해보면 수많은 컴포넌트가 어떤식으로 동작하는지 확인할 수 있습니다.
리액트 프로젝트를 생성하고, 토스트, 브래드크럼, 캐러셀, 라디오버튼, 토글버튼, 체크리스트를 UI 라이브러리가 아닌 자신만의 방식으로 스타일링하고 상태 관리를 적용해 코드를 작성하세요.
작성된 코드는 레퍼지토리에 업로드하여 멘토님에게 전달해주세요.
```

</br>

✅**과제 3.**

```
각 컴포넌트를 시현해 볼 수 있는 페이지를 만드세요.
하나의 페이지에 모든 컴포넌트를 둬도 좋고, 각 페이지별로 분리해도 괜찮습니다.
```

</br>

## **과제 상세 : 수강생들이 과제를 진행할 때, 유념해야할 것**

```
1. README.md 파일은 동료 개발자에게 프로젝트에 쉽게 랜딩하도록 돕는 중요한 소통 수단입니다.
해당 프로젝트에 대해 아무런 지식이 없는 동료들에게 설명하는 것처럼 쉽고, 간결하게 작성해주세요.

2. 좋은 개발자는 디자이너, 기획자, 마케터 등 여러 포지션에 있는 분들과 소통을 잘합니다.
UI 컴포넌트의 명칭과 이를 구현하는 능력은 필수적인 커뮤니케이션 스킬이자 필요사항이니 어떤 상황에서 해당 컴포넌트를 사용하면 좋을지 고민하며 코드를 작성해보세요.
```

</br>

## **코드리뷰 관련: PR시, 아래 내용을 포함하여 코멘트 남겨주세요.**

**1. PR 제목과 내용을 아래와 같이 작성 해주세요.**

> - PR 제목 : 부산대FE\_라이언\_1주차 과제

</br>

</div>
</details>

---

<details>
<summary>Step-2.-Week-2</summary>
<div>

## 카카오 테크 캠퍼스 2단계 - FE - 2주차 클론 과제

</br>

## **과제명**

```
1. 코드 디자인 패턴과 상태 관리
```

</br>

## **과제 설명**

✅**과제 1. 아토믹 컴포넌트 디자인 패턴 사용**

```
- 회원가입, 로그인 페이지 개발에 필요한 컴포넌트를 아토믹 디자인 패턴을 사용해 작성하세요.
- 작성한 컴포넌트는 사용의 편의성을 위해 Props에 적절한 주석을 달아주세요.
```

</br>

✅**과제 2. 회원 가입, 로그인 페이지 개발**

```
- 백엔드 API 문서를 참고하여 회원가입, 로그인 페이지를 개발하세요.
- 각 페이지에는 적합한 값이 입력되도록 하고, 적절하지 않은 값이 들어온 경우 API 요청을 보내기 전에 프론트에서 에러 캐칭을 해주세요.
- 회원가입, 로그인 후에는 메인 페이지로 리다이렉트하세요.
- API 응답 과정에서 로그인이 실패하는 경우, 회원가입이 실패한 경우에 대해서 에러 캐칭도 적용해야 합니다.
```

</br>

✅**과제 3. 상태관리 모듈 적용**

```
- 로그인 후에 사용자의 정보를 상태관리 모듈을 하나 선정해 저장하고 불러올 수 있도록 코드를 작성하세요.
- 사용자가 로그인 상태일 때는 GNB 영역에 로그인 버튼이 보이면 안됩니다.
- 로그아웃시 상태를 초기화하세요.
- 새로고침 시에도 상태를 잃지 않고 유지해야 합니다.
- 일정한 시간이 지나면 로그인 유지가 끝나도록 설정하세요.(예: 1일)
```

</br>

## **과제 상세 : 수강생들이 과제를 진행할 때, 유념해야할 것**

```
1. 아토믹 컴포넌트를 작성할 때 Atoms, Molecules에 반드시 특정한 컴포넌트가 들어갈 필요는 없습니다. 개발자의 주관이 들어갈 수 있는 부분이니 적절한 뎁스로 나누어보세요.

2. API 요청을 보내고, 응답 받을 때 성공 케이스만 생각해 코드를 작성하는 경우가 많습니다. 숨은 에러 케이스는 없을지 한 번 더 고민해보세요.

3. 상태 관리 모듈은 자신이 써보고 싶은 어떤 모듈이던 상관 없습니다. 모듈을 사용해보면서 모듈에 들어가는 미들웨어나 툴도 사용해보세요.
```

</br>

## **코드리뷰 관련: PR시, 아래 내용을 포함하여 코멘트 남겨주세요.**

**1. PR 제목과 내용을 아래와 같이 작성 해주세요.**

> - PR 제목 : 부산대FE\_라이언\_2주차 과제

</br>

**2. PR 내용 :**

> - 코드 작성하면서 어려웠던 점
> - 코드 리뷰 시, 멘토님이 중점적으로 리뷰해줬으면 하는 부분

</div>
</details>

---

<details>
<summary>Step-2.-Week-3</summary>
<div>

## 카카오 테크 캠퍼스 2단계 - FE - 3주차 클론 과제

</br>

## **과제명**

```
1. 비동기 통신 활용과 레이아웃
```

</br>

## **과제 설명**

✅**과제 1. 상품 목록 페이지 개발**

```
- 백엔드 API 문서를 참고하여 상품 목록 페이지를 개발하세요.
- 페이지네이션을 이용해 페이지 값을 증가시켜가며 조회될 수 있도록 코드를 작성해주세요.
- 데이터 로딩 과정에 로더를 구현하세요.
- 데이터 불러오기를 할 때 react-query를 사용해보세요.
```

</br>

✅**과제 2. 스켈레톤과 로더**

```
- 컴포넌트에 props를 전달해 데이터 로딩 중 스켈레톤 또는 로더가 적용될 수 있도록 코드를 작성해보세요.
- 상품 목록 카드에 스켈레톤을 적용하세요.
- 페이지 전체에 대한 로딩이 진행될 때는 글로벌 로더를 적용해보세요.(적절한 모듈을 찾아 적용해도 좋습니다.)
```

</br>

✅**과제 3. 백엔드 상태 코드 반응**

```
- API 응답에 대해 전처리 하는 코드를 작성해보세요.
- 200, 300, 400, 500번 대의 상태 코드별 에러 캐칭이 필요한 경우라면 해당 함수에서 먼저 실행되도록 코드를 작성합니다.
- react-query에서 전처리하는 방식이 있다면 해당 방식을 적용하거나 또는 별도의 함수나 클래스를 만들어 관리를 시도해보면 됩니다.
```

</br>

## **과제 상세 : 수강생들이 과제를 진행할 때, 유념해야할 것**

```
1. 스켈레톤과 로더를 바텀부터 만들기보단 Codepen 등을 참고해 구현하고, Props를 통한 실제 적용에 집중해주세요.
2. 과제 3번을 해결할 때 Facade pattern을 참고해보세요.
3. 과제 1번을 해결할 때 react-query를 사용해보되 전체 프로젝트에 react-query를 적용할 필요는 없습니다. 하나 이상의 API 요청에 적용해보세요.
```

</br>

## **코드리뷰 관련: PR시, 아래 내용을 포함하여 코멘트 남겨주세요.**

**1. PR 제목과 내용을 아래와 같이 작성 해주세요.**

> - PR 제목 : 부산대FE\_라이언\_3주차 과제

</br>

**2. PR 내용 :**

> - 코드 작성하면서 어려웠던 점
> - 코드 리뷰 시, 멘토님이 중점적으로 리뷰해줬으면 하는 부분

</div>
</details>

---

<details>
<summary>Step-2.-Week-4</summary>
<div>
  
## 카카오 테크 캠퍼스 2단계 - FE - 4주차 클론 과제
</br>

## **과제명**

```
상세 페이지 개발과 라이브러리
```

</br>

## **과제 설명**

✅**과제 1. 상품 상세 페이지 개발**

```
- 백엔드 API 문서를 참고하여 상품 상세 페이지를 개발하세요.
- 한 개의 UI 라이브러리를 선정해 사용해보세요.
- 적절하지 않은 상품 ID 값이 들어오거나 찾을 수 없는 상품일 때 404 페이지 또는 "상품을 찾을 수 없습니다."라는 메시지가 있는 페이지로 이동될 수 있도록 코드를 작성하세요.
- 데이터 로딩이 완료될 때까지 로더를 적용하세요.
- '장바구니 담기' 버튼과 '구매' 버튼을 나누어 배치하세요.
```

</br>

✅**과제 2. 장바구니 페이지 개발**

```
- 백엔드 API 문서를 참고하여 장바구니 페이지를 개발하세요.
- 담아둔 상품에 대해 조회, 수량 변경, 항목 삭제가 구현되어야 합니다.
- '결제하기' 버튼을 만들고, 클릭시 결제 페이지로 이동될 수 있도록 개발하세요.
- 다른 모든 페이지와 마찬가지로 비동기 데이터 요청이 발생하니 로더 또는 스켈레톤을 통해 장바구니 목록을 불러올 때 로딩 상태를 표시하세요.
```

</br>

## **과제 상세 : 수강생들이 과제를 진행할 때, 유념해야할 것**

```
1. UI 라이브러리를 사용할 때 모든 구성요소에 UI 라이브러리의 규칙을 적용할 필요는 없습니다. UI 라이브러리의 사용법을 익히고, 하나 이상의 컴포넌트에 적용해봅니다.
```

</br>

## **코드리뷰 관련: PR시, 아래 내용을 포함하여 코멘트 남겨주세요.**

**1. PR 제목과 내용을 아래와 같이 작성 해주세요.**

> - PR 제목 : 부산대FE\_라이언\_4주차 과제

</br>

**2. PR 내용 :**

> - 코드 작성하면서 어려웠던 점
> - 코드 리뷰 시, 멘토님이 중점적으로 리뷰해줬으면 하는 부분

</div>
</details>

---

<details>
<summary>Step-2.-Week-5</summary>
<div>

## 카카오 테크 캠퍼스 2단계 - FE - 5주차 클론 과제

</br>

## **과제명**

```
주문 결제 개발
```

</br>

## **과제 설명**

✅**과제 1. 주문 결제 페이지 개발**

```
- 백엔드 API 문서를 참고하여 주문 결제 페이지를 개발하세요.
- 결제 페이지에서는 결제 전 결제 상세 정보에 대한 데이터를 조회하고, 결제를 확정하는 기능 2가지에 중점을 둡니다.
```

</br>

✅**과제 2. 테스트 결제**

```
- 한 개의 PG 서비스 또는 PG 서비스를 돕는 서드파티 앱을 사용해 개발합니다.
- 테스트 환경에서 결제를 성공해야 합니다.
- 결제가 실패하는 경우(잔고 부족, 결제 정보 불일치 등)에 대해 에러 캐칭을 적용하세요.
- 다양한 에러 상황에 대해 주석으로 에러 상황과 대응 방식을 설명해주세요.
```

</br>

## **과제 상세 : 수강생들이 과제를 진행할 때, 유념해야할 것**

```
1. 결제를 구현할 때 새로운 모듈을 학습하는데 있어서 생각보다 시간 소요가 클 것입니다. 또한 몇몇의 PG사에서 제공하는 SDK의 경우 리액트와 호환성이 나쁜 경우도 있습니다.
2. 테스트 결제시에 실제 비용이 나가는 것처럼 보이는 경우도 있습니다. PG사마다 정책이 다르지만 대부분 테스트 금액은 1일 이내로 환급받는 구조입니다.
3. 결제시에는 생각보다 많은 데이터를 하나의 페이로드에 담아 전달해야 합니다. 이 과정에서 데이터가 적절하지 않은 값이 들어갈 가능성이 높고, 코드가 복잡해질 수 있습니다. 기능 단위를 나누어 함수형 프로그래밍을 시도해보는게 도움이 될 수 있습니다.
```

</br>

## **코드리뷰 관련: PR시, 아래 내용을 포함하여 코멘트 남겨주세요.**

**1. PR 제목과 내용을 아래와 같이 작성 해주세요.**

> - PR 제목 : 부산대FE\_라이언\_5주차 과제

</br>

**2. PR 내용 :**

> - 코드 작성하면서 어려웠던 점
> - 코드 리뷰 시, 멘토님이 중점적으로 리뷰해줬으면 하는 부분

</div>
</details>

---

<details>
<summary>Step-2.-Week-6</summary>
<div>

## 카카오 테크 캠퍼스 2단계 - FE - 6주차 클론 과제

</br>

## **과제명**

```
프로젝트 마무리
```

</br>

## **과제 설명**

✅**과제 1. 배포**

```
- 카카오 배포환경을 통해 배포를 진행합니다.
- 계정을 생성하고 자신의 레포지토리를 연결해 배포합니다.
- 배포 레벨에서 사용될 환경 변수는 인스턴스에 적용되도록 직접 설정해줍니다.
- 배포에 사용될 브랜치는 개발 브랜치와 꼭 분리합니다.
```

</br>

✅**과제 2. 프로젝트 마무리**

```
- 모든 핵심 기능이 정상 작동되도록 숨은 버그와 기능을 점검합니다.
- 특정한 파일이 너무 크다면, 코드 내의 함수를 다른 파일로 옮겨 import / export 하는 등 코드 리펙터링을 진행합니다.
- 개발 환경과 배포 환경 모두 버그가 없는지 체크합니다.
```

</br>

✅**과제 3. README.md 정리**

```
- 배포한 환경에 대해 구체적인 설명을 남겨주세요.
- 포함될 내용은 배포 순서, 배포에 영향 받는 브랜치, 배포시 주의 사항, 배포 환경 등 다른 개발자가 해당 프로젝트를 인수인계 받았을 때 문제가 없도록 꼼꼼히 작성합니다.
```

</br>

## **과제 상세 : 수강생들이 과제를 진행할 때, 유념해야할 것**

```
1. 많은 서비스가 개발 레벨에서는 잘 작동하다가도 배포 단계에서 에러를 만나는 경우가 많습니다. 배포 후에 기능을 하나하나 점검해보고, 여러 환경에서 시도해보세요.

2. 배포된 환경을 하나의 브라우저에서만 테스트하지 말고, 최대한 다양한 디바이스와 브라우저에서 테스트해보세요. 삼성 브라우저, 아이폰 사파리, 데스크탑이라면 크롬, 사파리, 파이어폭스 등으로 테스트해보세요.

3. 코드를 시간이 지나서 보면 어떤 목적으로, 왜 만들었는지 알아보기 힘든 경우가 많습니다. 기본적인 내용이라 생각한 부분도 주석을 달아주세요.
```

</br>

## **코드리뷰 관련: PR시, 아래 내용을 포함하여 코멘트 남겨주세요.**

**1. PR 제목과 내용을 아래와 같이 작성 해주세요.**

> - PR 제목 : 부산대FE\_라이언\_6주차 과제

</br>

**2. PR 내용 :**

> - 코드 작성하면서 어려웠던 점
> - 코드 리뷰 시, 멘토님이 중점적으로 리뷰해줬으면 하는 부분

</div>
</details>

</details>
