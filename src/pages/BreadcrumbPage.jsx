import { useState } from 'react';
import Breadcrumb from '../components/Breadcrumb';

const BreadcrumbPage = () => {
    const [labelList, setLabelList] = useState([1]);
    const [value, setValue] = useState(2);

    function labelAdd() {
        setLabelList([...labelList, value]);
        setValue(value + 1);
    }

    function labelDel() {
        if (labelList.length > 1) {
            setLabelList(labelList.slice(0, labelList.length - 1));
            setValue(value - 1);
        }
    }

    return (
        <>
            <h2>Breadcrumb</h2>
            <Breadcrumb labelList={labelList} />
            <br />
            <button onClick={labelAdd}>UP</button>
            <button onClick={labelDel}>DOWN</button>
        </>
    );
};

export default BreadcrumbPage;
