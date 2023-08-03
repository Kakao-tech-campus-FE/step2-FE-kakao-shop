import React from "react";
import ToggleButton from "../components/samples/Togglebutton";
import Breadcrumb from "../components/samples/Breadcrumb";
import Carousel from "../components/samples/Carousel";
import Radiobutton from "../components/samples/Radiobutton";
import Toast from "../components/samples/Toast";
import Checklist from '../components/samples/Checklist';

const ComponentsPage = () => {
    return (
        <div className="componentsPage">
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
    )
}

export default ComponentsPage