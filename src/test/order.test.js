import { useAtomValue } from 'jotai';
import { addCart, getCart } from '../services/cart';
import { login } from '../services/user';
import { jwtAtom } from '../store';
import { order } from '../services/order';

describe('order', () => {
    test('장바구니에 넣고 주문한다.', async () => {
        await login({
            email: 'noba@noba.com',
            password: 'noba1234!',
        });

        const token = useAtomValue(jwtAtom);
        // 로그인이 되어야 한다.
        expect(token).not.toBeNull();

        await addCart([
            { optionId: 1, quantity: 5 },
            { optionId: 2, quantity: 5 },
        ]);

        // 카트에 물건이 있어야 한다.
        const carts = await getCart();
        // 테스트가 종료 되면 카트를 비운다.
        const payResult = await order();

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
