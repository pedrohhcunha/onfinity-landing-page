import styles from './style.module.scss'

export default function AreaCheckbox({ label, required, options = [] }) {
    return(
        <fieldset className={styles.areaCheckbox}>
            <legend className={styles.label}>{`${label}${required ? '*' : ''}`}</legend>
            <div className={styles.checkboxes}>
                {options.length >= 1 ?
                    options.map(option => (
                        <div onClick={option.onClick} className={`${styles.checkbox} ${option.selected ? styles.selected : ''}`}>
                            {option.name}
                        </div>
                    ))
                : null}
            </div>
        </fieldset>
    )
}