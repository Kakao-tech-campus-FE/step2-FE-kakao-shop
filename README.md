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

- 필수 페이지 구현기능 작성

  - 메인 페이지
    ![main.png](README%20md%200a5e46a83c284c378bee627f7076910f/main.png)
    - 핵심 기능: 카테고리 및 신상품, 인기 상품 등을 표시
    - 기능 상세 설명: 사용자에게 카테고리 목록을 보여주고, 신상품이나 인기 상품을 추천하여 표시합니다.
    - 인터페이스 요구사항: 페이지 상단에 카테고리 메뉴가 있어서 사용자가 원하는 카테고리로 이동할 수 있어야 합니다. 상품 목록은 페이지 내에서 스크롤이 가능하도록 페이징되어 표시되어야 합니다.
  - 로그인 페이지
    - 핵심 기능: 사용자 로그인 기능
    - 기능 상세 설명: 사용자는 이메일과 비밀번호를 입력하여 로그인할 수 있어야 합니다.
    - 인터페이스 요구사항: 로그인 폼이 제공되어야 하며, 사용자가 잘못된 정보를 입력한 경우 알림 메시지를 표시하여 오류를 알려줍니다.
  - 회원가입 페이지
    ![Untitled](README%20md%200a5e46a83c284c378bee627f7076910f/Untitled.png)
    - 핵심 기능: 사용자 회원가입을 위한 정보 입력 기능
    - 기능 상세 설명: 사용자가 필요한 정보를 입력하여 회원가입을 할 수 있도록 합니다. 이메일, 비밀번호, 이름 등의 정보를 요청할 수 있습니다.
    - 인터페이스 요구사항: 회원가입 폼이 제공되어야 하며, 사용자가 필요한 정보를 입력할 수 있는 입력 필드와 회원가입 버튼이 제공되어야 합니다. 입력한 정보의 유효성을 검사하여 적절한 알림 메시지를 표시해야 합니다.
  - 회원가입 완료 페이지
    - 핵심 기능: 회원가입 완료 메시지 표시 및 로그인 안내
    - 기능 상세 설명: 회원가입이 성공적으로 완료되었다는 메시지를 표시하고, 사용자에게 로그인을 안내합니다.
    - 인터페이스 요구사항: 회원가입 완료 메시지와 로그인 안내 메시지를 표시합니다. 로그인 버튼이나 로그인 페이지로 이동할 수 있는 링크를 제공합니다.
  - 검색 페이지
    ![Untitled](README%20md%200a5e46a83c284c378bee627f7076910f/Untitled%201.png)
    - 핵심 기능: 상품 검색 기능
    - 기능 상세 설명: 사용자가 검색어를 입력하면 관련 상품을 검색하여 표시합니다.
    - 인터페이스 요구사항: 검색어 입력란과 검색 버튼이 제공되어야 하며, 사용자가 입력한 검색어에 따라 실시간으로 추천 검색어 목록이 표시되어야 합니다.
  - 상품 목록 페이지
    ![Untitled](README%20md%200a5e46a83c284c378bee627f7076910f/Untitled%202.png)
    - 핵심 기능: 카테고리별 상품 목록 표시
    - 기능 상세 설명: 선택한 카테고리에 따라 해당 카테고리에 속한 상품 목록을 표시합니다.
    - 인터페이스 요구사항: 상품의 이미지, 제목, 가격 등을 목록 형태로 표시합니다. 페이징 기능을 제공하여 사용자가 다른 페이지로 이동할 수 있도록 합니다.
  - 할인 및 추천상품 페이지
    ![Untitled](README%20md%200a5e46a83c284c378bee627f7076910f/Untitled%203.png)
    - 핵심 기능: 할인된 상품 및 추천상품을 표시하는 기능
    - 기능 상세 설명: 현재 진행 중인 할인 행사에 해당하는 상품들과 사용자에게 추천되는 상품들을 표시합니다.
    - 인터페이스 요구사항: 할인된 상품의 이미지, 제목, 할인 전 가격 및 할인된 가격, 할인율 등의 정보를 표시합니다. 추천상품은 사용자의 이전 구매 기록, 관심사 등을 기반으로 제공될 수 있습니다. 상품 선택 시 개별 상품 상세 페이지로 이동할 수 있는 링크를 제공합니다.
  - 상품 상세 페이지
    ![Untitled](README%20md%200a5e46a83c284c378bee627f7076910f/Untitled%204.png)
    - 핵심 기능: 선택한 상품의 상세 정보 표시 및 주문 기능
    - 기능 상세 설명: 사용자에게 선택한 상품의 상세 정보, 옵션, 가격, 상세 설명, 리뷰 등을 표시합니다. 사용자는 상품을 주문할 수 있어야 합니다.
    - 인터페이스 요구사항: 상품의 이미지, 제목, 가격, 옵션 등을 상세하게 표시합니다. 주문하기 버튼을 제공하여 사용자가 해당 상품을 주문할 수 있도록 합니다.
  - 장바구니 페이지
    ![Untitled](README%20md%200a5e46a83c284c378bee627f7076910f/Untitled%205.png)
    - 핵심 기능: 사용자의 장바구니 내역 표시 및 주문 수정 기능
    - 기능 상세 설명: 사용자의 장바구니에 담긴 상품 목록을 표시하고, 수량을 변경하거나 상품을 삭제할 수 있어야 합니다.
    - 인터페이스 요구사항: 장바구니에 담긴 상품의 이미지, 제목, 가격, 수량 등을 표시합니다. 상품의 수량을 변경하거나 삭제할 수 있는 버튼을 제공합니다. 주문하기 버튼을 제공하여 사용자가 해당 상품을 주문할 수 있도록 합니다.
  - 주문하기 페이지
    ![Group 1.png](README%20md%200a5e46a83c284c378bee627f7076910f/Group_1.png)
    - 핵심 기능: 주문 내역 확인 및 결제 기능
    - 기능 상세 설명: 사용자가 주문한 상품 목록과 총 결제 금액을 표시하고, 다양한 결제 수단을 제공하여 사용자가 결제할 수 있어야 합니다.
    - 인터페이스 요구사항: 주문한 상품의 이미지, 제목, 가격 등을 상세히 표시합니다. 결제 수단 선택을 위한 옵션을 제공하고, 사용자가 언제든지 결제를 취소할 수 있도록 합니다.
  - 결제 페이지
    ![Untitled](README%20md%200a5e46a83c284c378bee627f7076910f/Untitled%206.png)
    ![Untitled](README%20md%200a5e46a83c284c378bee627f7076910f/Untitled%207.png)
    - 핵심 기능: 결제 완료 메시지 및 주문 정보 표시
    - 기능 상세 설명: 결제가 완료되었다는 메시지를 표시하고, 주문한 상품 목록과 결제 금액을 사용자에게 보여줍니다.
    - 인터페이스 요구사항: 결제 완료 메시지와 주문 정보(상품 이미지, 제목, 가격)를 상세히 표시합니다.

