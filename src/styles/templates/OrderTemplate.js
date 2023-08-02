import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Box = styled.div`
  width: 55vw;
  margin: 3rem 0;
  min-width: 700px;
`;

export const Title = styled.h1`
  border: 2px solid #ffe6eb;
  font-size: 1.1rem;
  font-weight: bold;
  text-align: center;
  padding: 1rem;
  margin-bottom: 0;
`;
export const DeliveryContainer = styled.div`
  border: 2px solid #ffe6eb;
  border-top: none;
  padding: 0.7em;
`;

export const DeliveryInfoTitle = styled.h2`
  font-size: 1.1rem;
  font-weight: bold;
  border: 2px solid #ffe6eb;
  border-top: none;
  padding: 0.7rem;
  margin: 0;
`;

export const DeliveryInfoName = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 0.3rem;
`;

export const DeliveryDefalt = styled.span`
  background-color: #cdecfa;
  border-radius: 5px;
  padding: 0.3rem;
  font-size: 0.7rem;
  color: blue;
`;

export const ProductInfo = styled.div`
  margin-top: 1rem;
  font-size: 1.1rem;
  font-weight: bold;
  border: 2px solid #ffe6eb;
  padding: 0.7rem;
`;

export const TotalPriceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 1.1rem;
  font-weight: bold;
  .price {
    color: #288cff;
  }
  margin-top: 1rem;
  border: 2px solid #ffe6eb;
  padding: 0.7rem;
`;

export const CheckBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  label {
    padding-left: 0.4rem;
  }
  border: 2px solid #ffe6eb;
  border-bottom: none;
  margin-top: 1rem;
`;

export const TotalAgree = styled.div`
  font-size: 1.1rem;
  font-weight: bold;
  border-bottom: 2px solid #ffe6eb;
  padding: 0.7rem;
`;
export const Checkbox = styled.div`
  padding: 0.7rem;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const PolicyTitle = styled.div`
  font-weight: bold;
  padding-left: 0.5rem;
`;

export const PolicyText = styled.div`
  font-size: 0.9rem;
  padding: 0.5rem;
  margin-bottom: 1.5rem;
`;

export const Button = styled.button`
  padding: 0.8rem;
  width: 100%;
  background-color: #fee500;
  border: none;
  font-weight: bold;
  pointer-events: ${(props) => (props.disabled ? 'none' : null)};
`;
