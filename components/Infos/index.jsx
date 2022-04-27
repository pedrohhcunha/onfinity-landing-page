import styles from './style.module.scss'
import icon from './icons/icon1.svg'
import AreaIcon from '../AreaIcon'

export default function Infos() {
    return(
        <ul className={styles.infos}>
            <li className={styles.info}>
                <AreaIcon icon={icon} alt="Icone da informação" />
                <h4 className={styles.title}>Desde 1991</h4>
                <h5 className={styles.subTitle}></h5>
            </li>
            <li className={styles.info}>
                <AreaIcon icon={icon} alt="Icone da informação" />
                <h4 className={styles.title}>Fabricação, importação e distribuição</h4>
                <h5 className={styles.subTitle}></h5>
            </li>
            <li className={styles.info}>
                <AreaIcon icon={icon} alt="Icone da informação" />
                <h4 className={styles.title}>3 unidades fabris</h4>
                <h5 className={styles.subTitle}></h5>
            </li>
            <li className={styles.info}>
                <AreaIcon icon={icon} alt="Icone da informação" />
                <h4 className={styles.title}>2 Centros de distribuição</h4>
                <h5 className={styles.subTitle}>Sul e Sudeste</h5>
            </li>
        </ul>   
    )
}