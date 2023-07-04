import Breadcrumb from "./breadcrumb";
import {useEffect, useState} from "react";

function BreadcrumbControlBox() {

    const [breadcrumbList, setBreadcrumbList] = useState(['Things', 'fruit', 'apple']);
    const [newBreadcrumbItem, setNewBreadcrumbItem] = useState('');
    useEffect(
        () => {
            setNewBreadcrumbItem('')
        }
        , [breadcrumbList]);
    return (
        <div id="breadcrumb-container">
            <h1>Breadcrumb!</h1>
            <div style={{backgroundColor: "aliceblue", padding: "4px", marginBottom: "12px"}}>

                {breadcrumbList.length === 0 ? <div style={{padding: "16px 40px"}}>
                        아이탬을 추가해주세요
                    </div>
                    : <Breadcrumb items={breadcrumbList}/>
                }
            </div>
            <button className="submit-btn"
                    onClick={() => {
                        setBreadcrumbList([]);
                    }}>🔥 모두 삭제
            </button>
            <input type="text" placeholder="breadcrumb에 추가할 아이탬"
                   style={{width: '200px', padding: '10px', margin: '8px'}}
                   value={newBreadcrumbItem}
                   onChange={(e) => {
                       e.preventDefault();
                       setNewBreadcrumbItem(
                           e.target.value
                       );
                   }}
            />
            <button className="submit-btn"
                    onClick={() => {
                        if (newBreadcrumbItem === '' || newBreadcrumbItem === null || newBreadcrumbItem === undefined) {
                            alert('아이탬 내용을 입력해주세요');
                            return;
                        }
                        setBreadcrumbList((value) => [...value, newBreadcrumbItem]);

                    }}
            >🎨 추가!
            </button>
        </div>

    );
}

export default BreadcrumbControlBox;