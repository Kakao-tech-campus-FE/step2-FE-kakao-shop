import React , {useState} from 'react';

function Radio(){
    const [nowSelect, setNowSelect] = useState(null);

    const onSelect = (e) => {
        console.log(e.target.name);
        setNowSelect(e.target.value);
    }
    return (
        <div>
            <h1>{nowSelect}</h1>
            <label>
                <input type="radio" onChange={onSelect} name="radioGroup" value='1'/> 1번
            </label>
            <label>
                <input type="radio" onChange={onSelect} name="radioGroup" value='2'/> 2번
            </label>
        </div>
    )
}

export default Radio;

