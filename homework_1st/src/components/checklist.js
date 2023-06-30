import React, { useState } from 'react';

const Checklist = () => {
    const [checkedItems, setCheckedItems] = useState({});

    const handleCheckboxChange = (event) => {
        const { name, checked } = event.target;
        setCheckedItems((prevState) => ({ ...prevState, [name]: checked }));
    };

    return (
        <div className="checkbox-btn">
            <p>
                <label>
                    <input
                        type="checkbox"
                        name="learningJournal"
                        checked={checkedItems.learningJournal}
                        onChange={handleCheckboxChange}
                    />
                    학습일지 작성
                </label>
            </p>
            <p>
                <label>
                    <input
                        type="checkbox"
                        name="checklist"
                        checked={checkedItems.checklist}
                        onChange={handleCheckboxChange}
                    />
                    체크리스트 만들기
                </label>
            </p>
            <p>
                <label>
                    <input
                        type="checkbox"
                        name="radioButton"
                        checked={checkedItems.radioButton}
                        onChange={handleCheckboxChange}
                    />
                    라디오버튼 만들기
                </label>
            </p>
            <p>
                <label>
                    <input
                        type="checkbox"
                        name="carousel"
                        checked={checkedItems.carousel}
                        onChange={handleCheckboxChange}
                    />
                    캐러셀 만들기
                </label>
            </p>
        </div>
    );
};

export default Checklist;
