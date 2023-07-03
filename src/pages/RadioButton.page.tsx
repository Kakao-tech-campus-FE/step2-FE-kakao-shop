import RadioGroup from "@/components/Button/RadioGroup.component";

const RadioButtonPage = () => {
  const radioButtons = [
    { value: "1", label: "Option 1" },
    { value: "2", label: "Option 2" },
    { value: "3", label: "Option 3" },
  ];

  return <RadioGroup radioButtons={radioButtons} name="gourp" />;
};

export default RadioButtonPage;
