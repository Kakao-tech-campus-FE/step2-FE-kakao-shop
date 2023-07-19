import OptionList from "../atoms/OptionList";
import Skeleton from "../atoms/Skeleton";

const OptionColumn = ({ product, isLoading, option, setOption }) => {
    return (
        <div className="option-column">
            {!isLoading ? (
                <>
                    <h3>옵션 선택</h3>
                    <OptionList
                        options={product.options}
                        onClick={(option) => {
                            setOption(option.id - 1);
                        }}
                    />
                    <hr />
                    <div className="total-price">
                        <span>
                            총 상품금액{" "}
                            {option !== null
                                ? product.price + product.options[option].price
                                : ""}
                        </span>
                    </div>
                </>
            ) : (
                <>
                    <Skeleton type="title" />
                    <Skeleton type="list" />
                    <hr />
                    <Skeleton type="text" />
                </>
            )}
        </div>
    );
};

export default OptionColumn;
