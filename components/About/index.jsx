import styles from './style.module.scss'
import Image from 'next/image'
import placeholder from './images/laptop.webp'
import SectionTitle from '../SectionTitle'

export default function About() {
    return(
        <section id="a-onfinity" className={styles.about}>
            <div className={styles.areaImage}>
                <iframe
                    className={styles.video}
                    src="https://www.youtube.com/embed/mog6NxjAFSQ"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen 
                ></iframe>
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