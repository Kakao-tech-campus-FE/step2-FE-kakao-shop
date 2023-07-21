# Step-2.-Week4

-과제 1. 상품 상세 페이지 개발
-- 1. 백엔드 API 문서를 참고하여 상품 상세 페이지를 개발하세요.
-- 2. 한 개의 UI 라이브러리를 선정해 사용해보세요.
-- 3. 적절하지 않은 상품 ID 값이 들어오거나 찾을 수 없는 상품일 때 404페이지 또는 "상품을 찾을 수 없습니다." 라는 메세지가 있는 페이지로 이동할 수 있도록 코드를 작성하세요.
-- 4. 데이터 로딩이 완료될 때까지 로더를 적용하세요.
-- 5. '장바구니 담기' 버튼과 '구매' 버튼을 나누어 배치하세요.

과제 2. 장바구니 페이지 개발
-- 1. 백엔드 API 문서를 참고하여 장바구니 페이지를 개발하세요.
-- 2. 담아둔 상품에 대해 조회, 수량 변경, 항목 삭제가 구현되어야 합니다.
-- 3. '결제하기' 버튼을 만들고, 클릭 시 결제 페이지로 이동될 수 있도록 개발하세요.
-- 4. 다른 모든 페이지와 마찬가지로 비동기 데이터 요청이 발생하니 로더 또는 스켈레톤을 통해 장바구니 목록으 불러올 때 로딩 상태를 표시하세요.

과제1. 상품 상세 페이지 구조

ProductDetailPage 위치 : src/pages/
ㄴProductDetailTemplate 위치 : /components/templates/
ㄴProductInformationColumn 위치 : /components/molecules/
ㄴOptionColumn 위치 : /components/molecules/
ㄴCounter 위치 : /components/atoms/Counter

- 사용 api
  -- getProductById 위치 : src/services/product ProductDetailTemplate에서 사용
  -- addCart 위치 : /src/services/cart OptionColumn에서 사용

- UI 라이브러리 : Tailwind 사용.
- 404 페이지 : Tailwind 사용 템플릿 사용, src/pages/NotFoundPage.jsx
- Route는 App.jsx

과제 2. 장바구니 페이지

CartPage 위치 :src/pages/
ㄴCartList 위치 : src/components/molecules/
ㄴCartItem 위치 : src/components/atoms/
ㄴCounter

- 사용 api
  -- getCart 위치 : services/cart.js
  -- updateCart 위치 : services/cart.js

- UI 라이브러리 : Tailwind 사용.

- 현재 발견된 문제 : 다른 프로그램을 실행하다 다시 돌아오면 다시 렌더링이 되서 기존에 서버단에서 받아온 정보를 다시 불러옵니다.

처음 테스트 할 때는 마지막에 결제 페이지로 가는 버튼을 누르면 updateCart로 저장이 되기 때문에 발견을 못했습니다.(서버에 업데이트 한 정보를 보냈기 때문에)

문제가 되는 부분은 CartItem 아래 Counter 부분의 count 표시 부분인데요,
장바구니 페이지에서 옵션을 바꿔놓고 다른 프로그램으로 변경하다 다시 브라우저를 띄우면 재랜더링이 되면서 다시 옵션이 초기화되는 것으로 보입니다.

코드는 서버에서 받아온 카트 옵션의 수량을 초기 count(지금 선택 수량 보여주는 값)으로 설정하고 + 누르면 count 증가, - 누르면 count 감소하는 식이고, 변경된 값이 결제 버튼 누르면 update 되는 식인데요,

예를 들어 빗자루(대) 옵션 2개를 장바구니에 넣고 장바구니 페이지에서 옵션을 4개로 변경 시 count는 4가 되는데 다른 거 하다가 브라우저로 돌아오면 재랜더링이 되면서 count 2를 받아오는 일이 벌어집니다. 다시 +나 - 누르기 전까지 보이는 건 옵션 4개이고요. 물론 그 상태에서 +를 누르면 재랜더링해서 2를 받아왔으므로 3으로 바뀝니다.

수량을 변경할 때마다 update를 하고 싶지는 않은데 방법을 고민중입니다.
