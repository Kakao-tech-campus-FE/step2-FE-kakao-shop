import { PropsWithChildren } from 'react';

import CheckBox from '@components/atom/CheckBox';

const CheckBoxItem = ({ children }: PropsWithChildren) => {
  return (
    <CheckBox>
      <CheckBox.RegularText>{children}</CheckBox.RegularText>
    </CheckBox>
  );
};

CheckBoxItem.Big = function ({ children }: PropsWithChildren) {
  return (
    <CheckBox>
      <CheckBox.BigText>{children}</CheckBox.BigText>
    </CheckBox>
  );
};

export default CheckBoxItem;
