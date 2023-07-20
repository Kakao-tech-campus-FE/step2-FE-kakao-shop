import instance from "./instance";
import getCarts from "./getCarts";

const makePostData = (quantityList) => {
  const postData = [];
  for (const item of quantityList) {
    if (item.quantity > 0) {
      postData.push({
        optionId: item.id,
        quantity: item.quantity,
      });
    }
  }
  return postData;
};

const PostAddToCart = (postData) => {
  return instance.post("/carts/add", postData);
};

const addToCart = (quantityList) => {
  const postData = makePostData(quantityList);

  PostAddToCart(postData)
    .then((res) => {
      console.log("장바구니에 상품을 담았습니다");
      getCarts().then((r) => console.log("cart get", r.products));
    })
    .catch((err) => {
      console.log(err);
      if (err.response.status === 500) {
        // removeDuplicate(postData);
      }
    });
};

export default addToCart;

// const removeDuplicate = (postData) => {
//   console.log("중복 체크");
//   getCarts().then((res) => {
//     const cartIds = [];
//     for (const product of res.data.response.products) {
//       for (const item of product.carts) {
//         cartIds.push(item.option.id);
//       }
//     }

//     const notInCart = postData.filter((cartItem) => {
//       return !cartIds.includes(cartItem.optionId);
//     });

//     console.log(cartIds, notInCart);

//     if (notInCart.length > 0) {
//       PostAddToCart(notInCart);
//       console.log("장바구니에 상품을 담았습니다");
//     } else {
//       console.log("이미 장바구니에 같은 상품이 있습니다");
//     }
//   });
// };
