import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { getDetailProduct } from '../api/Products';
import MainSection from '../components/Detail/templates/MainSection';
import SideSection from '../components/Detail/templates/SideSection';
import { styled } from 'styled-components';

function Detail() {
  const param = useParams();
  const { id } = param;
  const { data } = useQuery(['getDetailProduct'], () => getDetailProduct(id as string), {
    suspense: true,
  });
  if (!data) return null;
  return (
    <Wrap>
      <MainSection
        id={data.response.id}
        starCount={data.response.starCount}
        description={data.response.description}
        image={data.response.image}
        price={data.response.price}
        productName={data.response.productName}
      />
      <SideSection options={data.response.options} />
    </Wrap>
  );
}

export default Detail;

const Wrap = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 32px;
`;
