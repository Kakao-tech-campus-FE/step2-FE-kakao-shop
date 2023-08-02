import Container from "./Container";

const OptionItem = ({ items }) => {
    return (
        <>
            {items.map((item) => {
                return (
                    <Container>
                        <div className="label">옵션 {item.id + 1}.</div>
                        <p>{item.optionName}</p>
                        <div className="label">구매수량</div>
                        <p>{item.quantity}</p>
                        <div className="label">금액</div>
                        <p>{item.price * item.quantity}</p>
                    </Container>
                );
            })}
        </>
    );
}

export default OptionItem;