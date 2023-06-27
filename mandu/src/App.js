import './App.css';
import Toast from "./components/toast";
import {useState} from "react";


function App() {
    const [showToast, setShowToast] = useState(false);
    const [toastMessage, setToastMessage] = useState('');


    return (
        <div className="App">
            {/*<header className="App-header">*/}
            {/*  <img src={logo} className="App-logo" alt="logo" />*/}
            {/*  <p>*/}
            {/*    Edit <code>src/App.js</code> and save to reload.*/}
            {/*  </p>*/}
            {/*  <a*/}
            {/*    className="App-link"*/}
            {/*    href="https://reactjs.org"*/}
            {/*    target="_blank"*/}
            {/*    rel="noopener noreferrer"*/}
            {/*  >*/}
            {/*    Learn React*/}
            {/*  </a>*/}
            {/*</header>*/}
            <div id="toast-container">
                <h1>Toast!</h1>
                <input type="text" placeholder="toast에 들어갈 내용을 적어주세요"
                       style={{width: '200px', padding: '10px', marginRight: '4px'}}
                       onChange={(e) => {
                           e.preventDefault();
                           setToastMessage(
                               e.target.value
                           );
                       }}
                />
                <button
                    style={{padding: '12px', backgroundColor: 'darkgrey', border: 'none', borderRadius: '4px'}}
                    onClick={() => {
                        if (toastMessage === '' || toastMessage === null || toastMessage === undefined) {
                            alert('토스트 메세지 내용을 입력해주세요');
                            return;
                        }
                        setShowToast((value) => !value);
                    }}
                >Toast!
                </button>
                <Toast isOpen={showToast} setOpen={setShowToast} message={toastMessage} delay={3000}/>


            </div>
            <div id="toast-container">
                <Toast/>
                <button>Click me</button>
            </div>
            <div id="toast-container">
                <Toast/>
                <button>Click me</button>
            </div>
            <div id="toast-container">
                <Toast/>
                <button>Click me</button>
            </div>

        </div>
    );
}

export default App;
