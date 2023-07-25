import GlobalTemplate from "@/components/templates/global-template/GlobalTemplate.jsx";
import styled from "styled-components";
import OrderDelivery from "@/components/organisms/order-delivery/OrderDelivery.jsx";

const Styled = {
  Container: styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `,
};
function Order() {
  return (
    <GlobalTemplate
      title="장바구니"
      style={{
        backgroundColor: "#f4f4f4",
      }}
    >
      <Styled.Container>
        <OrderDelivery />
      </Styled.Container>
    </GlobalTemplate>
  );
}

export default Order;
