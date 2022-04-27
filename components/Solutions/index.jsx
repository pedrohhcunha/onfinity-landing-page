import styles from './style.module.scss'
import icon1 from './images/icon1.svg'
import icon2 from './images/icon2.svg'
import icon3 from './images/icon3.svg'
import icon4 from './images/icon4.svg'
import icon5 from './images/icon5.svg'
import icon6 from './images/icon6.svg'
import icon7 from './images/icon7.svg'
import Image from 'next/image'
import SectionTitle from '../SectionTitle'

export default function Solutions() {
    return(
        <section id="solucoes" className={styles.solutions}>
            <article className={styles.contentArea}>
                <SectionTitle alternative>Nossas <strong>soluções</strong></SectionTitle>

                <p className={styles.description}>
                    Possuímos um mix completo de soluções em suprimentos corporativos que facilitam o seu dia a dia.
                </p>
            </article>
            <ul className={styles.list}>
                <li className={styles.item}>
                    <div className={styles.areaIcon}>
                        <Image className={styles.icon} src={icon1} alt="Icon" />
                    </div>
                    <h4 className={styles.titleIem}>Epis</h4>
                </li>
                <li className={styles.item}>
                    <div className={styles.areaIcon}>
                        <Image className={styles.icon} src={icon2} alt="Icon" />
                    </div>
                    <h4 className={styles.titleIem}>Higiene e limpeza</h4>
                </li>
                <li className={styles.item}>
                    <div className={styles.areaIcon}>
                        <Image className={styles.icon} src={icon3} alt="Icon" />
                    </div>
                    <h4 className={styles.titleIem}>Uniformes</h4>
                </li>
                <li className={styles.item}>
                    <div className={styles.areaIcon}>
                        <Image className={styles.icon} src={icon4} alt="Icon" />
                    </div>
                    <h4 className={styles.titleIem}>Materiais médicos</h4>
                </li>
                <li className={styles.item}>
                    <div className={styles.areaIcon}>
                        <Image className={styles.icon} src={icon5} alt="Icon" />
                    </div>
                    <h4 className={styles.titleIem}>Embalagens e descartáveis</h4>
                </li>
                <li className={styles.item}>
                    <div className={styles.areaIcon}>
                        <Image className={styles.icon} src={icon6} alt="Icon" />
                    </div>
                    <h4 className={styles.titleIem}>Suprimentos industriais</h4>
                </li>
                <li className={styles.item}>
                    <div className={styles.areaIcon}>
                        <Image className={styles.icon} src={icon7} alt="Icon" />
                    </div>
                    <h4 className={styles.titleIem}>Escritório e informática</h4>
                </li>
            </ul>
        </section>
    )
}