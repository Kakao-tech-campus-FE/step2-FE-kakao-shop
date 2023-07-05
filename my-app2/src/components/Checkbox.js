import '../styles/Checkbox.css';

function Checkbox({id, name, value, labelChild}) {
    return (
        <>
            <input className="checkbox-input" type="checkbox" id={id} name={name}/>
            <label className="checkbox-label">{labelChild}</label>
        </>
    );
    
}

export default Checkbox;