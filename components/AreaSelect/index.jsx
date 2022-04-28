import styles from './style.module.scss'

export default function AreaSelect({ label, name, value, onChange, required, placeholder, options, error }) {
    return(
        <div className={`${styles.areaSelect} ${error ? styles.error : ''}`}>
            <label className={styles.label} htmlFor={name}>{`${label}${required ? '*' : ''}`}</label>
            <select className={styles.select} id={name} name={name} value={value} onChange={onChange}>
                <option value="" selected disabled>{placeholder}</option>
                {options.length >= 1 ? 
                    options.map(option => (
                        <option key={option.value} value={option.value}>{option.name}</option>
                    ))
                : null}
            </select>
            {error ? <label htmlFor={name} className={styles.error}>{error}</label> : null}
        </div>
    )
}