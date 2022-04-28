import styles from './style.module.scss'

export default function AreaInput({ label, name, type =  'text', value, onChange, required, placeholder, error }) {
    return(
        <div className={`${styles.areaInput} ${error ? styles.error : ''}`}>
            <label className={styles.label} htmlFor={name}>{`${label}${required ? '*' : ''}`}</label>
            <input className={styles.input} type={type} id={name} name={name} placeholder={placeholder} value={value} onChange={onChange} />
            {error ? <label htmlFor={name} className={styles.error}>{error}</label> : null}
        </div>
    )
}