import styles from './style.module.scss'
import Image from 'next/image'

export default function AreaIcon({ icon, alt }) {
    return(
        <div className={styles.areaIcon}>
            <Image src={icon} alt={alt ?? "Icone"} />
        </div>
    )
}