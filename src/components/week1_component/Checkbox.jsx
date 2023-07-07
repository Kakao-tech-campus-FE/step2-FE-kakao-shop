import '../../styles/Checkbox.css';

function Checkbox({id, name, value, labelChild}) {
    return (
        <>
            <input className="checkbox-input" type="checkbox" id={id} name={name} value={value} />
            <label className="checkbox-label" htmlFor={id}>{labelChild}</label>
        </>
    );
    
}

export default Checkbox;