import delivery from '@assets/delivery.webp';
import { css } from '@emotion/react';

import { Photo } from '@components/atom';

const DeliveryInfo = () => {
  return <Photo imageClassName={S.DeliveryCSS} src={delivery} alt="배송정보" />;
};

export default DeliveryInfo;

const S = {
  DeliveryCSS: css`
    width: 300px;
    height: 120px;
  `,
};
