✅**과제 1.**
### 🟡 페이지별 구성
#### 01 메인 페이지
1. 전체 상품 조회(메인)
  - 핵심 기능: 전체 상품 조회
  - 기능 상세: 상품 조회가 가능한 메인 페이지.
  - 인터페이스 요구사항:
    </br>✔️ 주문 가능한 상품의 목록 표시
    </br>✔️ 상품명, 상품 가격, 이미지 등 표시
    </br>✔️ 검색, 배송조회, 장바구니 등 기능.

#### 02 상품 상세 페이지
1. 개별 상품 상세 조회
  - 핵심 기능: 제품 상세 
  - 기능 상세: 제품에 대한 정보(상품 이미지, 상품명, 가격, 옵션 등)를 상세히 제공. 
  - 인터페이스 요구사항:
    </br>✔️ 메인 페이지에서 상품 클릭 시 -> 상세조회 페이지로 이동
    </br>✔️ 스토어 정보, 구매 혜택, 상품 이미지, 상품명, 가격, 배송비 등 표시
    </br>✔️ 제품 상세 정보, 리뷰, 문의 페이지 표시.
    </br>✔️ 상품 주문 옵션 표시.

2. 상품 옵션 선택
  - 핵심 기능: 상품 주문 옵션 선택
  - 기능 상세: 상품 주문 시 선택할 수 있는 옵션 리스트 제공 및 선택 가능
  - 인터페이스 요구사항:
    </br>✔️ 상품 옵션 리스트 제공.
    </br>✔️ 상품 옵션 목록에서 요소 클릭 -> 선택 목록에 추가

3. 옵션 확인 및 수량 결정
  - 핵심 기능: 선택한 제품의 옵션과 수량 확인
  - 기능 상세: 선택한 제품의 옵션을 확인하고 수량을 결정, 이에 따른 합산된 가격 출력.
  - 인터페이스 요구사항:
    </br>✔️ 선택한 옵션목록 제공
    </br>✔️ 각 옵션별 수량 증감 가능(+, - 버튼)
    </br>✔️ 옵션과 수량에 따른 합산된 금액의 출력.

#### 03 회원가입과 로그인 페이지
1. 회원 가입
  - 핵심 기능: 회원 가입
  - 기능 상세: 회원 가입 시 필요한 항목들(아이디, 비밀번호, 이름 등)의 유효성 검사.
  - 인터페이스 요구사항:
    </br>✔️ 입력사항이 유효하지 않는 경우 알림
    </br>✔️ 회원가입 버튼 클릭 -> 회원가입 완료 페이지
    
    
2. 로그인
  - 핵심 기능: 로그인
  - 기능 상세: 아이디와 비밀번호를 입력하고 로그인 버튼 클릭 -> 서버로 요청.
  - 인터페이스 요구사항:
    </br>✔️ 로그인 페이지 - 아이디, 비밀번호 입력, 로그인 버튼.
    </br>✔️ 유효한 입력이 아닌 경우 알림.
    </br>✔️ 로그인 버튼 클릭 -> 유효한 계정인 경우 메인 페이지로 넘어가기

  +) 로그아웃
  - 핵심 기능: 로그아웃
  - 기능 상세: 로그아웃으로 표시
  - 인터페이스 요구사항:
    </br>✔️ 메인 페이지 상단의 로그인 상태를 로그아웃으로 변경.
  
#### 04 장바구니 페이지
1. 장바구니 담기(옵션 선택 페이지)
  - 핵심 기능: 장바구니 담기
  - 기능 상세: 장바구니에 선택된 상품을 담기. 서버로 목록 전달.
  - 인터페이스 요구사항:
    </br>✔️ 상세 페이지에서 장바구니 담기 클릭 -> 재확인 팝업 -> 장바구니로 이동할지 팝업을 통해 선택

2. 장바구니 상품 옵션 확인 및 수량 결정
  - 핵심 기능: 상품 목록 확인 및 수량 최종 결정
  - 기능 상세: 상품 목록, 수량, 합산 금액 확인 및 수량 변경 가능.
  - 인터페이스 요구사항:
    </br>✔️ 주문 수량 변경 가능한 버튼
    </br>✔️ 주문 상품, 수량, 합산금액 출력.
    </br>✔️ 주문하기 버튼 -> 결제 페이지

#### 05 결제하기 페이지
1. 주문
  - 핵심 기능: 상품 주문
  - 기능 상세: 주문하기 버튼 클릭 시 장바구니 상품 정보를 확인하고 결제관련 동의.
  - 인터페이스 요구사항:
    </br>✔️ 주문하기 버튼 클릭 -> 최종 주문 목록 및 결제하기 버튼
    </br>✔️ 주문 금액, 주문 상품 정보
    </br>✔️ 관련 동의 체크.

2. 결제
  - 핵심 기능: 결제
  - 기능 상세: 결제 하기 버튼 클릭 시 제품 결제가 가능하게 함.
  - 인터페이스 요구사항:
    </br>✔️ 결제하기 버튼 클릭 -> 결제 진행
    </br>✔️ 주문 상품 정보, 총 주문 금액, 결제 버튼 표시
    

3. 주문 결과 확인
  - 핵심 기능: 주문 결과를 확인
  - 기능 상세: 결제 후 주문한 내역을 다시 한 번 표시
  - 인터페이스 요구사항:
    </br>✔️ 구매 완료 안내문
    </br>✔️ 주문상품 정보, 결제 금액 다시 표시
    </br>✔️ 쇼핑 계속하기 버튼 클릭 -> 메인 페이지


### 🟡 디렉터리 구조
```
-/ public
-/ src
---/ components
---/ apis
---/ assets
---/ hooks
---/ styles
---/ pages
```
