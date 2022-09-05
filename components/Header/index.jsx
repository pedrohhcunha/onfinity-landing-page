import styles from './style.module.scss'
import logo from './images/logo.svg'
import Image from 'next/image'
import Button from '../Button'
import Link from 'next/link'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

export default function Header({ shadow = true }) {

    const [sideMenuActive, setSideMenuActive] = useState(false);

    function openEcommerce() {
        window.location.href = 'https://centerpapeis.meuspedidos.com.br/entrar'
    }

    return(
        <header className={`${styles.header} ${shadow === true ? styles.withShadow : ''}`}>
            <Link href="/">
                <a aria-label='Logotipo oficial da Onfinity' className={styles.areaLogo}>
                    <Image src={logo} alt="Logotipo oficial da Onfinity" className={styles.logo} />
                </a>
            </Link>
            <nav className={`${styles.nav} ${sideMenuActive ? styles.active : ''}`}>
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <Link href="/#a-onfinity">
                            <a className={styles.link}>A Onfinity</a>
                        </Link>
                    </li>
                    <li className={styles.item}>
                        <Link href="/#solucoes">
                            <a className={styles.link}>Soluções</a>
                        </Link>
                    </li>
                    <li className={styles.item}>
                        <Link href="/#segmentos">
                            <a className={styles.link}>Segmentos</a>
                        </Link>
                    </li>
                    <li className={styles.item}>
                        <Link href="/trabalhe-conosco">
                            <a className={styles.link}>Trabalhe conosco</a>
                        </Link>
                    </li>
                </ul>
                <div className={styles.areaButton}>
                    <Button
                        type="submit"
                        onClick={openEcommerce}
                    >Ecommerce B2B</Button>
                </div>
            </nav>
            <FontAwesomeIcon onClick={() => setSideMenuActive(!sideMenuActive)} icon={faBars} className={styles.icon} />
        </header>
    )
}