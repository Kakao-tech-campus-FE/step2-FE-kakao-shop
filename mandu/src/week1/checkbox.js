function Checkbox({item, value, setValue}) {
    return (
        <div className="checkbox" style={{display: "flex", alignItems: "center"}}>
            <button className="checkbox-btn" onClick={
                () => {
                    setValue((prev) => {
                        return {
                            ...prev,
                            [item]: !value
                        }
                    });
                }
            }>
                {value ? <CheckedBox/> : <UnCheckedBox/>}
            </button>

            <span style={{
                textDecorationLine: value ? "line-through" : "none",
            }}>{item}</span>
        </div>
    )
}

export default Checkbox;

const CheckedBox = () => {
    return (
        <span className="material-symbols-outlined checked-box">check_box</span>
    )
}

const UnCheckedBox = () => {
    return (
        <span className="material-symbols-outlined ">check_box_outline_blank</span>
    )
}