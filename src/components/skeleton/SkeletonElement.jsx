import styled from 'styled-components'

const SkeletonCss = styled.div`
  display: flex;
  flex-direction: column;
`;

const Img = styled.span`
    display: flex;
    flex-direction: column;

    width: 200px;
    height: 200px;
    margin:1rem 1rem 1rem 0;

    background-color: #d8d8d8;
`;

const Content = styled.span`
    display: flex;
    flex-direction: column;

    width: 200px;
    height: 15px;
    margin:0.2rem 1rem 0.2rem 0;

    background-color: #d8d8d8;
`;

const SkeletonElement = ({ products }) => {
    return (
        <SkeletonCss>
            <Img />
            <Content />
            <Content />
            <Content />
        </SkeletonCss>
    );
};

//-> presentation components: 데이터를 단순히 표기만 하는 용도의 컴포넌트
//loading state, error state -> template 에서 관리하자!

export default SkeletonElement