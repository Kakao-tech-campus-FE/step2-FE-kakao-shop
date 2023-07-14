import Container from "../atoms/Container";
import Photo from "../atoms/Photo";

const ProductDetail = (detail) => {
  console.log(detail);
  console.log(detail.detail.image, detail.detail.productName);
  return (
    <Container className="text-base leading-6 font-sans text-gray-700 text-sm lg:text-base font-HelveticaNeue AppleSDGothicNeo-Regular tahoma Malgun Gothic b9d1c740 \ace0\b515 dotum \b3cb\c6c0 sans-serif text-black">
      <h3 className="font-HelveticaNeue AppleSDGothicNeo-Regular tahoma Malgun Gothic b9d1c740 \ace0\b515 dotum \b3cb\c6c0 sans-serif text-black m-0 p-0 overflow-hidden absolute w-0 h-0 text-xs leading-0 -ml-9">
        제품 상세
      </h3>
      <Container className="text-base leading-6 font-sans text-gray-700 font-HelveticaNeue AppleSDGothicNeo-Regular tahoma Malgun Gothic b9d1c740 \ace0\b515 dotum \b3cb\c6c0 sans-serif text-black">
        <Container className="swiper-theme-color-blue-500 swiper-navigation-size-44 -webkit-text-size-adjust-none text-base leading-6 font-sans text-gray-700 font-HelveticaNeue AppleSDGothicNeo-Regular tahoma Malgun Gothic b9d1c740 \ace0\b515 dotum \b3cb\c6c0 sans-serif text-black p-0 m-auto w-full">
          <Container className="swiper-theme-color-blue-500 swiper-navigation-size-44 -webkit-text-size-adjust-none text-base leading-6 font-sans text-gray-700 font-HelveticaNeue AppleSDGothicNeo-Regular tahoma Malgun Gothic b9d1c740 \ace0\b515 dotum \b3cb\c6c0 sans-serif text-black p-0 flex w-1280 m-auto">
            {/* layout_split*/}
            <Container className="swiper-theme-color-blue-500 swiper-navigation-size-44 -webkit-text-size-adjust-none text-base leading-6 font-sans text-gray-700 font-HelveticaNeue AppleSDGothicNeo-Regular tahoma Malgun Gothic b9d1c740 \ace0\b515 dotum \b3cb\c6c0 sans-serif text-black m-0 w-890 p-30 pr-29 pb-150 border-r-1 border-gray-300">
              {/* product section */}
              <h3 className="font-HelveticaNeue AppleSDGothicNeo-Regular tahoma Malgun Gothic b9d1c740 \ace0\b515 dotum \b3cb\c6c0 sans-serif text-black m-0 p-0 overflow-hidden absolute w-0 h-0 text-xs leading-0 -ml-9">
                제품 상세
              </h3>
              <Container className="relative z-20 flex pb-4">
                <Container className="swiper-container flex-0 flex-shrink-0 w-430">
                  <Photo
                    src={detail.detail.image}
                    alt={detail.detail.productName}
                  ></Photo>
                </Container>
                <Container className="swiper-container flex-shrink-0 w-430 mx-auto">
                  {"설명란"}
                  <strong className="swiper-content block font-normal leading-tight text-left text-black text-2xl break-words">
                    {detail.detail.productName}
                  </strong>
                </Container>
              </Container>
            </Container>
            <Container className="swiper-theme-color-blue-500 swiper-navigation-size-44 -webkit-text-size-adjust-none text-base leading-6 font-sans text-gray-700 font-HelveticaNeue AppleSDGothicNeo-Regular tahoma Malgun Gothic b9d1c740 \ace0\b515 dotum \b3cb\c6c0 sans-serif text-black m-0 p-0 relative w-360 bg-white">
              {"옵션란" /* purchase section */}
            </Container>
          </Container>
        </Container>
      </Container>
    </Container>
  );
};
export default ProductDetail;
