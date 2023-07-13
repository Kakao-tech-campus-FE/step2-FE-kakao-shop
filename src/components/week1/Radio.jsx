import React, { useState } from "react";
import '../styles/Radio.css';

const Radio = () => {
    const [gender, setGender] = useState('Male');
    const onChange = (e) => {
        setGender(e.target.value);
    }
    return(
       <div className="Radio-container">
        <div className="Radio-head">Gender</div>
        <input type="radio" name="gender" id="male" value="Male" 
                checked={gender === 'Male'} onChange={onChange} />
        <label className="radio-label" htmlFor="male">Male</label>

        <input type="radio" name="gender" id="female" value="Female" 
                checked={gender === 'Female'} onChange={onChange} />
       <label className="radio-label" htmlFor="female">Female</label>

       <input type="radio" name="gender" id="other" value="Other"
                checked={gender === 'Other'} onChange={onChange} />
        <label className="radio-label" htmlFor="other">Other</label>
       
       <div className="Radio-content">You Selected {gender}</div>
       </div>
    );
}

export default Radio;