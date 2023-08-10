import {useState} from "react";

const PaymentSectionCard = ({title, description, children}) => {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <div className="bg-white mb-4">
            <div className="flex justify-between p-4">
                <div className="flex items-baseline">
                    <h3 className="font-bold text-2xl">{title}</h3>
                    <p className="mx-2">{description}</p>
                </div>
                <button onClick={() => setIsOpen((prev) => !prev)}>{isOpen ? "▲" : "▼"}</button>
            </div>
            {isOpen && children}
        </div>
    );
};

export default PaymentSectionCard;