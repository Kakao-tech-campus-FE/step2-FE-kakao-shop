import styles from './Radio.module.css';

function Radio({id, name, value, labelChild}) {
    return (
        <>
            <input className={styles.radio_input} type="radio" id={id} name={name} value={value} required/>
            <label className={styles.radio_label} htmlFor={id}>{labelChild}</label>
        </>
    );
    
}

export default Radio;