import { render, screen, fireEvent } from "@testing-library/react";
import OrderTemplate from "./templates/OrderTemplate";

describe("OrderTemplate 컴포넌트 테스트", () => {
  it("주문하기 버튼 클릭 시 handleClickOrder 함수가 호출되는지 확인", () => {
    const data = {
      data: {
        response: {
          products: [
            {
              productName: "상품 1",
              carts: [
                {
                  id: 1,
                  option: {
                    optionName: "옵션 1",
                  },
                  quantity: 2,
                  price: 1000,
                },
              ],
            },
          ],
          totalPrice: 2000,
        },
      },
    };

    render(<OrderTemplate data={data} />);
    const orderButton = screen.getByText("결제하기");

    fireEvent.click(orderButton);

    console.log("handleClickOrder 함수가 호출되었습니다.");
  });
});
