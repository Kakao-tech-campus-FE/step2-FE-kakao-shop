import { getOrdersById } from "@apis/getOrdersById";
import InnerContainer from "@components/atoms/InnerContainer";
import Loader from "@components/atoms/Loader";
import CompleteForm from "@components/organisms/CompleteForm";
import { useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import { styled } from "styled-components";

const CompleteTemplate = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data, isLoading } = useQuery(
    [`/orders/${id}`, id],
    () => getOrdersById(id),
    {
      retry: false,
      onError: (err: any) => {
        if (err.status === 404) {
          navigate("/notFound");
        }
      },
    }
  );

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <InnerContainer>
          <Wrapper>
            <CompleteForm data={data?.response} />
          </Wrapper>
        </InnerContainer>
      )}
    </div>
  );
};

export default CompleteTemplate;

const Wrapper = styled.div`
  margin-top: 80px;
`;
