import OptionList from "@/components/atoms/option-accordion-column/OptionAccordionColumn.jsx";

export default {
  title: "atoms/Option Accordion List",
  tags: ["autodocs"],
  component: OptionList,
  argTypes: {
    options: { control: "array" },
  },
};

const defaultOptions = [
  {
    id: 1,
    optionName: "01. 슬라이딩 지퍼백 크리스마스에디션 4종",
    price: 10000,
  },
  {
    id: 2,
    optionName: "02. 슬라이딩 지퍼백 플라워에디션 5종",
    price: 10900,
  },
  {
    id: 3,
    optionName: "고무장갑 베이지 S(소형) 6팩",
    price: 9900,
  },
  {
    id: 4,
    optionName: "뽑아쓰는 키친타올 130매 12팩",
    price: 16900,
  },
  {
    id: 5,
    optionName: "2겹 식빵수세미 6매",
    price: 8900,
  },
];

export const Default = {
  args: {
    options: defaultOptions,
  },
};