- **디렉토리 구조**
  ```
  src/
    |- components/
    |   |- atoms/
    |   |   |- Button/
    |   |   |   |- Button.js
    |   |   |   |- Button.css
    |   |   |
    |   |   |- Input/
    |   |   |   |- Input.js
    |   |   |   |- Input.css
    |   |   |
    |   |   |- Checkbox/
    |   |   |   |- Checkbox.js
    |   |   |   |- Checkbox.css
    |   |   |
    |   |   |- ...
    |   |
    |   |- molecules/
    |   |   |- ProductCard/
    |   |   |   |- ProductCard.js
    |   |   |   |- ProductCard.css
    |   |   |
    |   |   |- LoginForm/
    |   |   |   |- LoginForm.js
    |   |   |   |- LoginForm.css
    |   |   |
    |   |   |- ...
    |   |
    |   |- organisms/
    |   |   |- Header/
    |   |   |   |- Header.js
    |   |   |   |- Header.css
    |   |   |
    |   |   |- Footer/
    |   |   |   |- Footer.js
    |   |   |   |- Footer.css
    |   |   |
    |   |   |- ProductList/
    |   |   |   |- ProductList.js
    |   |   |   |- ProductList.css
    |   |   |
    |   |   |- ...
    |   |
    |   |- templates/
    |   |   |- MainTemplate/
    |   |   |   |- MainTemplate.js
    |   |   |   |- MainTemplate.css
    |   |   |
    |   |   |- ProductDetailTemplate/
    |   |   |   |- ProductDetailTemplate.js
    |   |   |   |- ProductDetailTemplate.css
    |   |   |
    |   |   |- ...
    |   |
    |   |- pages/
    |   |   |- MainPage/
    |   |   |   |- MainPage.js
    |   |   |   |- MainPage.css
    |   |   |
    |   |   |- ProductDetailPage/
    |   |   |   |- ProductDetailPage.js
    |   |   |   |- ProductDetailPage.css
    |   |   |
    |   |   |- ...
    |
    |- styles/
    |   |- variables/
    |   |   |- colors.css
    |   |   |- typography.css
    |   |   |- ...
    |   |
    |   |- mixins/
    |   |   |- flexbox.css
    |   |   |- animations.css
    |   |   |- ...
    |
    |- services/
    |   |- api.js
    |   |- ...
    |
    |- utils/
    |   |- helper.js
    |   |- ...
    |
    |- App.js
    |- index.js
    |- ...
  ```
