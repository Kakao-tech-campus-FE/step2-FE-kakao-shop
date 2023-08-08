# KAKAO_CLONE_CODING
카카오 쇼핑 홈페이지를 간단하게 클론 코딩한 프로젝트 입니다.
대략적인 기능으로는 홈화면에 상품 조회, 캐러셀 (홍보물 사진들), 로그인 로그아웃, 장바구니, 구매(PG사 결제 미포함)가 구현되어 있습니다.

# 과제 수정 리드미 요청사항

### 2주차
1. 상태 관리 모듈을 사용한 로그인 상태 관리
	- /services/index.js에 axios와 기존 제공해주신 백엔드 서버로 연결해놨었는데 현재는 배포 코드로 바뀌어 있어서 5주차 과제 확인하시면 될 것 같습니다
2. 아톰 컴포넌트에 Props에 대한 주석
	- CartItem.jsx 처럼 위에 item 주석 달았습니다.

### 3주차
1. 백엔드 응답 상태에 따른 에러 처리
	- services/index.js 51번째 줄부터 처리함
2. react-query로 비동기 처리
	- CartPage, HomePage, OrderCompletePage, OrderPage, ProductDetailPage에 {useQuery}로써 react-query를 사용하여 데이터를 비동기 처리하였습니다.
3. 로더
	- src/component/atoms/Loader 파일이 실행중입니다

### 4주차
1. 상품을 찾을 수 없을때 에러캐칭
	- /store/slices/productSlice.js에 36번째줄 builder를 추가하여 상품을 찾을 수 없을때 alert창이 뜨도록 구현함
2. 에러캐칭에 대한 시나리오 주석 명시
	- services/index.js에서 51번째줄부터 각 에러들에 대한 시나리오 및 주석 코드를 추가함


# Command
₩₩₩ bash
npm install # 의존성 모듈 설치
npm run build # 패키지 번들링
npm run start # 프로젝트 실행
₩₩₩


### 페이지별 구성

1. 메인 페이지
- 핵심 기능: 버튼들을 눌렀을때 해당하는 페이지로 이동하게끔 중간다리 역할을 해준다.
- 기능 상세 설명: 상단바(GNB바_홈, 로그인, 로그아웃, 회원가입), 캐러셀(상품들 광고), 상품들 조회
- 인터페이스 요구사항: 많은 유저가 사용할 수 있도록 심미적으로 보기 좋고, 누구나 사용할 수 있게끔 직관적이어야한다.

2. 개별 상품 상세 페이지
- 핵심 기능: 상품 사진 및 가격 및 세부정보, 옵션 선택 및 조회, 리뷰 수, 장바구니에 담기
- 기능 상세 설명: 상품에 대한 사진과 설명을 조회하고, 옵션을 선택하고 장바구니에 담을 수 있다.
  * 이때 로그인이 된 상태에서만 장바구니에 물건 담기가 가능하다.
- 인터페이스 요구사항: 옵션을 선택했을때 장바구니에 물건이 담도록 만든다.

3. 주문 목록 페이지
- 핵심 기능: 배송지와 주문상품 정보 조회, 결제 금액에 대한 화면, 약관 동의
- 기능 상세 설명: 기본 배송지를 불러올수있게한다.
- 인터페이스 요구사항: 위 핵심기능의 3가지를 화면에서 출력하고 최종 결제 금액과 결제하기 버튼을 생성한다.

4. 결제 완료 페이지
- 핵심 기능: 결제하기
- 기능 상세 설명: 결제하기 버튼을 누르면 장바구니에서 아이템들이 삭제되고, api가 적절하게 통신이 될때 "결제가 완료되었습니다"라는 alert창이 출력된다. 
	"쇼핑계속하기" 버튼을 클릭하면, 홈화면으로 이동된다.
- 인터페이스 요구사항: 결제금액과 내가 주문한 상품들의 옵션 및 상품명을 화면에 띄운다. 

5. 장바구니 페이지
- 핵심 기능: 내가 담은 상품들을 조회할 수 있다.
- 기능 상세 설명: 옵션 조절이 가능하다.
- 인터페이스 요구사항: 장바구니 밑에 내가 체크한 제품들만 구매를 진행한다.

6. 로그인 페이지
- 핵심 기능: 로그인 요청 및 사용자 로그인 정보 저장 (token)
- 기능 상세 설명: 이메일과 비밀번호를 이용해 로그인이 진행된다.
- 인터페이스 요구사항: 이메일 또는 비밀번호에 들어온 값이 적합하지 않은 경우 적절한 팝업창이 화면에 출력됩니다.

