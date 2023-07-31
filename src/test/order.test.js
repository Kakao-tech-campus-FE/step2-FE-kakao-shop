import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { useMutation } from "react-query";
import OrderTemplate from "../components/templates/OrderTemplate";

jest.mock("react-query", () => ({
  useMutation: jest.fn(),
}));

describe("<OrderTemplate />", () => {
  beforeEach(() => {
    useMutation.mockReturnValue({
      mutate: jest.fn(),
    });
  });

  // 주문할 상품이 없을 때
  test("should display error message when there are no products before ordering", () => {
    const mockData = {
      data: {
        response: {
          products: [],
          totalPrice: 0,
        },
      },
    };

    render(
      <BrowserRouter>
        <OrderTemplate data={mockData} />
      </BrowserRouter>
    );

    const submitButton = screen.getByText("결제하기");
    expect(submitButton).toBeDisabled();

    fireEvent.click(submitButton);

    const errorMessage = screen.getByText("주문할 상품이 없습니다.");
    expect(errorMessage).toBeInTheDocument();
  });

  // 주문할 때
  test("call the mutation function and navigate to the order page after successful order", () => {
    const mockData = {
      data: {
        response: {
          id: 2,
          products: [
            {
              productName:
                "기본에 슬라이딩 지퍼백 크리스마스/플라워에디션 에디션 외 주방용품 특가전",
              items: [
                {
                  id: 4,
                  optionName: "2겹 식빵수세미 6매",
                  quantity: 3,
                  price: 26700,
                },
              ],
            },
            {
              productName: "삼성전자 JBL JR310 외 어린이용/성인용 헤드셋 3종!",
              items: [
                {
                  id: 5,
                  optionName: "JR310BT (무선 전용) - 레드",
                  quantity: 4,
                  price: 199600,
                },
                {
                  id: 6,
                  optionName: "JR310BT (무선 전용) - 그린",
                  quantity: 5,
                  price: 249500,
                },
              ],
            },
          ],
          totalPrice: 475800,
        },
      },
    };

    render(
      <BrowserRouter>
        <OrderTemplate data={mockData} />
      </BrowserRouter>
    );

    const submitButton = screen.getByText("결제하기");
    expect(submitButton).toBeEnabled();

    const allAgreeCheckbox = screen.getByLabelText("전체 동의");
    fireEvent.click(allAgreeCheckbox);

    fireEvent.click(submitButton);

    expect(useMutation).toHaveBeenCalledWith(expect.any(Function));
  });
});
