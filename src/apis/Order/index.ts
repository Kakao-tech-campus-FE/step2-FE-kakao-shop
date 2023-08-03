import { client } from '@apis/client';
import { kakaoPay } from '@apis/kakaoPay';
import { AxiosResponse } from 'axios';

export type OrderResponse = {
  id: number;
  products: OrderProduct[];
  totalPrice: number;
};

export const orderAPI = async () => {
  const res: AxiosResponse<OrderResponse> = await client.post('/orders/save');

  return res;
};

export type PaymentRequest = {
  itemName: string;
  quantity: number;
  totalAmount: number;
};

export type PaymentResponse = {
  tid: string;
  next_redirect_app_url: string;
  next_redirect_mobile_url: string;
  next_redirect_pc_url: string;
  android_app_scheme: string;
  ios_app_scheme: string;
  created_at: string;
};

export const paymentAPI = async ({ itemName, quantity, totalAmount }: PaymentRequest) => {
  const res: AxiosResponse<PaymentResponse> = await kakaoPay.post('/payment/ready', {
    cid: 'TC0ONETIME',
    partner_order_id: 'test',
    partner_user_id: 'test@test.com',
    item_name: itemName,
    quantity,
    total_amount: totalAmount,
    tax_free_amount: 0,
    approval_url: 'https://kdykakaoshop.netlify.app/pay/approve',
    cancel_url: 'https://kdykakaoshop.netlify.app/pay/cancel',
    fail_url: 'https://kdykakaoshop.netlify.app/pay/fail',
  });

  return res;
};

export type ApproveRequest = {
  tid: string;
  pgToken: string;
};

export const approveAPI = async ({ tid, pgToken }: ApproveRequest) => {
  console.log(tid);
  const res = await kakaoPay.post('/payment/approve', {
    cid: 'TC0ONETIME',
    tid,
    partner_order_id: 'test',
    partner_user_id: 'test@test.com',
    pg_token: pgToken,
  });

  return res;
};

export type OrderProduct = {
  productName: string;
  items: Item[];
};

export type Item = {
  id: number;
  optionName: string;
  quantity: number;
  price: number;
};
