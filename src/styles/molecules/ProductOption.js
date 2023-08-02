import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  width: 23rem;
  margin-left: 2rem;
`;

export const Title = styled.div`
  font-weight: bold;
  font-size: 0.9rem;
`;

export const Delivery = styled.div`
  font-size: 0.9rem;
`;

export const DeliveryTitle = styled.span`
  font-weight: bold;
  margin: 0.3rem 0;
  margin-right: 0.5rem;
`;

export const DeliveryPrice = styled.div`
  background-color: #ffe3ee;
  border-radius: 4px;
  border: 1px solid #bebebe;
  font-size: 0.9rem;
  padding: 0.3rem;
  padding-left: 0.5rem;
  color: #828282;
`;

export const AddPrice = styled.div`
  border-bottom: 1px solid #d8d8d8;
  padding-bottom: 1.3rem;
`;
export const Result = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 0.7rem;
`;

export const Purchase = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
  height: 3rem;
  font-size: 0.9rem;
  .cartButton {
    width: 8rem;
    color: white;
    background-color: black;
    border-radius: 8px;
  }
  .talkButton {
    width: 14rem;
    background-color: #fee500;
    border: none;
    border-radius: 8px;
  }
`;

export const SelectedOption = styled.div`
  border: 1px solid #d8d8d8;
  padding: 0.5rem;
  font-size: 0.9rem;
`;

export const CounterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
