import { useState } from 'react';
import styled from 'styled-components';

function CheckList({ names, axis }: { names: string[]; axis: 'column' | 'row' }) {
  const [inputNames, setInputNames] = useState<string[]>([...names]);
  const list = inputNames.map((name) => (
    <label htmlFor={name} key={name}>
      {name}
      <input id={name} name={name} type="checkbox" />
    </label>
  ));
  return <Wrap axis={axis}>{list}</Wrap>;
}

export default CheckList;

const Wrap = styled.div<{ axis: 'column' | 'row' }>`
  display: flex;
  flex-direction: ${(props) => props.axis};
`;
