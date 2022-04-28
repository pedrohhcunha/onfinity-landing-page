import styles from './style.module.scss'

export default function AreaSelect({ label, name, value, onChange, required, placeholder, options }) {
    return(
        <div className={styles.areaSelect}>
            <label className={styles.label} htmlFor={name}>{`${label}${required ? '*' : ''}`}</label>
            <select className={styles.select} id={name} name={name} value={value} onChange={onChange}>
                <option value="" selected disabled>{placeholder}</option>
                {options.length >= 1 ? 
                    options.map(option => (
                        <option key={option.value} value={option.value}>{option.name}</option>
                    ))
                : null}
            </select>
        </div>
    )
}