import { addProductToCart, getCart, payCart } from "@/remotes/product";
import { signIn } from "@/remotes/sign";

describe("order", () => {
  test("장바구니에 넣고 주문한다.", async () => {
    await signIn({
      email: process.env.VITE_TEST_USER_EMAIL ?? "",
      password: process.env.VITE_TEST_USER_PASSWORD ?? "",
    });

    await addProductToCart([
      { optionId: 1, quantity: 5 },
      { optionId: 2, quantity: 5 },
    ]);

    const carts = await getCart();
    const productOrders = carts.data.response;
    await payCart();

    productOrders.products.flatMap((product) => {
      product.carts.map((cart) => {
        expect(cart.quantity).toBe(5);
      });
    });
    expect(productOrders.totalPrice).toBe(104500);
  });
});
