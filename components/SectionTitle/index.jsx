import styles from './style.module.scss'

export default function SectionTitle({ children, alternative}) {
    return(
        <h2 className={`${styles.title} ${alternative ? styles.alternative : ''} `}>
            { children }
        </h2>
    )
}