import styles from './style.module.scss'
import SectionTitle from '../SectionTitle'
import Button from '../Button'
import icon1 from './images/icon1.svg'
import icon2 from './images/icon2.svg'
import icon3 from './images/icon3.svg'
import icon4 from './images/icon4.svg'
import icon5 from './images/icon5.svg'
import Image from 'next/image'

export default function Benefits(){
    return(
        <section className={styles.benefits}>
            <SectionTitle alternative>Nossos <strong>diferenciais</strong></SectionTitle>
            <p className={styles.description}>
                Possuímos um alto know-how técnico e consultivo que oferece mais agilidade com a melhor
                relação custo-benefício do mercado.
            </p>
            <ul className={styles.list}>
                <li className={styles.item}>
                    <div className={styles.areaIcon}>
                        <Image src={icon1} alt="Ícone" />
                    </div>
                    <h4 className={styles.itemTitle}>Amplo mix de soluções</h4>
                    <p className={styles.itemDescription}>Mix completo em suprimentos corporativos que entregam a competitividade necessária para a sua operação.</p>
                </li>
                <li className={styles.item}>
                    <div className={styles.areaIcon}>
                        <Image src={icon2} alt="Ícone" />
                    </div>
                    <h4 className={styles.itemTitle}>Amplo mix de soluções</h4>
                    <p className={styles.itemDescription}>Mix completo em suprimentos corporativos que entregam a competitividade necessária para a sua operação.</p>
                </li>
                <li className={styles.item}>
                    <div className={styles.areaIcon}>
                        <Image src={icon3} alt="Ícone" />
                    </div>
                    <h4 className={styles.itemTitle}>Amplo mix de soluções</h4>
                    <p className={styles.itemDescription}>Mix completo em suprimentos corporativos que entregam a competitividade necessária para a sua operação.</p>
                </li>
                <li className={styles.item}>
                    <div className={styles.areaIcon}>
                        <Image src={icon4} alt="Ícone" />
                    </div>
                    <h4 className={styles.itemTitle}>Amplo mix de soluções</h4>
                    <p className={styles.itemDescription}>Mix completo em suprimentos corporativos que entregam a competitividade necessária para a sua operação.</p>
                </li>
                <li className={styles.item}>
                    <div className={styles.areaIcon}>
                        <Image src={icon5} alt="Ícone" />
                    </div>
                    <h4 className={styles.itemTitle}>Amplo mix de soluções</h4>
                    <p className={styles.itemDescription}>Mix completo em suprimentos corporativos que entregam a competitividade necessária para a sua operação.</p>
                </li>
            </ul>
            <Button>Fale com um especialista</Button>
        </section>
    )
}