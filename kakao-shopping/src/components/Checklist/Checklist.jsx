import React from "react";
import "./Checklist.css";

export const Check = ({ children, handleCheck, checked, ...props }) => {
    return (
        <label className={`check ${checked}`} {...props}>
            <input
                type="checkbox"
                checked={checked}
                onChange={({ target: { checked } }) => {
                    handleCheck(checked);
                }}
            />
            {children}
        </label>
    );
};

export const Checklist = ({ children, allCheck, ...props }) => {
    let check_count = 0;
    React.Children.forEach(children, (child) => {
        if (child.type.name === "Check") {
            check_count += 1;
        }
    });

    const [allcheck, setAllCheck] = React.useState(false);
    const [checks, setChecks] = React.useState(() => {
        const checks_obj = {};
        for (let i = 0; i < check_count; i++) {
            checks_obj[i] = false;
        }
        return checks_obj;
    });

    React.useEffect(() => {
        for (let check in checks) {
            if (!checks[check]) {
                setAllCheck(false);
                return;
            }
        }
        setAllCheck(true);
    }, [checks]);

    const handleCheck = (idx, val) => {
        setChecks(Object.assign({}, Object.assign(checks, { [idx]: val })));
        console.log(checks);
    };

    return (
        <div className={`checklist`} {...props}>
            {allCheck ? (
                <Check
                    className="allcheck"
                    handleCheck={(val) => {
                        for (let check in checks) {
                            handleCheck(check, val);
                        }
                    }}
                    checked={allcheck}
                >
                    {allCheck}
                </Check>
            ) : (
                ""
            )}
            {React.Children.map(children, (child, i) => {
                if (child.type.name === "Check") {
                    return (
                        <Check
                            handleCheck={(val) => {
                                handleCheck(i, val);
                            }}
                            checked={checks[i]}
                            {...child.props}
                        ></Check>
                    );
                }
            })}
        </div>
    );
};

export default { Checklist, Check };
