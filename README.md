# REACT 쇼핑하기 프로젝트

배포 URL : https://user-app.krampoline.com/k81b1046ae592a


## Requirements
Node.js 
npm 

## Installation

1. clone repository
```
$ git clone https://github.com/localgaji/shopping.git
```

2. install package
```
npm install
```

3. run
```
npm run start
```



## Stacks
#### Enviroment
<div>
<img src="https://img.shields.io/badge/GIT-F05032?style=for-the-badge&logo=GIT&logoColor=white">
<img src="https://img.shields.io/badge/GITHUB-181717?style=for-the-badge&logo=GITHUB&logoColor=white">
<img src="https://img.shields.io/badge/VISUAL STUDIO CODE-007ACC?style=for-the-badge&logo=VISUAL STUDIO CODE&logoColor=white">
</div>

#### Config
<img src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white">

#### Development
<div>
<img src="https://img.shields.io/badge/JAVASCRIPT-F7DF1E?style=for-the-badge&logo=JAVASCRIPT&logoColor=white">
<img src="https://img.shields.io/badge/REACT-61DAFB?style=for-the-badge&logo=REACT&logoColor=white">
<img src="https://img.shields.io/badge/React Router-CA4245?style=for-the-badge&logo=React Router&logoColor=white">
<img src="https://img.shields.io/badge/React Query-FF4154?style=for-the-badge&logo=React Query&logoColor=white">
<img src="https://img.shields.io/badge/Redux ToolKit-764ABC?style=for-the-badge&logo=Redux&logoColor=white">
<img src="https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=Redux&logoColor=white">
</div>

#### CSS
<div>
<img src="https://img.shields.io/badge/tailwind-06B6D4?style=for-the-badge&logo=tailwind&logoColor=white">
<img src="https://img.shields.io/badge/styled components-DB7093?style=for-the-badge&logo=styled components&logoColor=white">
</div>

#### Test
<div>
<img src="https://img.shields.io/badge/puppeteer-40B5A4?style=for-the-badge&logo=tailwind&logoColor=white">
<img src="https://img.shields.io/badge/jest-C21325?style=for-the-badge&logo=styled components&logoColor=white">
</div>

## 배포 환경

카카오 크램폴린 이용

#### 배포 브랜치
main

#### 배포 환경 변수
링크를 사용하는 모든 react-router 컴포넌트 파일에 아래 static path를 불러와서 선언하고, 
링크의 앞부분에 static path를 붙여준다.
```
const staticServerUrl = process.env.REACT_APP_PATH || '';

// 예시
navigate(staticServerUrl + "/login")
```
#### 배포 순서
  1. 카카오 크램폴린 컨테이너 생성
  2. main 브랜치 연결
  3. 환경 변수 설정
  4. Docerfile, default.conf 파일 추가
  5. D2Hub 빌드하기
  6. Kargo 배포하기

## 주요 기능

<details>
<summary>페이지별 요구사항 및 기능</summary>
<div>
<br/>

- **메인 페이지**
  - 핵심 기능
    - 상품 목록 노출
  - 기능 상세 설명
    - 상품 클릭 시 이동
    - 스크롤 페이징
  - 인터페이스 요구사항
    - 상품 목록 카드 : 상품 이미지, 상품명, 가격 

<br/>

- **개별 상품 상세 페이지**
  - 핵심 기능
    - 상품 정보 노출
    - 옵션 선택 장바구니 담기
  - 기능 상세 설명
    - 상품 ID로 데이터 조회해서 출력
    - 상품 옵션 추가, 수량 조절, 삭제
    - 총 주문 금액 값 출력
  - 인터페이스 요구사항
    - 상품 정보 : 제목, 가격, 상품 상세 사진
    - 옵션 목록 : 옵션명 및 가격
    - 선택 옵션 : 선택한 옵션의 수량 및 가격, 총 수량, 총 주문금액
    - 구매 : 장바구니, 결제하기 버튼

<br/>

- **주문하기 페이지**
  - 핵심 기능
    - 배송지 지정, 결제수단 선택, 결제하기
  - 기능 상세 설명
    - 기본 배송지 출력, 요청사항 입력받기
    - 장바구니에서 넘어온 구매 상품 목록 출력
    - 결제 수단 선택
  - 인터페이스 요구사항
    - 배송지 정보 : 이름, 연락처, 주소, 요청사항
    - 주문 상품 : 각 상품의 이름, 옵션, 가격, 배송비
    - 결제금액 : 상품 금액, 배송비, 총 결제금액
    - 결제수단 : 카카오 페이, 기타 결제 (카드/휴대폰/무통장)
    - 약관 동의 및 법적 고지

<br/>

- **주문확인 페이지**
  - 핵심 기능
    - 특정 주문 id의 주문 정보
  - 기능 상세 설명
    - 배송지, 구매 상품 목록, 결제금액, 결제수단 출력

<br/>

- **로그인 페이지**
  - 핵심 기능
    - 로그인 요청, 사용자 로그인 정보 저장
  - 기능 상세 설명
    - 이메일 / 비밀번호 입력받아 정보 전송, 유효성 확인, 발급된 토큰 저장
  - 인터페이스 요구사항
    - 이메일, 비밀번호 형식 체크
    - 로그인 실패 시 실패 횟수 출력
    - 로그인 성공 시 메인 페이지로 이동

<br/>

- **회원가입 페이지**
  - 핵심 기능
    - 회원가입
  - 기능 상세 설명
    - 회원정보 입력받아 정보 저장 : ID, 이메일, 비밀번호
    - 이메일 중복 체크, 비밀번호 유효성 확인, 비밀번호 체크 일치 확인
    - 회원가입 성공 시 로그인 페이지로 이동 

<br/>

- **장바구니 페이지**
  - 핵심 기능
    - 장바구니에 담긴 상품을 조회, 변경, 구매
  - 기능 상세 설명
    - 장바구니에 담긴 상품 목록 출력, 수량 변경
    - 선택된 상품들의 총 결제금액을 요청하여 출력
  - 인터페이스 요구사항
    - 체크박스로 해당 상품 구매여부 선택
    - 숫자 입력창과 `+ -` 버튼으로 수량 조절
    - 구매하기 버튼 클릭 시 주문하기로 이동

</div>
</details>

## Directory

```
📂 public
  ┣ 📂 images
  ┗ 📄 index.html
📂 src
  ┣ 📂 __tests__
  ┣ 📂 apis
  ┣ 📂 assets
  ┣ 📂 auth
  ┣ 📂 components
     ┣ 📂 atoms
     ┣ 📂 molecules
     ┗ 📂 organisms
  ┣ 📂 reducers
  ┣ 📂 stores
  ┣ 📂 hooks
  ┣ 📂 pages
  ┣ 📂 utils
  ┣ 📄 App.js
  ┗ 📄 index.js
```


## Review

#### What I learned
- 프로젝트를 진행하며 React를 거의 처음부터 배웠고, React 사용에 어느정도 익숙해졌다.
- Atomic 컴포넌트 디자인 구조를 적용하여 여러 컴포넌트를 재사용했다.
- apis / components / hooks 에 걸쳐 관심사를 분리하는 방법을 알게되었다.


#### drawbacks
- 결제 테스트 모듈을 적용하지 못했다. 
- puppeteer 외에도 storybook, cypress, playwright 등으로 테스트 진행했으면 좋았을 듯
- jsx 파일에 prettier를 적용하지 않음
- 초반에 commit 단위를 파일 단위로 하지 않았다. 
- commit 메세지에 말머리로 분류를 했으면 좋았을 듯 `fix, feat, style, docs, refac 등`
