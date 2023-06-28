import Toast from "./toast";
import {useState} from "react";


function ToastControlBox() {
    const [showToast, setShowToast] = useState(false);
    const [toastMessage, setToastMessage] = useState('');
    const [delay, setDelay] = useState(3000);
    return (
        <div id="toast-container">
            <h1>Toast!</h1>
            <select id="toast-delay" style={{padding: "10px"}} onChange={
                (e) => {
                    setDelay(Number(e.target.value));
                }
            }>
                <option value="3000" defaultValue>딜레이 3초</option>
                <option value="5000">딜레이 5초</option>
                <option value="10000">딜레이 10초</option>
            </select>
            <input type="text" placeholder="toast에 들어갈 내용을 적어주세요"
                   style={{width: '200px', padding: '10px', margin: '0px 8px'}}
                   onChange={(e) => {
                       e.preventDefault();
                       setToastMessage(
                           e.target.value
                       );
                   }}
            />
            <button className="submit-btn"
                    onClick={() => {
                        if (toastMessage === '' || toastMessage === null || toastMessage === undefined) {
                            alert('토스트 메세지 내용을 입력해주세요');
                            return;
                        }
                        setShowToast((value) => !value);
                    }}
            >Toast!
            </button>
            <Toast isOpen={showToast} setOpen={setShowToast} message={toastMessage} delay={delay}/>
        </div>
    );
}

export default ToastControlBox;