import styles from './style.module.scss'
import Image from 'next/image'
import placeholder from './images/laptop.webp'
import SectionTitle from '../SectionTitle'

export default function About() {
    return(
        <section id="a-onfinity" className={styles.about}>
            <div className={styles.areaImage}>
                <Image placeholder='blur' alt="Imagem de um escritório com algums materias para suprimentos corporativos como canetas, mouses, teclados e papeis." src={placeholder} layout="fill" objectFit='cover' />
            </div>
            <div className={styles.contentArea}>
                <SectionTitle alternative>A Onfinity</SectionTitle>
                <p className={styles.paragraph}>
                A sua melhor escolha em suprimentos corporativos.
                <br /> <br />
                Nós ajudamos a sua empresa a performar mais fornecendo uma ampla variedade de suprimentos nas categorias que mais importam: uniformes; EPI´s; higiene, limpeza e descartáveis; materiais para escritório e informática; materiais médicos e embalagens.
                </p>
            </div>
        </section>
    )
}