import styles from './style.module.scss'
import Image from 'next/image'
import placeholder from './images/placeholder.webp'

export default function About() {
    return(
        <div className={styles.about}>
            <div className={styles.areaImage}>
                <Image src={placeholder} layout="fill" />
            </div>
            <div className={styles.contentArea}>
                <h2 className={styles.title}>A Onfinity</h2>
                <p className={styles.paragraph}>
                    Possuímos um ecossistema que conecta indústrias a clientes finais e que alia big data, inteligência artificial e atendimento comercial consultivo. 
                    <br /> <br />
                    Isso tudo para lhe ajudar a encontrar soluções nas categorias  que  mais  importam:  EPIs,  higiene  e limpeza, descartáveis, materiais médicos, materiais para escritório, uniformes,  embalagens e suprimentos industriais..
                    <br /> <br />
                    Fabricamos, importamos e comercializamos suprimentos corporativos que garantem custos competitivos, alta produtividade e performance no seu ambiente de trabalho.
                </p>
            </div>
        </div>
    )
}