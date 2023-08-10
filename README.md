# 카카오 테크 캠퍼스 STEP 2 <카카오톡 쇼핑하기>

크램폴린 IDE에서 배포 진행하였습니다. 
## Link
https://user-app.krampoline.com/k43bce16d0541a


## How to start
1. `npm install`
2. `npm start`

## 주요 기능
1. 회원 가입, 로그인/로그아웃
2. 상품 Grid 형태로 표시
3. 상품 정보(옵션 선택) 확인
4. 장바구니 담기 
5. 장바구니 확인, 수량 조절
6. 상품 구매 (장바구니에 담긴 상품만 구매 가능)


## 디렉토리 구조
|-public
  |-index.html
|-src
  |-component
    |-atoms
    |-molecules
    |-organisms
    |-templetes
    |-services
    |-Week1
  |-pages :페이지
  |-layouts : 페이지 레이앙웃
  |-hooks : 커스텀 훅
  |-utils : convert(comma 함수)
  |-styles : css 파일
  |-store : 전역 상태
  |-App.js 

## 주요 라이브러리 
1. redux
redux를 통해 전역에서 로그인 상태관리를 더욱 쉽고 예측 가능하게 함
2. axios, react-query
axios와 react-query를 이용해 백엔드로부터 데이터(상품정보, 장바구니) 요청, 변경, 삭제에 관련된 코드를 단순화 시킴
3. styled-component, tailwindcss
css를 작성하는데 시간을 절약하고, 유지 보수가 쉽도록 함
4. react-router-dom
react-router를 이용해 리액트와 같은 SPA에서 컴포넌트 변화를 주어 업데이트된 부분만 리렌더링 해주고 뒤로가기가 가능해짐
