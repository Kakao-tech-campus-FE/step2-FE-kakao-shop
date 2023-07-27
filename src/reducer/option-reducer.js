const optionReducer = (options, action) => {
  switch (action.type) {
    case "add": {
      const { option } = action;
      const { id, optionName, price } = option;
      const hasOption = Boolean(options.find((opt) => opt.id === id));

      if (hasOption) {
        return options.map((opt) =>
          opt.id === id ? { ...opt, count: opt.count + 1 } : opt
        );
      }
      return [...options, { id, optionName, price, count: 1 }];
    }
    case "update": {
      const { id, flag } = action;

      return options.map((opt) =>
        opt.id === id
          ? { ...opt, count: flag === "plus" ? opt.count + 1 : opt.count - 1 }
          : opt
      );
    }
    case "delete": {
      const { id } = action;

      return options.filter((opt) => opt.id !== id);
    }
    case "clear": {
      return [];
    }
    default: {
      throw Error(`알수없는 액션 타입: ${action.type}`);
    }
  }
};

export default optionReducer;
