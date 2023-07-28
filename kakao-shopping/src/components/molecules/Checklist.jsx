import React from "react";
import { Form } from "react-bootstrap";
import Label from "../atoms/Label";

export const Checklist = ({
    checkLabels, // Check 라벨들
    onCheck, // 체크되었을 경우 함수 (인덱스 참조 상태 갱신)
    checks, // 체크 상태
    className = "", // class
    id = "",
    ...props
}) => {
    return (
        <div className={`checklist ${className}`} {...props}>
            <Form.Check
                className="fw-bold"
                id={`${id}-allcheck`}
                type="checkbox"
                key={`allcheck-${id}`}
                label="전체 동의하기"
                onChange={(e) => {
                    console.log(e.target.checked);
                    let checkTargets = [];
                    checks.forEach((check, idx) => {
                        if (e.target.checked !== check) checkTargets.push(idx);
                    });
                    onCheck(...checkTargets);
                }}
                checked={checks.reduce((acc, cur) => {
                    return acc & cur;
                }, true)}
            />
            <hr />
            {checkLabels.map((checkLabel, idx) => {
                return (
                    <Form.Check
                        type="checkbox"
                        key={`${id}-${idx}`}
                        id={`${id}-${idx}`}
                        label={checkLabel}
                        onChange={(e) => {
                            onCheck(idx);
                        }}
                        checked={checks[idx]}
                    />
                );
            })}
        </div>
    );
};

export default Checklist;
