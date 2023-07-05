import React from "react";
import ToggleButton from "../components/Togglebutton";
import Breadcrumb from "../components/Breadcrumb";
import Carousel from "../components/Carousel";
import Radiobutton from "../components/Radiobutton";
import Toast from "../components/Toast";
import Checklist from "../components/Checklist";

const ComponentTest = () => {
    return (
        <>
            <div style={{textAlign:"center", justifyContent: "center", alignItems: "center",  marginTop: "150px"}}>
                <h1>UI Components Testing</h1>
                <h1>Toast</h1>
                    <Toast />
                <h1>Breadcrumb</h1>
                    <Breadcrumb />
                <h1>Carousel</h1>
                    <Carousel />
                <h1>Radio Button</h1>
                    <Radiobutton />
                <h1>Toggle Button</h1>
                    <ToggleButton />
                <h1>Check List</h1>
                    <Checklist />
            </div>
        </>
    )
}

export default ComponentTest