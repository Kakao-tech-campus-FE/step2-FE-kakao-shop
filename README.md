# 카카오톡 쇼핑몰 클론코딩

<div align="center">
<img width="329" alt="image" src="">

</div>

# kakao-store v1.0

**카카오 테크 캠퍼스 프론트엔드**
<br/>
**개발기간: 2023.06 ~ 2022.08**

## 배포 주소

> **개발 버전** : [http://미정]() <br> > **프론트 서버** : [http:// 미정]()

## 프로젝트 소개

카카오 테크 캠퍼스 2차 프로젝트로 카카오 쇼핑몰 사이트를 클론코딩 하였다. 6주간의 기간동안 강의와 함께

## 시작 가이드

### Requirements

For building and running the application you need:

- [Node.js 18.17.0](https://nodejs.org/ca)
- [git](https://git-scm.com/downloads)

### Installation

```bash
$ git clone https://github.com/Jiho-Park-0/step2-FE-kakao-shop.git
$ cd kakao-store
```

#### Frontend

```
$ npm install
$ npm start
```

---

## Stacks 🐈

### Environment

![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-007ACC?style=for-the-badge&logo=Visual%20Studio%20Code&logoColor=white)
![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=Git&logoColor=white)
![Github](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=GitHub&logoColor=white)

### Config

![npm](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)

### Development

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=Javascript&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Bootstrap](https://img.shields.io/badge/Bootstrap-7952B3?style=for-the-badge&logo=Bootstrap&logoColor=white)
![tailwindcss](https://img.shields.io/badge/tailwindcss-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)

### Communication

![Slack](https://img.shields.io/badge/Slack-4A154B?style=for-the-badge&logo=Slack&logoColor=white)
![Notion](https://img.shields.io/badge/Notion-000000?style=for-the-badge&logo=Notion&logoColor=white)

---

## 화면 구성 📺

|                                                           메인 페이지                                                            |                                                         회원가입 페이지                                                          |
| :------------------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------------: |
| <img width="329" src="https://github.com/Jiho-Park-0/step2-FE-kakao-shop/assets/79912184/f61311a3-256b-4d69-850d-17353761b1bb"/> | <img width="329" src="https://github.com/Jiho-Park-0/step2-FE-kakao-shop/assets/79912184/8c3ab72a-5904-4718-9ac0-bf0bc47662e5"/> |
|                                                          로그인 페이지                                                           |                                                     제품 상세 페이지 페이지                                                      |
| <img width="329" src="https://github.com/Jiho-Park-0/step2-FE-kakao-shop/assets/79912184/6f6a58a3-da76-4c1e-91f9-24b4bd15b0d8"/> | <img width="329" src="https://github.com/Jiho-Park-0/step2-FE-kakao-shop/assets/79912184/9562a05f-151f-47d4-bffd-3b112c51f36d"/> |
|                                                         장바구니 페이지                                                          |                                                           주문 페이지                                                            |
| <img width="329" src="https://github.com/Jiho-Park-0/step2-FE-kakao-shop/assets/79912184/0294c2d9-a92e-4e65-87e7-019a5d22cc15"/> | <img width="329" src="https://github.com/Jiho-Park-0/step2-FE-kakao-shop/assets/79912184/c8ef7daa-9525-4548-98bd-6c6aace77255"/> |
|                                                         주문완료 페이지                                                          |                                                                                                                                  |
| <img width="329" src="https://github.com/Jiho-Park-0/step2-FE-kakao-shop/assets/79912184/50daaa1c-0571-47a5-8865-7cc0996516d6"/> |                                                    <img width="329" src=""/>                                                     |

---

## 주요 기능 📦

### ⭐️ Cookie를 통한 로그인 정보 저장

### ⭐️ 메인 페이지에서 제품 리스트를 확인 후 원하는 제품을 선택하여 상세 설명 확인 가능

### ⭐️ 원하는 제품을 장바구니에 담고 주문 하기 기능 구현

- 추후 변경사항 기입 예정

---

## 아키텍쳐

### 디렉토리 구조

```bash
└─ .stotybook : 테스트 파일들이 포함되는 폴더
└─ public : 정적 파일들이 포함되는 폴더
└─ src
 ├─ assets : 이미지 혹은 폰트와 같은 파일들이 저장되는 폴더
 ├─ components : 재사용 가능한 컴포넌트들이 위치하는 폴더
          └── atoms
          └── molecules
          └── organisms
          └── template
 ├─ hooks (= hoc) : 커스텀 훅이 위치하는 폴더
 ├─ imgaes : 아이콘 이미지 등을 위치하는 폴더
 ├─ layouts : 페이지들을 분류할 레이아웃들이 위치하는 폴더
 ├─ pages : 라우팅을 적용할 페이지 컴포넌트들이 위치하는 폴더
 ├─ services (= api) api관련 로직의 모듈 파일, auth와 같이 인증과 관련된 파일
 ├─ storage : 정보 저장에 필요한 함수들을 저장하는 폴더
 ├─ store : 리덕스를 활용한 상태 변환에 필요한 파일들이 위치하는 폴더
            └── slices
 ├─ styles : css 파일들이 포함되는 폴더
 ├─ utils 정규표현식 패턴이나 공통함수 등 공통으로 사용하는 유틸 파일들이 위치하는 폴더
 ├─ App.js
 └─ index.js
```
