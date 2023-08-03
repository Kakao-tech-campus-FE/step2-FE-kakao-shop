# 1. Project Name

카카오 쇼핑하기 클론코딩 프로젝트

# 2. Project Info

이 프로젝트는 프론트엔드에 React, 개발 환경에 Vite, CSS 패키지에 tailwind를 이용하여 간단하게 카카오 쇼핑하기와 비슷한 페이지를 만들어본 프로젝트입니다.

메인페이지, 제품 상세 페이지,
로그인, 회원가입 페이지,  
장바구니 페이지, 주문내역 페이지, 주문완료 페이지
오류 페이지
로 이루어져 있습니다.

# 3. Project Install and run

1. Node.js가 시스템에 설치되어 있어야 합니다.
2. 저장소를 Clone 하고 프로젝트 폴더에서 npm install을 실행합니다.
3. 프로젝트의 루트 디렉토리에 .env 파일을 생성합니다. 환경변수는 다음과 같습니다.

```ini
VITE_API_URL = "http://kakao-app-env.eba-kfsgeb74.ap-northeast-2.elasticbeanstalk.com"
```

# 4. Project Usage

메인 페이지에서 로그인 버튼을 통해 이동합니다. 회원가입이 되어있지 않다면 회원가입을 진행합니다.
메인 페이지에 있는 상품을 클릭 시 상세 페이지로 이동합니다. 상세페이지에서는 해당 상품의 옵션과 개수를 선택하여 장바구니로 담아둘 수 있습니다.
장바구니에서 담아놓은 상품의 옵션과 개수, 총 가격을 확인, 수정할 수 있습니다.
주문 페이지로 이동 시 주소지와 전화번호를 작성하고 약관 동의를 진행합니다.
주문 완료 페이지로 이동 시 결제된 금액과 주문시킨 상품 정보가 표시됩니다.

# 5. Project Structure

1. 메인 페이지

```ini

HomePage
|_GNB
|_Carousel
|_MainProductTemplate



// MainProductTemplate 구조

MainProductTemplate
|_page
|_isEnd
|_allProduct
|_bottomObserver
|_data
  |_products
  |_isLoading
  |_isFetched
|_setAllProduct
|_setIsEnd
|_io
  |_IntersectionObserver

|_return
	|_div
	  |_Container
	    |_Loader(is Loading)
	    |_ProductGrid
	    |_div(bottomObserver)

```

2. 로그인, 회원가입 페이지

```ini
LoginForm
|_value
| |_email
| |_password
|_error
|_handleLogin (login attempt, save userdata)
   |_token
   |_user
     |_user


 LoginForm return
 Container
   |_InputGroup(이메일 그룹)
   |_InputGroup(비밀번호 그룹)
   |_Button(로그인 버튼)
```

```ini
 RegisterForm
 |_value
 | |_username
 | |_email
 | |_password
 | |_passwordConfirm
 |_errors
    |_duplicate
    |_email
    |_password
    |_passwordConfirm

 |_handleDuplicate  * email duplicate check
 | |_response
 |_handleRegister   * register error check, redirect
 |_validateEmail
 | |_emailRange
 |_valdiatePassword
 | |_passwordRange
 |_validateConfirm
 |_handleOnSubmit   * check meet all criteria and run handleRegiser

 return
 |_Container
   |_InputGroup (사용자 이름 입력)
   |_InputGroup (이메일 입력)
   |_Button  (중복 체크 버튼)
   |_div(중복체크 에러)  * 에러 시에만
   |_InputGroup (비밀번호)
   |_div(비밀번호 에러)  * 에러 시에만
   |_InputGroup (비밀번호 확인)
   |_div(비밀번호 확인 에러) * 에러 시에만
   |_Button  (회원가입 버튼)
```

3. 제품 상세 페이지

```ini
ProductDetailPage
|_id
|_data
|_error
|_isLoading
|_product
|_requiredKeys
|_keys

  return
  |_div
    |_Loader(isLoading)
    |_div (error message)
		|_Container
			|_ProductInformationColumn (basis-3/4)
			|_OptionColumn (basis-1/4)
```

```ini
ProductDetailPage
|_id
|_data
|_error
|_isLoading
|_product
|_requiredKeys
|_keys

  return
  |_div
    |_Loader(isLoading)
    |_div (error message)
		|_Container
			|_ProductInformationColumn (basis-3/4)
			|_OptionColumn (basis-1/4)
```

```ini
ProductInformationColumn


return
|_div (product infromation column)
  |_div (basis-1/2)
  | |_Photo
  |_div(basis-1/2)
    |_span(리뷰보기)
    |_h1({productname})
    |_div(가격 표시)
      |_a (price 원)
```

```ini
OptionColumn


|_selectedOptions

|_handleOnClickOption(클릭시 옵션을 set하거나 이미 선택되었으면 증가 없이 처리)
| |_isOptionSelected
| |_setSelectedOptions
| |_optionId
|_handleOnChange (수량 변경 할 때 처리)
  |_setSelectedOptions
  |_count
  |_optionId

  return
  |_div
    |_h3 (옵션 선택 글자)
    |_div
    | |_OptionList
    |_hr
    |_ol(담긴 옵션이 표기)
    | |_li (option)
    |   |_span(option name)
    |   |_div
    |     |_Counter (수량 조절)
    |     |_span(price 원)
    |_div (총 수량 및 상품금액)
    | |_span(총 수량 n개)
    | |_span(총 상품금액 n원)
    |_Button(장바구니 버튼)

```
