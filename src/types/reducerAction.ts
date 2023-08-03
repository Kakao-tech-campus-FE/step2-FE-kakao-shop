export type OptionReducerAction = {
  type: 'added';
  id: number;
  optionName: string;
  individualPrice: number;
} | {
  type: 'updated';
  id: number;
  quantity: number;
} | {
  type: 'deleted';
  id: number;
} | {
  type: 'reset';
};
