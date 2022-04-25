import styles from './style.module.scss'

export default function Button({ children, onCLick, alternative }) {
    return(
        <button
            className={`${styles.button} ${alternative ? styles.alternative : ''}`}
            onClick={onCLick}
        >
            { children }
        </button>
    )
}