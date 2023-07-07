import '../styles/Radio.css';

function Radio({id, name, value, labelChild}) {
    return (
        <>
            <input className="radio-input" type="radio" id={id} name={name} value={value} required/>
            <label className="radio-label" htmlFor={id}>{labelChild}</label>
        </>
    );
    
}

export default Radio;