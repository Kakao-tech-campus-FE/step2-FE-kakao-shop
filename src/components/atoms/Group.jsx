import styled from "styled-components";

const GroupDiv = styled.div`
  margin-top: 1rem;
`;

const Group = ({ children }) => {
  // input과 label 컴포넌트를 감싸기 위한 컴포넌트
  return <GroupDiv>{children}</GroupDiv>;
};

export default Group;
