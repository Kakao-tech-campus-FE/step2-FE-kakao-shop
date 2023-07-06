import React from "react";
import "./Test.css";
import Toggle from "../components/Toggle/Toggle";
import Toast from "../components/Toast/Toast";
import { Checklist, Check } from "../components/Checklist/Checklist";
import { Radiolist, Radio } from "../components/Radiolist/Radiolist";
import { Carousel, Slide } from "../components/Carousel/Carousel";
import Breadcrumb from "../components/Breadcrumb/Breadcrumb";

const Test = () => {
    const [toast, setToast] = React.useState(false);

    const handleToast = () => {
        setToast((prev) => !prev);
    };

    return (
        <div className="test">
            Hello World!
            <br />
            <Toggle>이건 토글 입니다.</Toggle>
            <br />
            <button onClick={handleToast}> 토스트 활성화 </button>
            <Toast
                title="토스트 제목"
                activateState={[toast, setToast]}
                style={{ top: "10px", left: "10px" }}
            >
                토스트 내용
            </Toast>
            <br />
            <Checklist allCheck="모두 체크하기">
                <Check>선택지 112312312312</Check>
                <Check>선택지 2</Check>
                <Check>선택지 3</Check>
            </Checklist>
            <br />
            <Radiolist title="라디오 리스트" name="radio">
                <Radio>선택지 112312312312</Radio>
                <Radio>선택지 2</Radio>
                <Radio>선택지 3</Radio>
            </Radiolist>
            <br />
            <Carousel style={{ width: "300px", height: "200px" }}>
                <Slide
                    style={{
                        backgroundColor: "red",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    First Slide
                </Slide>
                <Slide
                    style={{
                        backgroundColor: "yellow",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    Second Slide
                </Slide>
                <Slide
                    style={{
                        backgroundColor: "blue",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    Third Slide
                </Slide>
            </Carousel>
            <br />
            <Breadcrumb>
                <a href="#">Home</a>
                <a href="#">Path</a>
                <a href="#">Current</a>
            </Breadcrumb>
        </div>
    );
};

export default Test;
