import { useState } from "react";
import { comma } from "../../utils/convert";
import Button from "../atoms/Button";
import { ListGroup } from "react-bootstrap";

const OptionList = ({ options, onClick }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpen = () => {
        setIsOpen((prev) => !prev);
    };

    return (
        <div className="option-list">
            <Button className="w-100 p-2" onClick={handleOpen}>
                선택하기
            </Button>
            <ListGroup
                className={`option-list w-100 ${isOpen ? "" : "d-none"}`}
            >
                {options.map((option) => (
                    <ListGroup.Item
                        key={option.id}
                        className="option text-start px-1 fs-7"
                        onClick={() => {
                            handleOpen();
                            onClick(option);
                        }}
                    >
                        <span className="name fw-bold">
                            {option.optionName}
                        </span>
                        <br />
                        <span className="price">{comma(option.price)}원</span>
                    </ListGroup.Item>
                ))}
            </ListGroup>
        </div>
    );
};

export default OptionList;
