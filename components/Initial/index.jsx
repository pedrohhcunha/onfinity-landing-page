import styles from './style.module.scss'
import Button from '../Button'
import logo from './images/logo.webp'
import Image from 'next/image'
import HorizontalCircles from '../HorizontalCircles'
import VerticalCircles from '../VerticalCircles'

export default function Initial() {
    return(
        <section id="initial" className={styles.initial}>
            <div className={styles.contentArea}>
                <h1 className={styles.title}>Sua melhor escolha em <strong>Suprimentos Corporativos</strong></h1>
                <p className={styles.subTitle}>
                    Se você sabe exatamente o que precisa ou está procurando os insumos corretos para atingir seus objetivos, a Onfinity está aqui para lhe ajudar.
                </p>
                <div className={styles.buttonsArea}>
                    <Button alternative>Faça seu pedido</Button>
                </div>
            </div>
            <div className={styles.imageArea}>
                <Image src={logo} alt="Releitura do logo oficial da onfinity com um plano de fundo em imagens de suprimentos corporativos" />
            </div>
            <HorizontalCircles right="0" top="228px" />
            <VerticalCircles top="95%" right="0" />
        </section>
    )
}