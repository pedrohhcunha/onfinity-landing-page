import styles from './style.module.scss'
import SectionTitle from '../SectionTitle'
import Button from '../Button'

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
                    </div>
                    <h4 className={styles.itemTitle}>Amplo mix de soluções</h4>
                    <p className={styles.itemDescription}>Mix completo em suprimentos corporativos que entregam a competitividade necessária para a sua operação.</p>
                </li>
                <li className={styles.item}>
                    <div className={styles.areaIcon}>
                    </div>
                    <h4 className={styles.itemTitle}>Amplo mix de soluções</h4>
                    <p className={styles.itemDescription}>Mix completo em suprimentos corporativos que entregam a competitividade necessária para a sua operação.</p>
                </li>
                <li className={styles.item}>
                    <div className={styles.areaIcon}>
                    </div>
                    <h4 className={styles.itemTitle}>Amplo mix de soluções</h4>
                    <p className={styles.itemDescription}>Mix completo em suprimentos corporativos que entregam a competitividade necessária para a sua operação.</p>
                </li>
                <li className={styles.item}>
                    <div className={styles.areaIcon}>
                    </div>
                    <h4 className={styles.itemTitle}>Amplo mix de soluções</h4>
                    <p className={styles.itemDescription}>Mix completo em suprimentos corporativos que entregam a competitividade necessária para a sua operação.</p>
                </li>
                <li className={styles.item}>
                    <div className={styles.areaIcon}>
                    </div>
                    <h4 className={styles.itemTitle}>Amplo mix de soluções</h4>
                    <p className={styles.itemDescription}>Mix completo em suprimentos corporativos que entregam a competitividade necessária para a sua operação.</p>
                </li>
            </ul>
            <Button>Fale com um especialista</Button>
        </section>
    )
}