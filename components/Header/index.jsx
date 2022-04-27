import styles from './style.module.scss'
import logo from './images/logo.svg'
import Image from 'next/image'
import Button from '../Button'

export default function Header() {
    return(
        <header className={styles.header}>
            <Image src={logo} alt="Logo oficial da Onfinity" className={styles.logo}/>
            <nav className={styles.nav}>
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <a href="#a-onfinity" className={styles.link}>A Onfinity</a>
                    </li>
                    <li className={styles.item}>
                        <a href="#solucoes" className={styles.link}>Soluções</a>
                    </li>
                    <li className={styles.item}>
                        <a href="#segmentos" className={styles.link}>Segmentos</a>
                    </li>
                    <li className={styles.item}>
                        <a href="#catalogos" className={styles.link}>Catálogos</a>
                    </li>
                    <li className={styles.item}>
                        <a href="#trabalhe-consco" className={styles.link}>Trabalhe conosco</a>
                    </li>
                </ul>
                <Button>Comprar agora</Button>
            </nav>
        </header>
    )
}