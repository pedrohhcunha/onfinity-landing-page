import styles from './style.module.scss'
import icon1 from './icons/icon1.svg'
import icon2 from './icons/icon2.svg'
import icon3 from './icons/icon3.svg'
import icon4 from './icons/icon4.svg'
import AreaIcon from '../AreaIcon'

export default function Infos() {
    return(
        <ul className={styles.infos}>
            <li className={styles.info}>
                <AreaIcon icon={icon1} alt="Icone da informação" />
                <h3 className={styles.title}>Desde 1991</h3>
                <h4 className={styles.subTitle}></h4>
            </li>
            <li className={styles.info}>
                <AreaIcon icon={icon2} alt="Icone da informação" />
                <h3 className={styles.title}>Fabricação, importação e distribuição</h3>
                <h4 className={styles.subTitle}></h4>
            </li>
            <li className={styles.info}>
                <AreaIcon icon={icon3} alt="Icone da informação" />
                <h3 className={styles.title}>3 unidades fabris</h3>
                <h4 className={styles.subTitle}></h4>
            </li>
            <li className={styles.info}>
                <AreaIcon icon={icon4} alt="Icone da informação" />
                <h3 className={styles.title}>2 Centros de distribuição</h3>
                <h4 className={styles.subTitle}>Sul e Sudeste</h4>
            </li>
        </ul>   
    )
}