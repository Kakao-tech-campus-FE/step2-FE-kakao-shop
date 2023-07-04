import Toggle from "./toggle";
import {useState} from "react";

function ToggleControlBox() {

    const [color, setColor] = useState('#5bd35f');
    const [on, setOn] = useState(true)
    const toggle = (value) => setOn(value)

    return (
        <div className="toggle-control-box">
            <h1>Toggle!</h1>
            <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                <p style={{margin: '0px 8px'}}>체크일 때의 색을 지정해보세요</p>
                <input type="color" value={color} onChange={(e) => {
                    setColor(e.target.value);
                }
                }/>
            </div>
            <Toggle color={color}

                    on={on}
                    onChange={
                        (e) => {
                            toggle(e.target.checked)
                        }
                    }/>

        </div>);
}

export default ToggleControlBox;