7. 회원가입 페이지
- 핵심 기능: 회원가입 진행
- 기능 상세 설명: 비밀번호 유효성 검사(8-20자리 이내, 대소문자 사용 등), 이메일 중복 검사 등이 실시된다.
- 인터페이스 요구사항: 검사에 통과되지 못하면 안내 문구를 띄운다.


# Directory Pattern
- apiTest
	- apiTest.js : api를 test하기 위해 생성
- public
- src
	- component : 화면 UI에 필요한 아이들이 atoms(원소), molecules(분자), organisms(구조체), templates(틀) 의 형식으로 구성되어 있습니다.
		- atoms
			- Box.jsx
			- Button.jsx
			- Card.jsx
			- Carousel.jsx : 캐러셀 코드
			- CartItem.jsx : 장바구니에서 상품들을 담당하는 부분
			- Container.jsx 
			- Counter.jsx : 옵션에서 +,- 담당 부분
			- GNB.jsx : Global Navigation Bar로 홈화면, 로그인, 회원가입, 로그아웃 버튼이 구현되어 있음
			- Input.jsx
			- Label.jsx
			- Loader.jsx : 화면이 로딩될때 나타나는 컴포넌트
			- OptionItem.jsx : 상품의 옵션에 대한 정보
			- OptionList.jsx : 상품의 옵션들에 대한 리스트 형식으로 존재
			- Photo.jsx
			- Skeleton.jsx : 스켈레톤
			- Title.jsx
		- molecules
			- CartList.jsx : 장바구니 화면
			- InputGroup.jsx
			- OptionColumn.jsx : 상품의 상세페이지의 좌측 부분. 상품 사진, 제품명, 리뷰 수 등이 존재
			- ProductCard.jsx : 홈화면에서 상품들의 grid의 개별 컴포넌트 부분
			- ProductInformation.jsx : 상품 상세 페이지
		- Organisms
			- LoginForm.jsx : 로그인 화면 구성
			- ProductGrid.jsx : 홈화면에서 상품이 그리드 형태로 배치되는 부분
			- RegisterForm.jsx : 회원가입 화면의 구성
		- templates
			- MainProductTemplate.jsx 
			- OrderCompleteTemplate.jsx : 결제 완료 페이지
			- OrderTemplate.jsx : 주문하기 페이지
			- ProductDetailTemplate.jsx : 상품 상세 페이지
	- data
		- members.js : 고객 정보
	- hooks
	- img : 필요한 이미지 파일 존재
	- layouts
	- pages
		- CartPage.jsx : 장바구니 페이지
		- HomePage.jsx : 홈화면 페이지
		- LoginPage.jsx : 로그인 화면 구성
		- OrderCompletePage.jsx : 주문 완료 페이지 구성
		- OrderPage.jsx : 주문하기 페이지
		- ProductDetailPage.jsx : 상품 상세 페이지 (상품을 클릭했을때)
		- RegisterPage.jsx : 회원가입 페이지
	- services : api에서 해당 부분의 정보들을 받아옴
		- cart.js
		- index.js
		- order.js
		- product.js
		- user.js
	- store
	- style : components의 css들을 설정
	- Main


# 크램폴린 IDE를 통해 배포
1. 크램폴린 IDE로 접속한다. (http://something.com)
2. 컨테이너를 생성한다.
...
9. 터미널을 열고, ./start.sh를 통해 백엔드 환경을 실행한다.
10. 또 다른 터미널을 생성해 npm startfh 2000번대 포트에 리액트를 실행한다.


# 클론 코딩을 진행하면서..
  처음에는 import, export도 제대로 못하는 코린이 그 자체에다가 캐러셀 하나 만드는데 몇일이 걸렸었는데 이제는 캐러셀은 10분이면 만든다 .. (와) 확실히 너무 고통스러웠던 것 만큼 얻어가는게 많았던 것 같다. 
  이제 완성을 해보니 어떤 부분에서 아쉬움이 남는지가 느껴지는 단계에 와서 좋았다. 앞으로 코드를 짜게 된다면 기존의 atoms, molecules가 너무 불필요하게 세분화되어있는 것 같아서 정말 재사용을 잘 할수 있는, 자주 사용되는 얘들만 atoms으로 빼놓고 나머지는 Cart-Cartlist 이런식으로 써야지 앞으로는.



