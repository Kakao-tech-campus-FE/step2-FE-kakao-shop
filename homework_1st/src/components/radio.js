import React, { useState } from 'react';

const Radio = () => {
    const [selectedSport, setSelectedSport] = useState('');

    const handleSportChange = (event) => {
        setSelectedSport(event.target.value);
    };

    return (
        <div className="radio-btn">
            <label>
                <input
                    type="radio"
                    name="sport"
                    value="soccer"
                    checked={selectedSport === 'soccer'}
                    onChange={handleSportChange}
                />
                soccer
            </label>
            <label>
                <input
                    type="radio"
                    name="sport"
                    value="baseball"
                    checked={selectedSport === 'baseball'}
                    onChange={handleSportChange}
                />
                baseball
            </label>
            <label>
                <input
                    type="radio"
                    name="sport"
                    value="basketball"
                    checked={selectedSport === 'basketball'}
                    onChange={handleSportChange}
                />
                basketball
            </label>
        </div>
    );
};

export default Radio;
