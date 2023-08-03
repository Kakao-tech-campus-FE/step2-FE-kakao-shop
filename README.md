카카오 테크 캠퍼스 2단계 - FE - 1주차 클론 과제 </br>
**카카오 쇼핑하기**

<details>
<summary>Step-2.-Week-1</summary>
<div>

## ✅**과제 1.**

페이지별 구성
</br>
</br>
**1. 회원가입**

- **구성**: 이메일(아이디), 이름, 비밀번호, 비밀번호 확인, 회원가입 버튼
- **핵심 기능**: 서비스 이용을 위한 회원 가입
- **기능 상세 설명**: 이메일 아이디, 비밀번호 유효성 검사 후 회가입 진행
- **인터페이스 요구사항**:
  이메일(아이디), 이름, 비밀번호, 비밀번호 확인 입력 후 회원 가입 버튼 클릭
  로그인 페이지 이동

</br>

---

**2. 로그인 페이지**

- **구성**: 이메일(아이디), 비밀번호, 로그인 튼
- **핵심 기능**: 로그인 요청 및 사용자 로그인 정보 저장
- **기능 상세 설명**: 이메일과 비밀번호를 이용해 로그인을 진행하고, 이에 대한 상태 처리
- **인터페이스 요구사항**:
  이메일 또는 비밀번호에 들어온 값이 적합하지 않은 경우 적절한 알림을 보냄
  이메일(아이디), 비밀번호 입력 후 로그인 버튼 클릭
  전체 상품 조회 페이지(메인 페이지) 이동

</br>

---

**3. 메인 페이지**

- **구성**: 상품 리스트 정보 (상품명, 상품 가격, 상품 이미지), 공유하기 버튼(개별 사항)
- **핵심 기능**: 전체 상품 조회 및 화면 출력
- **기능 상세 설명**: 전체 상품 조회를 통해 주문이 가능한 전체 상품 목록을 가져옴
  상품 이미지, 상품명, 가격 정보를 사용자 화면에 출력
- **인터페이스 요구사항**:
  전체 상품 출력
  공유하기 버튼 클릭 시 해당 상품의 조회 페이지 전달

</br>

---

**4. 개별 상품(조회)**

- **구성**: 상품 이미지, 상품명, 상품 가격, 상품 옵션, 배송비, 총 가격, 장바구니 추가 버튼, 구매하기 버튼
- **핵심 기능**:
  1. 특정 상품 선택 시, 해당 상품에 대한 정보 출력
  2. 상품 상세 페이지에서 상품 옵션 선택
  3. 옵션 확인과 주문 수량 결정
  4. 장바구니에 상품 담기
- **기능 상세 설명**:
  1. 전체 상품 목록에서 특정 상품 카드를 클릭하면 상세 상품 조회와 옵션 조회 API를 통해 해당 상품에 대한 상세 정보와 옵션을 가져와 화면에 출력
  2. 상품 옵션 선택
  3. 상품 옵션 선택 후 선택한 옵션 재확인하고 수량을 결정할 수 있음.
     선택한 옵션과 수량에 따라 합계 금액이 출력됨
  4. 옵션 확인 및 수량 결정 후 "장바구니 담기" 버튼 클릭 시 상품들의 배열이 서버로 전달, 장바구니에 저장
- **인터페이스 요구사항**:
  1. 전체 상품 페이지에서 특정 상품 클릭
     상품 정보출력(상품 상세 페이지)
  2. 상품 옵션 리스트에서 상품 클릭
     선택한 옵션 추가 리스트
  3. 선택된 옵션 별 +/- 버튼으로 주문 수량 수정
     +/- 버튼에 따라 각 옵션 수량 변동, 그에 따른 합계 금액 출력
  4. 장바구니에 버튼 클릭
     "장바구니에 상품이 담겼습니다." 팝업 안내

</br>

---

**5. 장바구니**

- **구성**: 담은 상품 정보(상품명, 옵션, 수량, 가격), 삭제 버튼, 수량 수정 버튼, 총 금액(주문 예상 금액), 주문하기 버튼
- **핵심 기능**:
  1. 장바구니에 담긴 상품을 확인
  2. 장바구니에 담긴 상품(옵션)에 대한 주문 수량 변경 가능
- **기능 상세 설명**:
  1. 장바구니에 담긴 상품 데이터(상품명, 옵션, 수량)를 출력
  2. 상품별 구매금액 소계, 전체 주문 합계 금액 등을 화면에 출력
     주문하기 버튼을 통해 주문/결제 화면으로 이동
- **인터페이스 요구사항**:
  1. 장바구니 상품 데이터 출력
  2. 담긴 상품 별 +/- 버튼으로 주문 수량 수정
     +/-버튼에 따라 각 옵션 수량 변동, 그에 따른 합계 금액 표출

</br>

---

**6. 상품 주문 및 결제**

- **구성**: 주문 상품 정보, 총 주문 금액, 구매 조건 확인 및 결제 진행 동의, 개인정보 제3자 제공 동의, 결제하기 버튼
- **핵심 기능**:
  1. 장바구니 상품을 주문하기 버튼 클릭하여 결제 단계로 이동
  2. 실제 결제 절차 없이 상품을 주문한 것으로 처리
- **기능 상세 설명**:
  1. 장바구니에서 "주문하기"버튼 클릭 시 장바구니 상품들의 배열을 서버에 장바구니 수정을 요청
     장바구니에 담긴 상품들의 정보와 수량을 확인
     일반 결제 금액(총 결제 금액)을 출력
     구매 조건 확인 및 결제 진행 동의, 개인정보 제3자 제공 동의를 체크 박스로 입력 받음
  2. "결제하기" 버튼 클릭 시 실제 결제 절차 없이 상품을 주문한 것으로 처리