- **디렉토리 구조 설명**
  - atoms
    - 원자레벨의 컴포넌트를 담고 있는 디렉토리입니다.
    - 가장 작은 단위의 컴포넌트입니다. 다른 컴포넌트를 구성할 때 사용됩니다.
    - BUtton, Input, Checkbox 등
  - molecules
    - 분자 레벨의 컴포넌트를 담고 있는 디렉토리입니다.
    - 원자 컴포넌트들을 조합하여 좀 더 복잡한 기능을 제공하는 컴포넌트입니다.
    - ProductCard, LoginForm 등
  - organism
    - 유기체 레벨의 컴포넌트를 담고 있는 디렉토리입니다.
    - 원자와 분자 컴포넌트들을 조합하여 하나의 독립적인 기능을 수행하는 컴포넌트입니다.
    - Header, Footer 등
  - template
    - 템플릿 레벨의 컴포넌트를 담고 있는 디렉토리입니다.
    - 페이지의 구조를 정의하고, 여러 유기체와 분자 컴포넌트들을 조합하여 ‘완전한 화면’을 구성합니다.
    - MainTemplate, ProductDetailTemplate 등
  - pages
    - 실제로 라우팅되어 보여지는 페이지 컴포넌트들을 담고있는 디렉토리입니다.
    - 각 페이지는 하나 이상의 템플릿 컴포넌트 + 필요한 컴포넌트들을 조합하여 구성됩니다.
    - MainPage, ProductDetailPage 등
  - styles
    - 전역 스타일 파일들을 담고 있는 디렉토리입니다.
    - 색상, 타이포그래피와 같은 변수들을 정의하는 파일들입니다.
    - variables 등
  - services
    - API 호출이나 데이터 처리와 관련된 파일들을 담고 있는 디렉토리입니다.
    - api.js 등과 같은 서비스 관련 함수들을 위치시킬 수 있습니다.
  - utils
    - 각종 유틸리티 함수들을 담고 있는 디렉토리입니다.
    - 데이터 변환, 날짜 형식화 등을 위치시킬 수 있습니다.
  - App.js
    - 리액트 애플리케이션의 루트 컴포넌트입니다.
    - 전역 상태관리와 같은 공통 로직을 처리할 수 있습니다
  - index.js
    - 진입점입니다.
    - App.js를 렌더링합니다.

</br>

✅**과제 2.**

```
프론트 개발자가 다른 프론트 개발자와 소통 및 UI 디자이너와 소통하는데 필수적인 UI 컴포넌트의 명칭과 사용법을 익힙니다.
수업시간에 배운 컴포넌트의 명칭과 사용법 이외에 대표적인 UI 라이브러리 홈페이지를 조사해보면 수많은 컴포넌트가 어떤식으로 동작하는지 확인할 수 있습니다.
리액트 프로젝트를 생성하고, 토스트, 브래드크럼, 캐러셀, 라디오버튼, 토글버튼, 체크리스트를 UI 라이브러리가 아닌 자신만의 방식으로 스타일링하고 상태 관리를 적용해 코드를 작성하세요.
작성된 코드는 레퍼지토리에 업로드하여 멘토님에게 전달해주세요.
```

