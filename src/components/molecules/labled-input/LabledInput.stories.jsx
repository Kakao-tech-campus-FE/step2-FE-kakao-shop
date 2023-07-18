import LabeledInput from "./LabeledInput.jsx";
import { useForm, FormProvider } from "react-hook-form";

export default {
  title: "molecules/Labeled Input",
  tags: ["autodocs"],
  component: LabeledInput,
  argTypes: {
    label: { control: "text" },
    id: { control: "text" },
    type: {
      control: "select",
      options: ["text", "number", "password"],
    },
    placeholder: {
      control: "text",
    },
  },
  decorators: [
    (Story) => {
      const methods = useForm({ mode: "onChange" });
      return (
        <FormProvider {...methods}>
          <Story />
        </FormProvider>
      );
    },
  ],
};

export const Default = {
  args: {
    label: "아이디",
    id: "userId",
    type: "text",
    placeholder: "abc123",
  },
};
