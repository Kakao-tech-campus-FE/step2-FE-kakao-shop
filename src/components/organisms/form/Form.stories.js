import Form from "./Form.jsx";
import FORM_DEFAULT from "../../../constants/FORM_DEFAULT.js";
import FORM_INFO from "../../../constants/FORM_INFO.js";

export default {
  title: "organisms/Form",
  tags: ["autodocs"],
  component: Form,
  argTypes: {
    defaultValues: { control: "object" },
    inputInformations: { control: "object" },
  },
};

export const SIGN_IN = {
  args: {
    onSubmit: (data) => {
      console.log(data);
    },
    onError: (e) => {
      console.log(e);
    },
    defaultValues: FORM_DEFAULT.SIGN_IN,
    inputInformations: FORM_INFO.SIGN_IN,
  },
};
