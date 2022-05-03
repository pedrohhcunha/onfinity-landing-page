import styles from './style.module.scss'
import Image from 'next/image'
import SectionTitle from '../SectionTitle'
import placeholder from './images/placeholder.webp'
import HorizontalCircles from '../HorizontalCircles'

export default function Purpose(){
    return (
        <section id="purpose" className={styles.purpose}>
            <div className={styles.contentArea}>
                <SectionTitle>Nosso <strong>propósito</strong></SectionTitle>
                <p className={styles.paragraph}>
                    Trabalhamos incansavelmente todos os dias para entregar o nosso propósito de melhorar a rentabilidade dos nossos clientes.
                </p>
            </div>
            <div className={styles.areaImage}>
                <Image src={placeholder} alt="Pessoa mostrando um gráfico com tendência de alta" layout="fill" objectFit='cover' />
            </div>
            <HorizontalCircles left="0" bottom="246px" />
        </section>
    )
}