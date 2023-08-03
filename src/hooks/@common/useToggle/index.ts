import { useCallback, useState, Dispatch, SetStateAction } from 'react';

const useToggle = (initialState = false): [boolean, Dispatch<SetStateAction<boolean>>, () => void] => {
  const [state, setState] = useState<boolean>(initialState);
  const toggle = useCallback(() => setState(prev => !prev), []);

  return [state, setState, toggle];
};

export default useToggle;