- **인터페이스 요구사항**:
  1. 주문하기 버튼 클릭
     주문상품 정보 및 결제하기
  2. 결제하기 버튼 클릭
     주문 결과 확인 페이지로 이동

</br>

---

**7. 결제 완료**

- **구성**: 주문 상품 정보(상품명, 수량, 옵션, 주문 번호), 결제 금액, 쇼핑 계속하기 버튼
- **핵심 기능**: 결제 성공 시, 주문 상품에 대한 결과 출력
- **기능 상세 설명**: 주문한 상품(들)에 대한 주문 결과를 출력
- **인터페이스 요구사항**: 주문 상품에 대한 주문 결과 상세 출력

</br>

---

## ✅**디렉터리 구조**

![image](https://github.com/H-sooyeon/step2-FE-kakao-shop/assets/56586470/b0e8fcf0-b719-4fbd-8691-211ba36279a3)

| 폴더명     | 역할                                                 |
| ---------- | ---------------------------------------------------- |
| public     | 컴파일이 필요 없는 파일                              |
| apis       | api 관련 파일                                        |
| assets     | 프로젝트에서 사용할 이미지, json 파일 등 미디어 파일 |
| components | 공통 컴포넌트 관리                                   |
| hooks      | 커스텀 훅 파일                                       |
| pages      | 페이지 단위 컴포넌트 파일                            |
| store      | 리덕스 관련 파일                                     |
| styles     | css(scss) 파일                                       |
| utils      | 상수나 공통 함수, 유틸리티                           |

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

✅**과제 1. 배포**

```
- Netlify를 통해 배포를 진행합니다.
- 계정을 생성하고 자신의 레포지토리를 연결해 배포합니다.
- 배포 레벨에서 사용될 환경 변수는 인스턴스에 적용되도록 직접 설정해줍니다.
```

- 카카오 배포환경을 통해 배포를 진행합니다.
- 계정을 생성하고 자신의 레포지토리를 연결해 배포합니다.
- 배포 레벨에서 사용될 환경 변수는 인스턴스에 적용되도록 직접 설정해줍니다.
  > > > > > > > a4fa5bd8ff5255928d6901b3f8572649f6635fe4
- 배포에 사용될 브랜치는 개발 브랜치와 꼭 분리합니다.

```

</br>

✅**과제 3. README.md 정리**

**1. 페이지 설명**
1. 로그인 페이지

![image](https://github.com/H-sooyeon/step2-FE-kakao-shop/assets/56586470/17077216-b797-4a6b-99f6-5cae128e84d4)
- 이메일과 비밀번호를 입력받는다.
- 이메일 아이디의 유효성 검사: 영문+숫자@영문+숫자.영문+숫자
- 비밀번호 유효성 검사: (영문,숫자,특수문자) 포함, 공백 없음, 8~20자
- 이메일(아이디)와 비밀번호의 유효성 검사 통과시 로그인 버튼 활성화

</br>

---

2. 회원가입 페이지

![image](https://github.com/H-sooyeon/step2-FE-kakao-shop/assets/56586470/30f0b36f-99cb-49cb-968e-c6a047cabbce)
- 회원가입시 이메일, 이름, 비밀번호 필수 작성
- 로그인과 같은 유효성 검사 진행
- 유효성 검사 통과시 회원가입 버튼 활성화

</br>

---

3. 메인 페이지

![image](https://github.com/H-sooyeon/step2-FE-kakao-shop/assets/56586470/efb09182-8ad1-4fbe-8b87-f69e86876121)
- 상품 로드중일 때 스켈레톤 적용
- 무한스크롤 적용

</br>

---

4. 개별 상품 페이지

![image](https://github.com/H-sooyeon/step2-FE-kakao-shop/assets/56586470/eccd404c-bfdb-4037-b1d6-ae28c3218b2c)
- 상품 로드중일 때 로더 적용
- 옵션 선택시 선택 상품 하단에 추가
- 추가한 상품 수량 버튼으로 수정 가능
- 옵션 선택, 장바구니 담기, 톡딜가로 구매하기 모두 로그인 상태일 때만 클릭 가능

</br>

---

5. 장바구니 페이지

![image](https://github.com/H-sooyeon/step2-FE-kakao-shop/assets/56586470/fa7f03bc-fb49-486f-8629-03b66a1c07b0)
- 수량 버튼으로 수량 수정 가능
- 상품이 있을 때만 주문하기 버튼 활성화

</br>

---

6. 주문하기 페이지

![image](https://github.com/H-sooyeon/step2-FE-kakao-shop/assets/56586470/45202a9f-531e-4163-bf6c-424a4662d5f3)
- 수량 수정 불가
- 전체 동의 상태, 상품이 있을 때만 결제하기 버튼 활성화

</br>

---

7. 결제완료 페이지

![image](https://github.com/H-sooyeon/step2-FE-kakao-shop/assets/56586470/d16185bb-ede6-4d2b-960d-e075755a9a47)
- 쇼핑 계속하기 버튼 클릭 시 메인 페이지 이동

</br>

---

**2. 배포 환경 설명**
```

- 배포한 환경에 대해 구체적인 설명을 남겨주세요.
- 포함될 내용은 배포 순서, 배포에 영향 받는 브랜치, 배포시 주의 사항, 배포 환경 등 다른 개발자가 해당 프로젝트를 인수인계 받았을 때 문제가 없도록 꼼꼼히 작성합니다.

```

</div>
</details>

```
