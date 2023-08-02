import carouselImage1 from "../assets/carouselItems/carouselItem1.jpeg";
import carouselImage2 from "../assets/carouselItems/carouselItem2.jpeg";
import carouselImage3 from "../assets/carouselItems/carouselItem3.jpeg";

export const CAROUSEL_IMAGES = [carouselImage1, carouselImage2, carouselImage3];

export const PRODUCT_NUM_PER_PAGE = 9;

export const ERROR_MSG = {
  none: "",
  required: "필수 정보입니다.",
  invalidEmail:
    "유효하지 않은 이메일 주소입니다. 올바른 형식으로 입력해주세요.",
  invalidPw:
    "비밀번호는 영문, 숫자, 특수문자를 포함하여 8~20자로 입력해주세요.",
};

export const DELIVERYOPTION_MAP = {
  "배송전 연락바랍니다.": "배송전 연락바랍니다.",
  "부재시 경비실에 맡겨주세요.": "부재시 경비실에 맡겨주세요.",
  "부재시 연락주세요.": "부재시 연락주세요.",
  직접입력: "",
};

export const KAKAOPAY_METHOD = [
  { label: "카카오페이머니", id: "kakaopaymoney" },
  { label: "카카오페이카드", id: "kakaopaycard" },
];

export const PAYMENT_AGREE_OPTION = [
  {
    id: "paymentAgree",
    label: "구매조건 확인 및 결제 진행 동의",
  },
  { id: "personalInfoAgree", label: "개인정보 제3자 제공 동의" },
];
