import styles from './style.module.scss'
import logo from './images/logo.svg'
import Image from 'next/image'

export default function Header() {
    return(
        <header className={styles.header}>
            <Image src={logo} alt="logo" className={styles.logo}/>
            <nav className={styles.nav}>
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <a href="#" className={styles.link}>A Onfinity</a>
                    </li>
                    <li className={styles.item}>
                        <a href="#" className={styles.link}>Soluções</a>
                    </li>
                    <li className={styles.item}>
                        <a href="#" className={styles.link}>Segmentos</a>
                    </li>
                    <li className={styles.item}>
                        <a href="#" className={styles.link}>Catálogos</a>
                    </li>
                    <li className={styles.item}>
                        <a href="#" className={styles.link}>Trabalhe conosco</a>
                    </li>
                </ul>
                <button className={styles.button}>Comprar agora</button>
            </nav>
        </header>
    )
}