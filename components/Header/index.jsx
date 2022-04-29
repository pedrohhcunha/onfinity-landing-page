import styles from './style.module.scss'
import logo from './images/logo.svg'
import Image from 'next/image'
import Button from '../Button'
import Link from 'next/link'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faBurger } from '@fortawesome/free-solid-svg-icons'

export default function Header() {
    return(
        <header className={styles.header}>
            <Link href="/">
                <a className={styles.areaLogo}>
                    <Image src={logo} alt="Logo" className={styles.logo} />
                </a>
            </Link>
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
                <div className={styles.areaButton}>
                    <Button>Comprar agora</Button>
                </div>
            </nav>
            <FontAwesomeIcon icon={faBars} className={styles.icon} />
        </header>
    )
}