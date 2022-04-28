import styles from './style.module.scss'
import logo from './images/logo.svg'
import Image from 'next/image'

export default function WhatsappButton() {
    return(
        <aside className={styles.whatsappButton}>
            <a href="https://wa.me/5549999999999" target="__blank" rel="noopener noreferrer">
                <Image src={logo} width={62} height={62} />
            </a>
        </aside>
    )
}