import styles from './style.module.scss'
import SectionTitle from '../SectionTitle'
import background from './images/background.png'

export default function Final() {
    return(
        <section className={styles.final}>
            <SectionTitle alternative>Faça seu pedido</SectionTitle>
            <p className={styles.description}>
                Preencha o formulário para falar com nossos especialistas. 
            </p>
            <div className={styles.areaForm}>

            </div>
        </section>
    )
}