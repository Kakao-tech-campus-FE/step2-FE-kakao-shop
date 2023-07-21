import { useReducer } from 'react';
import { SelectedOption } from '../types/product';
import { OptionReducerAction } from '../types/reducerAction';

function optionReducer(selectedOptions: SelectedOption[], action: OptionReducerAction) {
  switch (action.type) {
    case 'added': {
      if (selectedOptions.find((option) => option.id === action.id) !== undefined) {
        return selectedOptions;
      }

      return [...selectedOptions, {
        id: action.id,
        optionName: action.optionName,
        quantity: 1,
        individualPrice: action.individualPrice,
      }];
    }

    case 'updated': {
      if (action.quantity <= 0) {
        return selectedOptions;
      }

      return selectedOptions.map((option) => {
        if (option.id === action.id) {
          return {
            ...option,
            quantity: action.quantity,
          };
        }

        return option;
      });
    }

    case 'deleted': {
      return selectedOptions.filter((option) => option.id !== action.id);
    }

    default: {
      throw Error('Unknown action');
    }
  }
}

export function useOptionReducer() {
  const [selectedOptions, dispatch] = useReducer(optionReducer, []);

  return { selectedOptions, dispatch };
}
