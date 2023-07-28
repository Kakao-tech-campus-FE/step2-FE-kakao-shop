import type { ApproveRequest, OrderResponse, PaymentRequest, PaymentResponse } from '@apis/Order';
import type { AxiosError, AxiosResponse } from 'axios';
import { produce, Draft } from 'immer';

// ActionTypes
export const ORDER_PRODUCT_REQUEST = 'order/ORDER_PRODUCT_REQUEST';
export const ORDER_PRODUCT_SUCCESS = 'order/ORDER_PRODUCT_SUCCESS';
export const ORDER_PRODUCT_FAILURE = 'order/ORDER_PRODUCT_FAILURE';

export const PAYMENT_REQUEST = 'order/PAYMENT_REQUEST';
export const PAYMENT_SUCCESS = 'order/PAYMENT_SUCCESS';
export const PAYMENT_FAILURE = 'order/PAYMENT_FAILURE';

export const APPROVE_REQUEST = 'order/APPROVE_REQUEST';
export const APPROVE_SUCCESS = 'order/APPROVE_SUCCESS';
export const APPROVE_FAILURE = 'order/APPROVE_FAILURE';

export const POPUP_CLOSE = 'order/POPUP_CLOSE';

export const orderProductRequestAction = (): OrderProductRequestAction => ({
  type: ORDER_PRODUCT_REQUEST,
});
export const orderProductSuccessAction = (payload: AxiosResponse<OrderResponse>): OrderProductSuccessAction => ({
  type: ORDER_PRODUCT_SUCCESS,
  payload,
});
export const orderProductFailureAction = (payload: AxiosError<OrderResponse>): OrderProductFailureAction => ({
  type: ORDER_PRODUCT_FAILURE,
  payload,
});

export const paymentRequestAction = (payload: PaymentRequest): PaymentRequestAction => ({
  type: PAYMENT_REQUEST,
  payload,
});
export const paymenSuccessAction = (payload: AxiosResponse<PaymentResponse>): PaymentSuceessAction => ({
  type: PAYMENT_SUCCESS,
  payload,
});

export const approveRequestAction = (payload: ApproveRequest): ApproveRequestAction => ({
  type: APPROVE_REQUEST,
  payload,
});

export const approveSuccessAction = (): ApproveSuccessAction => ({
  type: APPROVE_SUCCESS,
});

export const popupCloseAction = (): PopupCloseAction => ({
  type: POPUP_CLOSE,
});

// Initial State
export const initialState: OrderState = {
  isLoading: false,
  error: null,
  order: {} as OrderResponse,
  payment: {} as PaymentResponse,
};

// Reducer
export const OrderReducer = produce((draft: Draft<OrderState>, action) => {
  switch (action.type) {
    case ORDER_PRODUCT_REQUEST:
      draft.isLoading = true;
      break;

    case ORDER_PRODUCT_SUCCESS:
      draft.order = action.payload.data.response;
      draft.isLoading = false;
      console.log(action.payload.data.response);
      localStorage.setItem('order', JSON.stringify(action.payload.data.response));
      break;

    case ORDER_PRODUCT_FAILURE:
      draft.error = action.payload;
      draft.isLoading = false;
      break;

    case PAYMENT_SUCCESS:
      draft.payment = action.payload.data;
      localStorage.setItem('tid', JSON.stringify(action.payload.data.tid));
      openCenteredWindow(
        isMobile() ? action.payload.data.next_redirect_app_url : action.payload.data.next_redirect_pc_url,
        '카카오페이 결제',
        500,
        600,
      );
      break;

    case APPROVE_SUCCESS:
      window.opener.location.href = '/payResult';
      break;

    case POPUP_CLOSE:
      window.close();
      break;
  }
}, initialState);

export type OrderProductRequestAction = {
  type: typeof ORDER_PRODUCT_REQUEST;
};

export type OrderProductSuccessAction = {
  type: typeof ORDER_PRODUCT_SUCCESS;
  payload: AxiosResponse<OrderResponse>;
};

export type OrderProductFailureAction = {
  type: typeof ORDER_PRODUCT_FAILURE;
  payload: AxiosError<OrderResponse>;
};

export type PaymentRequestAction = {
  type: typeof PAYMENT_REQUEST;
  payload: PaymentRequest;
};

export type PaymentSuceessAction = {
  type: typeof PAYMENT_SUCCESS;
  payload: AxiosResponse<PaymentResponse>;
};

export type ApproveRequestAction = {
  type: typeof APPROVE_REQUEST;
  payload: ApproveRequest;
};

export type ApproveSuccessAction = {
  type: typeof APPROVE_SUCCESS;
};

export type PopupCloseAction = {
  type: typeof POPUP_CLOSE;
};

// StateType
export type OrderState = {
  isLoading: boolean;
  error: AxiosError | null;
  order: OrderResponse;
  payment: PaymentResponse;
};

const openCenteredWindow = (url: string, title: string, w: number, h: number) => {
  // 화면 크기
  const screenW = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  const screenH = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

  // 가운데 정렬
  const posX = (screenW - w) / 2;
  const posY = (screenH - h) / 2;

  return window.open(
    url,
    title,
    ' scrollbars=no, resizable=no, width=' + w + ', height=' + h + ', top=' + posY + ', left=' + posX,
  );
};

const isMobile = () => {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
};
