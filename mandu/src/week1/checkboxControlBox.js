import Checkbox from "./checkbox";
import {useEffect, useState} from "react";


function CheckboxControlBox() {

    const [items, setItems] = useState({
        "html 공부하기": false,
        "css 공부하기": false,
        "docs 읽기": false,
        "티비보기": true,

    });

    const [count, setCount] = useState({
        didCount: 0,
        leftCount: 0,
    });

    useEffect(() => {
        const values = Object.values(items);
        const result = values.reduce(
            (prev, curr) => {
                if (curr === true) {
                    return prev + 1;
                }
                return prev;
            }, 0
        );
        setCount({
            didCount: result,
            leftCount: values.length - result,
        })
    }, [items])


    return (
        <div className="checkbox-control-box">
            <h1>CheckBox</h1>
            {
                Object.entries(items).map(([key, value], index) => {
                    return <Checkbox item={key} value={value} key={index} setValue={setItems}/>
                })
            }
            <p>해야할 일 {count.leftCount} 완료한 일 {count.didCount}</p>
        </div>
    )
}


export default CheckboxControlBox;