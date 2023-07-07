import React from "react";
import "./Radiolist.css";

export const Radio = ({
    name = "",
    children,
    handleSelect,
    selected,
    ...props
}) => {
    return (
        <label className="radio" {...props}>
            <input
                type="radio"
                checked={selected}
                onChange={handleSelect}
                className={`${selected ? "selected" : ""}`}
                name={name}
            />
            {children}
        </label>
    );
};

export const Radiolist = ({ children, name, defaultValue = 0, ...props }) => {
    const [select, setSelect] = React.useState(defaultValue);

    const handleSelect = (idx) => {
        setSelect(idx);
    };

    return (
        <div className={`radiolist`} {...props}>
            {React.Children.map(children, (child, i) => {
                if (child.type.name === "Radio") {
                    return (
                        <Radio
                            name={name}
                            selected={select === i}
                            handleSelect={() => {
                                handleSelect(i);
                            }}
                        >
                            {child.props.children}
                        </Radio>
                    );
                }
            })}
        </div>
    );
};

export default { Radiolist, Radio };
