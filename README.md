### 과제 &#10102; 페이지별 구성 

``
각 페이지 마다 핵심기능, 기능 상세 설명, 인터페이스 요구사항 작성
``


- **메인페이지**
    
    > - 핵심기능 : 전체 상품 조회, 주요 페이지 이동 
    > - 기능 상세 설명 : 전체 상품 조회 API로 주문이 가능한 전체 상품 목록 가져오기, 상품 이미지, 상품명, 가격정보를 사용자 화면에 출력 
    > - 인터페이스 요구사항 : 해당 구조를 화면에 출력
    > > - *Header*  상단에 고정된 navigation bar로 하위페이지(주요메뉴)로 이동 드롭다운(카테고리, 마이페이지)
    > > - *main banner*  Carousel (지정 프로모션)
    > > - *content*  상품을 분류하는 tab과 상품을 여러개 나열하는 카드 레이아웃 지정
    > > - *side bar*  할인, 적립, 후기 정보를 나타내는 배너 (플로팅 X, pagination사용한 카드 레이아웃) 


- **기획전 페이지**

    > - 핵심기능 : 기획전 상품 조회
    > - 기능 상세 설명 : 기획전 상품 조회 API로 해당 상품 목록 가져오기, 상품 이미지, 상품명, 가격정보를 사용자 화면에 출력
    > - 인터페이스 요구사항 :

| 입력 | 출력 |
|-|-|
| 메인 페이지에서 기획전 페이지 클릭 | 추천 상품을 보여주는 모달 창 나타내기 |



- **상품 검색 페이지**

    > - 핵심기능 : 특정 상품 검색 시 해당 상품에 대한 정보 출력 
    > - 기능 상세 설명 : 검색창에 특정 상품을 검색하면 전체 상품 조회 API를 통해 연관있는 상품 목록을 출력 
    > - 인터페이스 요구사항 :

| 입력 | 출력 |
|-|-|
| input field에서 text area 속성 사용하여 검색 텍스트 입력 | 1. 검색한 특정 상품과 연관있는 상품 목록을 출력 |
| |  2. 아래 컴포넌트를 화면에 출력 <br> - 검색 텍스트를 입력하는 *input fiel* <br> - 전체 상품과 스토어 분류 *tab* <br> - 검색 상품의 옵션을 선택하는 *Checkbox* <br> - 상품의 정렬 기준 선택 *Accordion* |



- **개별 상품 상세 페이지**

    > - 핵심기능 : 개별 상품 상세 조회 
    > - 기능 상세 설명 : 특정 상품 카드를 클릭하면 상품조회와 옵션조회 API를 통해 해당상품에 대한 상세정보와 옵션을 가져와 화면에 출력 
    > - 인터페이스 요구사항 :

| 입력 | 출력 |
|-|-|
| 특정 상품 클릭 | 1. 상품 정보 출력(상세정보, 리뷰, 문의를 _tab_으로 분류) |
|               | 2. 옵션 선택 플로팅 배너 |



- **주문 상품 조회 페이지**

    > - 핵심기능 : 주문 상품 조회
    > - 기능 상세 설명 : 사용자가 주문한 상품 API를 이용하여 주문 내역 조회
    > - 인터페이스 요구사항 :

| 입력 | 출력 |
|-|-|
| 1. 라디오 버튼으로 상품 유형 선택 <br> 2. 아코디언으로 조회 조건 선택 | 주문 상품 내역 출력  |



- **장바구니 페이지**

    > - 핵심기능 : 장바구니 상품 옵션 확인 및 수량 결정
    > - 기능 상세 설명 : 상품 별 구매금액 소계, 전체 주문합계 금액 출력 (금액은 백앤드에서 계산), 주문하기 버튼 클릭 시 주문하기 페이지로 이동
    > - 인터페이스 요구사항 :

| 입력 | 출력 |
|-|-|
| 주문 상품 + 버튼 | 주문 상품 수량 추가 |
| 주문 상품 - 버튼 | 주문 상품 수량 감소 |
| 주문하기 버튼 클릭 | 주문하기 페이지로 이동 |



- **주문하기 페이지**

    > - 핵심기능 : 주문 상품 결제 진행 
    > - 기능 상세 설명 : 장바구니에 담긴 상품들의 정보와 수량 확인, 일반 결제 금액 출력 
    > - 인터페이스 요구사항 :

| 입력 | 출력 |
|-|-|
| 결제하기 버튼 클릭 | 결제 진행 |



- **주문 완료 페이지**

    > - 핵심기능 : 주문 결과 확인 
    > - 기능 상세 설명 : 결제 성공 시, 주문 상품에 대한 주문 결과 출력 
    > - 인터페이스 요구사항 : 정상적으로 구매가 완료되었다는 메세지와 주문 상품 정보를 출력 



- **로그인 페이지**

    > - 핵심기능 : 회원 서비스 이용을 위한 로그인
    > - 기능 상세 설명 : 이메일과 비밀번호 입력 후 로그인 버튼을 클릭하여 상태 처리 
    > - 인터페이스 요구사항 :

| 입력 | 출력 |
|-|-|
| input field 에 이메일과 비밀번호를 입력  | 입력값 유효성 검사  |
| 로그인 버튼 클릭 | 유효한 사용자 일 경우 메인페이지로 이동 |



- **마이페이지**

    > - 핵심기능 : 회원 정보 확인 
    > - 기능 상세 설명 : 회원 정보 및 홈페이지 공지사항등의 이용 내용 확인 
    > - 인터페이스 요구사항 :

| 입력 | 출력 |
|-|-|
| 마이페이지 버튼 드롭다운 메뉴 (MY 쇼핑, 찜한 상품, 기프트 카드, 쿠폰함, 로그아웃)  | 메뉴 선택 시 마이페이지의 해당 하위 페이지로 이동  |


- - -

#### *디렉토리 구조*

``
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── APP.js
│   ├── assets/
│   │    ├── images/
│   │    └── css/
│   ├── components/
│   │    ├── Toast/
│   │    ├── CheckList/
│   │    ├── Toggle/
│   │    ├── Radio/
│   │    ├── BreadCrumb/
│   |    └── Carousel/
│   ├── pages/
│   │   ├── MainPage/
│   │   |     ├── mainpage.js 
|   │   |     └── mainpage.css
|   │   ├── SpecialExhibition/
│   │   |     ├── special_exhibition.js 
|   │   |     └── special_exhibition.css
|   │   ├── SearchPage/
│   │   |     ├── SearchPage.js 
|   │   |     └── SearchPage.css
|   │   ├── ProductDetails/
│   │   |     ├── ProductDetails.js 
|   │   |     └── ProductDetails.css
|   │   ├── OrderProductCheck/
│   │   |     ├── OrderProductCheck.js 
|   │   |     └── OrderProductCheck.css
|   │   ├── CartPage/
│   │   |     ├── CartPage.js 
|   │   |     └── CartPage.css
|   │   ├── OrderPage/
│   │   |     ├── OrderPage.js 
|   │   |     └── OrderPage.css
|   │   ├── OrderComplete/
│   │   |     ├── OrderComplete.js 
|   │   |     └── OrderComplete.css
|   │   ├── LoginPage/
│   │   |     ├── LoginPage.js 
|   │   |     └── LoginPage.css
|   │   └── MyPage/
│   │         ├── MyPage.js 
|   │         └── MyPage.css
|   ├── index.js
|   └── index.css
| 
| 
├── .gitignore
├── package.json
└── README.md
``