- 컴포넌트 용어 정리
  ### Bootstrap 5.1.3 기준입니다
  - Accordion
    ![Untitled](README%20md%200a5e46a83c284c378bee627f7076910f/Untitled%208.png)
  - Alerts
    ![Untitled](README%20md%200a5e46a83c284c378bee627f7076910f/Untitled%209.png)
  - Badge
    ![Untitled](README%20md%200a5e46a83c284c378bee627f7076910f/Untitled%2010.png)
  - Breadcrumb
    ![Untitled](README%20md%200a5e46a83c284c378bee627f7076910f/Untitled%2011.png)
  - Buttons
    ![Untitled](README%20md%200a5e46a83c284c378bee627f7076910f/Untitled%2012.png)
  - Button group
    ![Untitled](README%20md%200a5e46a83c284c378bee627f7076910f/Untitled%2013.png)
  - Card
    ![Untitled](README%20md%200a5e46a83c284c378bee627f7076910f/Untitled%2014.png)
  - Carousel
    ![Untitled](README%20md%200a5e46a83c284c378bee627f7076910f/Untitled%2015.png)
  - Close button
    ![Untitled](README%20md%200a5e46a83c284c378bee627f7076910f/Untitled%2016.png)
  - Collapse
    - 사용자 인터페이스에서 접고 펼칠 수 있는 요소를 구현하는 데 사용됩니다.
      ![Untitled](README%20md%200a5e46a83c284c378bee627f7076910f/Untitled%2017.png)
  - Dropdowns
    ![Untitled](README%20md%200a5e46a83c284c378bee627f7076910f/Untitled%2018.png)
  - List group
    ![Untitled](README%20md%200a5e46a83c284c378bee627f7076910f/Untitled%2019.png)
  - Modal
    ![Untitled](README%20md%200a5e46a83c284c378bee627f7076910f/Untitled%2020.png)
  - **Navs & tabs**
    - 내비게이션과 탭을 구성하는 데 사용되는 컴포넌트입니다.
    - 사용자에게 다양한 콘텐츠나 섹션으로 구성된 인터페이스를 제공할 수 있습니다.
      ![Untitled](README%20md%200a5e46a83c284c378bee627f7076910f/Untitled%2021.png)
  - Navbar
    ![Untitled](README%20md%200a5e46a83c284c378bee627f7076910f/Untitled%2022.png)
  - **Offcanvas**
    - 네비게이션 바나, 사이드바를 콘텐츠 영역 밖으로 숨기고 토글 버튼을 통해 나타나게 하는 기능을 제공합니다.
    - 작은 화면이나 모바일 기기에서 공간을 절약할 때 사용됩니다.
      ![Untitled](README%20md%200a5e46a83c284c378bee627f7076910f/Untitled%2023.png)
  - Pagination
    ![Untitled](README%20md%200a5e46a83c284c378bee627f7076910f/Untitled%2024.png)
  - **Placeholders**
    - 예시 데이터를 표시하는 데 사용됩니다.
    - 입력시에 사용자에게 어떤 형식의 데이터를 입력해야 하는 지 알려주기 위해 사용합니다.
      ![Untitled](README%20md%200a5e46a83c284c378bee627f7076910f/Untitled%2025.png)
  - **Popovers**
    - 추가 정보나 컨텐츠를 표시하기 위해 작은 상자 형태의 팝오버를 사용합니다.
    - 사용자가 특정 요소를 가리킬 때 생성됩니다.
      ![Untitled](README%20md%200a5e46a83c284c378bee627f7076910f/Untitled%2026.png)
  - Progress
    ![Untitled](README%20md%200a5e46a83c284c378bee627f7076910f/Untitled%2027.png)
  - **Scrollspy**
    - 웹 페이지의 스크롤 위치에 따라 현재 활성화된 부분을 표시하고 탐색을 돕는 기능을 제공합니다.
    - 사용자가 스크롤시에 스크롤 위치에 따라 해당 메뉴 항목을 표시해줍니다.
      ![Untitled](README%20md%200a5e46a83c284c378bee627f7076910f/Untitled%2028.png)
  - Spinners
    ![Untitled](README%20md%200a5e46a83c284c378bee627f7076910f/Untitled%2029.png)
  - Toasts
    ![Untitled](README%20md%200a5e46a83c284c378bee627f7076910f/Untitled%2030.png)
  - **Tooltips**
    - 마우스를 요소 위로 가져갈 때 해당 요소에 대한 추가정보나 설명을 툴팁 형태로 제공합니다.
    - 간결하고 컴팩트한 정보를 제공할 때 사용합니다.
      ![Untitled](README%20md%200a5e46a83c284c378bee627f7076910f/Untitled%2031.png)
