import styles from './Checkbox.module.css';

function Checkbox({ className, id, name, checked = false, onChange, children }) {
    return (
        <div className={className}>
            <input 
                className={styles.input} 
                type="checkbox" 
                id={id} 
                name={name} 
                checked={checked}
                onChange={onChange}
            />
            <label className={styles.label} htmlFor={id}>{children}</label>
        </div>
    );
    
}

export default Checkbox;