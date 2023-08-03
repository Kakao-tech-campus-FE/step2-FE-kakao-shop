import ApiInstance from "./index";

class PaymentInstance extends ApiInstance {
  payParams = {
    cid: "TC0ONETIME",
    partner_order_id: "partner_order_id",
    partner_user_id: "partner_user_id",
    vat_amount: 0,
    tax_free_amount: 0,
    fail_url: "https://user-app.krampoline.com/ke3fef0952eb9a/canceled-order",
    cancel_url: "https://user-app.krampoline.com/ke3fef0952eb9a/canceled-order",
  };

  approveParams = {
    cid: "TC0ONETIME",
    tid: window.localStorage.getItem("tid"),
    partner_order_id: "partner_order_id",
    partner_user_id: "partner_user_id",
  };

  payRequest = async (item_name, quantity, total_amount, address, request) => {
    const params = {
      ...this.payParams,
      item_name,
      quantity,
      total_amount,
      approval_url: `https://user-app.krampoline.com/ke3fef0952eb9a/pay_redirect?address=${address}&request=${request}`,
    };
    return this.instance.post("/v1/payment/ready", params, {
      headers: {
        Authorization: `KakaoAK ${process.env.REACT_APP_KAKAO_ADMIN_KEY}`,
      },
    });
  };

  payApproveRequest = async (pg_token) => {
    const params = {
      ...this.approveParams,
      pg_token,
    };
    return this.instance.post("/v1/payment/approve", params, {
      headers: {
        Authorization: `KakaoAK ${process.env.REACT_APP_KAKAO_ADMIN_KEY}`,
      },
    });
  };
}

const paymentInstance = new PaymentInstance(
  "https://kapi.kakao.com",
  "application/x-www-form-urlencoded;charset=utf-8"
);

export default paymentInstance;