- 컴포넌트 UI

  - 토스트

    - 사용자에게 잠시 보여준 후 사라지는 알림 메시지를 구현하는 데 사용합니다.
    - Toast 함수형 컴포넌트를 사용하였습니다.
    - useEffect 훅을 사용하여 컴포넌트가 마운트될 때 슬라이드 애니메이션을 시작하고, 언마운트될 때 애니메이션을 중지합니다.
    - setTimeout을 설정하여 토스트를 일정 시간 후에 화면에서 내려가도록 하였습니다.
      - 이를 통해 상태 관리 없이 토스트가 동작합니다.

    ```jsx
    import React, { useEffect } from "react";
    import "../styles/toast.css";

    function Toast() {
      useEffect(() => {
        const slideUpElement = document.querySelector(".toast");
        slideUpElement.style.bottom = "1rem";

        const slideDown = () => {
          slideUpElement.style.bottom = "-12.5rem";
        };

        setTimeout(() => {
          slideDown();
        }, 3000);

        // Clean up the timeout
        return () => clearTimeout();
      }, []);

      return <div className="toast"></div>;
    }

    export default Toast;
    ```

  - 브레드크럼

    - 사용자에게 페이지의 경로를 나타낼 때 사용합니다.
    - 단순히 정적인 브레드크럼 구조를 생성하고 렌더링합니다.
    - 경로 항목은 정적인 정보이므로, 상태 관리 혹은 상태 업데이트가 필요하지 않다 생각하여 이렇게 구현하였습니다.

    ```jsx
    import React from "react";
    import "../styles/breadcrumb.css";

    const Breadcrumb = () => {
      return (
        <nav>
          <ol className="breadcrumb-items">
            <li className="breadcrumb-item">
              <a href="#">First</a>
            </li>
            <li className="breadcrumb-item">
              <a href="#">Second</a>
            </li>
            <li className="breadcrumb-item">
              <a href="#">Third</a>
            </li>
            <li className="breadcrumb-item">Fourth</li>
          </ol>
        </nav>
      );
    };

    export default Breadcrumb;
    ```

  - 캐러셀

    - 이미지 슬라이드들을 슬라이드 쇼 형태로 보여주는 데 사용됩니다.
    - 캐러셀 컴포넌트는 현재 슬라이드의 ‘인덱스’를 상태로 관리합니다.
    - 상태 관리를 위해 useState 훅을 사용하고, 인덱스를 저장 및 업데이트합니다.
    - 사용자의 클릭 이벤트를 처리하는 ‘handleSlideClick’을 이용해 상태를 업데이트하고, 슬라이드 컨테이너의 스타일을 조정하여 현재 슬라이드를 표시합니다.
    - slide-1, 2, 3 클래스의 경우엔 slideNumb를 지정해 주었고
      slide-prev, next 클래스의 경우엔 각각 handlePrevSlide, handleNextSlide를 이용해 prevNumb이 slideNumb의 역할을 대신하며 상태 변수로써 계속 새로운 상태값을 계산합니다.

    ```jsx
    import React, { useState } from "react";
    import "../styles/carousel.css";

    const Carousel = () => {
      const [slideNumb, setSlideNumb] = useState(0);

      const handleNextSlide = () => {
        setSlideNumb((prevNumb) => prevNumb + 1);
      };

      const handlePrevSlide = () => {
        setSlideNumb((prevNumb) => prevNumb - 1);
      };

      const handleSlideClick = (slideIndex) => {
        setSlideNumb(slideIndex);
      };

      return (
        <div className="carousel">
          <div
            className="slide-container"
            style={{ transform: `translateX(-${slideNumb * 100}vw)` }}
          >
            <div className="slide-box">
              <img
                src={process.env.PUBLIC_URL + "/images/car1.png"}
                alt="Car 1"
              />
            </div>
            <div className="slide-box">
              <img
                src={process.env.PUBLIC_URL + "/images/car2.png"}
                alt="Car 2"
              />
            </div>
            <div className="slide-box">
              <img
                src={process.env.PUBLIC_URL + "/images/car3.png"}
                alt="Car 3"
              />
            </div>
          </div>
          <button className="slide-prev" onClick={handlePrevSlide}>
            이전
          </button>
          <button className="slide-1" onClick={() => handleSlideClick(0)}>
            1
          </button>
          <button className="slide-2" onClick={() => handleSlideClick(1)}>
            2
          </button>
          <button className="slide-3" onClick={() => handleSlideClick(2)}>
            3
          </button>
          <button className="slide-next" onClick={handleNextSlide}>
            다음
          </button>
        </div>
      );
    };

    export default Carousel;
    ```

  - 라디오버튼

    - 라디오 버튼을 통해 같은 name들 중 하나의 value만 선택할 수 있도록 하는 버튼으로 택1을 해야하는 상황에 사용됩니다.
    - 라디오 버튼들은 ‘checked’ 속성을 통해 선택된 스포츠를 표시하며, ‘onChange’ 이벤트를 통해 선택을 감지합니다.
    - 이벤트 발생시 handleSportChange 함수가 호출되고, selectedSport 상태가 업데이트됩니다. 이 때 useState 훅을 사용합니다.

    ```jsx
    import React, { useState } from "react";

    const Radio = () => {
      const [selectedSport, setSelectedSport] = useState("");

      const handleSportChange = (event) => {
        setSelectedSport(event.target.value);
      };

      return (
        <div className="radio-btn">
          <label>
            <input
              type="radio"
              name="sport"
              value="soccer"
              checked={selectedSport === "soccer"}
              onChange={handleSportChange}
            />
            soccer
          </label>
          <label>
            <input
              type="radio"
              name="sport"
              value="baseball"
              checked={selectedSport === "baseball"}
              onChange={handleSportChange}
            />
            baseball
          </label>
          <label>
            <input
              type="radio"
              name="sport"
              value="basketball"
              checked={selectedSport === "basketball"}
              onChange={handleSportChange}
            />
            basketball
          </label>
        </div>
      );
    };

    export default Radio;
    ```

  - 토글버튼

    - 토글 버튼을 통해 현재 상태를 전환합니다.
    - 상태 변수인 isOn을 사용하여 토글 버튼의 상태를 관리합니다.
    - 버튼이 클릭되면 handleClick 함수가 호출되고, isOn 상태가 false에서 true로 true에서 flase 로 상태를 반전시킵니다.
    - 또한 그 반전 상태에 따라 div 요소에 off 클래스를 탈부착하여 버튼이 동작합니다. 이때 useState 훅이 사용됩니다.

    ```jsx
    import React, { useState } from "react";
    import "../styles/toggle.css";

    function Toggle() {
      const [isOn, setIsOn] = useState(false);

      const handleClick = () => {
        setIsOn((prevIsOn) => !prevIsOn);
      };

      return (
        <div className={`toggle-btn ${isOn ? "off" : ""}`}>
          <button
            className={`toggle ${isOn ? "off" : ""}`}
            onClick={handleClick}
          >
            {isOn ? "off" : "on"}
          </button>
        </div>
      );
    }

    export default Toggle;
    ```

  - 체크리스트

    - 체크리스트 컴포넌트로, 체크박스 항목을 선택 혹은 해제할 때 사용됩니다.
    - Checklist 컴포넌트는 각 체크박스 항목들의 선택 상태를 관리합니다.
    - 각 체크박스는 checkedItems의 객체의 속성에 지정되어있으며, 해당 속성의 값에 따라 체크 여부가 설정됩니다.
    - 체크박스 변경시에 handleCheckboxChange 함수가 호출되며 checkedItems 상태가 업데이트됩니다 이 때 usestate 훅이 이용됩니다.

    ```jsx
    import React, { useState } from "react";

    const Checklist = () => {
      const [checkedItems, setCheckedItems] = useState({});

      const handleCheckboxChange = (event) => {
        const { name, checked } = event.target;
        setCheckedItems((prevState) => ({ ...prevState, [name]: checked }));
      };

      return (
        <div className="checkbox-btn">
          <p>
            <label>
              <input
                type="checkbox"
                name="learningJournal"
                checked={checkedItems.learningJournal}
                onChange={handleCheckboxChange}
              />
              학습일지 작성
            </label>
          </p>
          <p>
            <label>
              <input
                type="checkbox"
                name="checklist"
                checked={checkedItems.checklist}
                onChange={handleCheckboxChange}
              />
              체크리스트 만들기
            </label>
          </p>
          <p>
            <label>
              <input
                type="checkbox"
                name="radioButton"
                checked={checkedItems.radioButton}
                onChange={handleCheckboxChange}
              />
              라디오버튼 만들기
            </label>
          </p>
          <p>
            <label>
              <input
                type="checkbox"
                name="carousel"
                checked={checkedItems.carousel}
                onChange={handleCheckboxChange}
              />
              캐러셀 만들기
            </label>
          </p>
        </div>
      );
    };

    export default Checklist;
    ```

