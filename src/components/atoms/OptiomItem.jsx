import { styled } from "styled-components";
import { comma } from "../../utils/comma";

const OptiomItem = ({ items }) => {
    return (
        <>
        {items.map((item, idx) => {
            return (
                <OptionItemContainer key={item.id}>
                    <OptionItemContentBox>
                        <div className="label">[ 옵션 {idx + 1} ]</div>
                        <p>{item.optionName}</p>
                    </OptionItemContentBox>
                    <OptionItemContentBox>
                        <div className="label">구매 수량 : </div>
                        <p>{item.quantity} 개</p>
                    </OptionItemContentBox>
                    <OptionItemContentBox>
                        <div className="label">금액(옵션 금액 * 수량) : </div>
                        <p>{comma(item.price * item.quantity)} 원</p>
                    </OptionItemContentBox>
                </OptionItemContainer>
            )
        })}
        </>
    );
};

export default OptiomItem;

const OptionItemContainer = styled.div`
    border : 1px solid #ddd;
    margin : 10px 0;
    padding : 10px;
    background-color : #00000014;
`;

const OptionItemContentBox = styled.div`
    display : flex;
    align-items : center;
    & > .label {
        font-size : 1.2rem;
        margin-right : 10px;
    }
    & > .option
    p {
        font-size : 1rem;
    }
`