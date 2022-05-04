import styles from './style.module.scss'
import { useContext } from 'react'
import { modalContext } from '../../contexts/modal'

export default function Button({ children, onClick, alternative, type = 'button' }) {

    const { openModal } = useContext(modalContext)

    return(
        <button
            type={type}
            className={`${styles.button} ${alternative ? styles.alternative : ''}`}
            onClick={typeof onClick !== 'function' || type !== 'submit' ? openModal : onClick}
        >
            { children }
        </button>
    )
}