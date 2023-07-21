import Box from "../atoms/Box";
import Counter from "../atoms/Counter";
import comma from "../../utils/convert";
import Button from "../atoms/Button";

const CartItem = ({ item, onChange, onDelete }) => {
  const totalQuantity = item.carts.reduce((acc, cur) => {
    return acc + cur.quantity;
  }, 0);
  return (
    <div>
      {totalQuantity ? (
        <>
          <Box className="cart-item-box p-[16px]">
            <div className="product-name pl-[5px] pb-[16px] text-[15px] font-bold">
              {item.productName}
            </div>
            {item.carts.map((cart) =>
              cart.quantity ? (
                <>
                  <Box
                    key={cart.id}
                    className="option-box p-[11px] border rounded-[3px]"
                  >
                    <div className="option-name text-[14px]">
                      <span>{cart.option.optionName}</span>
                    </div>
                    <div className="pt-[12px]">
                      <div className="row">
                        <Button
                          onClick={() => {
                            onDelete(cart.id, cart.quantity, cart.option.price);
                          }}
                          className="button-delete w-[53px] h-[30px] mr-[6px] border border-gray-300 rounded-[4px] text-[13px]"
                        >
                          삭제
                        </Button>
                        <Counter
                          value={cart.quantity}
                          onIncrease={(count) => {
                            onChange(cart.id, count, cart.option.price);
                          }}
                          onDecrease={(count) => {
                            onChange(cart.id, count, -cart.option.price);
                          }}
                          btnClassName="w-[30px] h-[30px] rounded-[4px]"
                          cntClassName="w-[37px] h-[30px]"
                        />
                        <div className="price float-right text-[15px] font-bold">
                          <span>
                            {comma(cart.option.price * cart.quantity)}원
                          </span>
                        </div>
                      </div>
                    </div>
                  </Box>
                  <div className="h-[10px]" />
                </>
              ) : (
                []
              )
            )}
            <Box className="total-price p-[11px] border rounded-[3px] bg-gray-100">
              <div className="row flex">
                <div className="text-[15px] font-bold">주문금액</div>
                <div className="price ml-auto text-[15px] font-bold">
                  {comma(
                    item.carts.reduce((acc, cur) => {
                      return acc + cur.option.price * cur.quantity;
                    }, 0)
                  )}
                  원
                </div>
              </div>
            </Box>
          </Box>
          <div className="bg-gray-100 h-[11px]" />
        </>
      ) : (
        []
      )}
    </div>
  );
};

export default CartItem;
