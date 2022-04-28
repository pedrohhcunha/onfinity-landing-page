import styles from './style.module.scss'
import icon1 from './icons/icon1.svg'
import icon2 from './icons/icon2.svg'
import icon3 from './icons/icon3.svg'
import icon4 from './icons/icon4.svg'
import icon5 from './icons/icon5.svg'
import icon6 from './icons/icon6.svg'
import icon7 from './icons/icon7.svg'
import descartaveis from './images/descartaveis.png'
import epis from './images/epis.png'
import escritorio from './images/escritorio.png'
import limpeza from './images/limpeza.png'
import material from './images/material.png'
import suprimento from './images/suprimento.png'
import uniformes from './images/uniformes.png'
import AreaIcon from '../AreaIcon'
import Image from 'next/image'
import SectionTitle from '../SectionTitle'
import { useState } from 'react'
import Button from '../Button'

export default function Solutions() {

    const listItems = [
        {
            icon: icon1,
            title: "Embalagens e descartáveis",
            description: "O Hospital é um espaço de atendimento, cujo objetivo é a prevenção e tratamento de doenças, bem como a promoção de saúde e bem-estar, com o objetivo de ajudar a população a se sentir bem-estar e segurança.",
            image: descartaveis
        },
        {
            icon: icon2,
            title: "Epis",
            description: "O EPIS é um espaço de atendimento, cujo objetivo é a prevenção e tratamento de doenças, bem como a promoção de saúde e bem-estar, com o objetivo de ajudar a população a se sentir bem-estar e segurança.",
            image: epis
        },
        {
            icon: icon3,
            title: "Escritório e informática",
            description: "O Escritório é um espaço de atendimento, cujo objetivo é a prevenção e tratamento de doenças, bem como a promoção de saúde e bem-estar, com o objetivo de ajudar a população a se sentir bem-estar e segurança.",
            image: escritorio
        },
        {
            icon: icon4,
            title: "Higiene e limpeza",
            description: "O Limpeza é um espaço de atendimento, cujo objetivo é a prevenção e tratamento de doenças, bem como a promoção de saúde e bem-estar, com o objetivo de ajudar a população a se sentir bem-estar e segurança.",
            image: limpeza
        },
        {
            icon: icon5,
            title: "Materiais médicos",
            description: "O Material é um espaço de atendimento, cujo objetivo é a prevenção e tratamento de doenças, bem como a promoção de saúde e bem-estar, com o objetivo de ajudar a população a se sentir bem-estar e segurança.",
            image: material
        },
        {
            icon: icon6,
            title: "Suprimentos industriais",
            description: "O Suprimento é um espaço de atendimento, cujo objetivo é a prevenção e tratamento de doenças, bem como a promoção de saúde e bem-estar, com o objetivo de ajudar a população a se sentir bem-estar e segurança.",
            image: suprimento
        },
        {
            icon: icon7,
            title: "Uniformes",
            description: "O Uniformes é um espaço de atendimento, cujo objetivo é a prevenção e tratamento de doenças, bem como a promoção de saúde e bem-estar, com o objetivo de ajudar a população a se sentir bem-estar e segurança.",
            image: uniformes
        }
    ]

    const [itemActive, setItemActive] = useState(null)

    return(
        <section id="solucoes" className={styles.solutions}>
            <div className={styles.areaArticle}>
                <article className={`${styles.firstArticle} ${typeof itemActive === 'number' ? styles.disable : ''}`}>
                    <SectionTitle alternative>Nossas <strong>soluções</strong></SectionTitle>

                    <p className={styles.description}>
                        Possuímos um mix completo de soluções em suprimentos corporativos que facilitam o seu dia a dia.
                    </p>
                </article>
                {listItems.length >= 1 ?
                    listItems.map((item, index) => (
                        <article className={`${styles.article} ${itemActive === index ? styles.active : ''}`} key={index}>
                            <div className={styles.content}>
                                <div className={styles.areaTitle}>
                                    <AreaIcon icon={item.icon} />
                                    <h3 className={styles.title}>{item.title}</h3>
                                </div>
                                <p className={styles.description}>{item.description}</p>
                                <Button>Comprar agora</Button>
                            </div>
                            <div className={styles.areaImage}>
                                <Image src={item.image} alt={item.title} />
                            </div>
                        </article>
                    ))
                : null}
            </div>
            <ul className={styles.list}>
                {listItems.length >= 1 ?
                    listItems.map((item, index) => (
                        <li onClick={() => setItemActive(index)} key={index} className={styles.item}>
                            <AreaIcon icon={item.icon} alt={`Icone ${item.title}`} />
                            <h4 className={styles.titleIem}>{item.title}</h4>
                        </li>
                    ))
                : null}
            </ul>
        </section>
    )
}