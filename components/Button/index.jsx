import styles from './style.module.scss'

export default function Button({ children, onCLick, alternative, type = 'button' }) {
    return(
        <button
            type={type}
            className={`${styles.button} ${alternative ? styles.alternative : ''}`}
            onClick={onCLick}
        >
            { children }
        </button>
    )
}