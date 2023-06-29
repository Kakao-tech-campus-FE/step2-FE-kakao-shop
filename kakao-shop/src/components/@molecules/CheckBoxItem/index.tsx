import CheckBox from "../../@base/CheckBox";
import { PropsWithChildren } from "react";

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