</br>

✅**과제 3.**

```
각 컴포넌트를 시현해 볼 수 있는 페이지를 만드세요.
하나의 페이지에 모든 컴포넌트를 둬도 좋고, 각 페이지별로 분리해도 괜찮습니다.
```

- 시연 영상입니다.
  https://youtube.com/shorts/MBMzKDug_hY?feature=share
- 시연 페이지의 경우 같이 올린 파일을 pull 한 뒤 실행하면 동일한 화면이 렌더링됩니다.

## 리뷰 받고싶은 내용

### 상태관리

- 이번에 제작한 UI 컴포넌트들에선 어떤 방식으로 상태관리들이 가능할지가 궁금합니다.
  - 저의 경우엔 최대한 상태관리를 하려고 여러 기능들을 추가해보려 했으나, 작성해 놓은 것들이 최대여서, 실제 저런 컴포넌트들이 웹상에서 동작시에는 어떻게 유기적으로 상태관리가 적용되는지가 궁금합니다.
- 토글버튼의 경우 그냥 div 안에 button을 넣고 그 둘을 스타일링 하는 방법으로 진행하였는데, pseudo element 단에 들어가서 스타일링 하는 것도 좋을 것 같다고 생각하였습니다. 물론 빠른 작업을 위해서는 Bootstrap, tailwind 등의 UI 라이브러리를 사용하였지만, 불가피하게 멘토님들께서 저러한 버튼을 만들 경우(꼭 토글 버튼이 아니더라도) pseudo element 단까지 들어가서 스타일링을 하시는지 궁금합니다.
- 이건 조금 관심사가 다른 문제이긴 한데, 현업에서 퍼블리셔와 프론트엔드 개발자가 얼마나 구별되는지 궁금합니다. 개인적인 생각으로 프론트엔드 개발자의 덕목은 ‘요구사항’에 충분이 맞춘 퍼블리싱 능력이 있어야 한다! 라고 생각하고 있는데, 복잡한 디자인의 경우에도 해당하는지, 그렇다면 디자인을 보는 눈을 키우기 위해서 추천하시는 것들이 있는지 궁금합니다.

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
- Netlify를 통해 배포를 진행합니다.
- 계정을 생성하고 자신의 레포지토리를 연결해 배포합니다.
- 배포 레벨에서 사용될 환경 변수는 인스턴스에 적용되도록 직접 설정해줍니다.
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
