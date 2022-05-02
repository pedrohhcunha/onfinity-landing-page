import styles from './style.module.scss'
import logo from './images/logo.svg'
import Image from 'next/image'
import Button from '../Button'
import Link from 'next/link'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

export default function Header() {

    const [sideMenuActive, setSideMenuActive] = useState(false);

    return(
        <header className={styles.header}>
            <Link href="/">
                <a className={styles.areaLogo}>
                    <Image src={logo} alt="Logo" className={styles.logo} />
                </a>
            </Link>
            <nav className={`${styles.nav} ${sideMenuActive ? styles.active : ''}`}>
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <a href="/#a-onfinity" className={styles.link}>A Onfinity</a>
                    </li>
                    <li className={styles.item}>
                        <a href="/#solucoes" className={styles.link}>Soluções</a>
                    </li>
                    <li className={styles.item}>
                        <a href="/#segmentos" className={styles.link}>Segmentos</a>
                    </li>
                    <li className={styles.item}>
                        <Link href="/trabalhe-conosco">
                            <a className={styles.link}>Trabalhe conosco</a>
                        </Link>
                    </li>
                </ul>
                <div className={styles.areaButton}>
                    <Button>Comprar agora</Button>
                </div>
            </nav>
            <FontAwesomeIcon onClick={() => setSideMenuActive(!sideMenuActive)} icon={faBars} className={styles.icon} />
        </header>
    )
}