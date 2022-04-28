import styles from './style.module.scss'

export default function AreaInput({ label, name, type =  'text', value, onChange, required, placeholder }) {
    return(
        <div className={styles.areaInput}>
            <label className={styles.label} htmlFor={name}>{`${label}${required ? '*' : ''}`}</label>
            <input className={styles.input} type={type} id={name} name={name} placeholder={placeholder} value={value} onChange={onChange} />
        </div>
    )
}