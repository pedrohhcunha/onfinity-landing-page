import styles from './style.module.scss'

export default function AreaCheckbox({ label, required, options = [] }) {
    return(
        <fieldset className={styles.areaCheckbox}>
            <legend className={styles.label}>{`${label}${required ? '*' : ''}`}</legend>
            <div className={styles.checkboxes}>
                {options.length >= 1 ?
                    options.map(option => (
                        <div className={styles.checkbox}>
                            <label htmlFor={option.label} key={option.label} className={`${styles.labelCheck} ${option.checked ? styles.checked : ''}`}>{option.name}</label>
                            <input
                                type="checkbox"
                                name={option.label}
                                id={option.label}
                                className={styles.input}
                            />
                        </div>
                    ))
                : null}
            </div>
        </fieldset>
    )
}