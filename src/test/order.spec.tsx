import { getAuth } from "@/functions/auth";
import { isExpired } from "@/functions/jwt";
import { addProductToCart, getCart, payCart } from "@/remotes/product";
import { signIn } from "@/remotes/sign";

describe("order", () => {
  test("장바구니에 넣고 주문한다.", async () => {
    await signIn({
      email: process.env.VITE_TEST_USER_EMAIL ?? "",
      password: process.env.VITE_TEST_USER_PASSWORD ?? "",
    });

    // 로그인이 되어야 한다.
    expect(isExpired(getAuth())).toBeFalsy();

    await addProductToCart([
      { optionId: 1, quantity: 5 },
      { optionId: 2, quantity: 5 },
    ]);

    // 카트에 물건이 있어야 한다.
    const carts = await getCart();
    // 테스트가 종료 되면 카트를 비운다.
    const payResult = await payCart();

    expect(carts).not.toBeNull();
    expect(payResult).not.toBeNull();

    if (carts !== null && payResult !== null) {
      const productOrders = carts.data.response.products.flatMap((product) =>
        product.carts.flatMap((item) => item)
      );
      const productPayed = payResult.data.response.products.flatMap((product) =>
        product.items.flatMap((item) => item)
      );

      // 결제 내역과 장바구니 내역은 같아야 한다.
      productOrders.forEach((order) => {
        const findedPayItem = productPayed.find(
          (item) => item.optionName === order.option.optionName
        );

        expect(order.quantity).toBe(findedPayItem?.quantity);
        expect(order.option.price * order.quantity).toBe(findedPayItem?.price);
      });

      // 총 결제 내역이 같아야 한다.
      const totalPrice = productOrders.reduce(
        (prev, curr) => prev + curr.option.price * curr.quantity,
        0
      );
      expect(totalPrice).toBe(payResult.data.response.totalPrice);
    }
  });
});
