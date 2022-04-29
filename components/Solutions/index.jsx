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
import VerticalCircles from '../VerticalCircles'

export default function Solutions() {

    const listItems = [
        {
            icon: icon1,
            title: "EPI's",
            description: "Capacetes  |  Botas  |  Botinas  |  Cremes para mãos | Cintos de segurança  |  Abafadores  |  Óculos | EPI's para trabalho em altura",
            image: epis
        },
        {
            icon: icon2,
            title: "Higiene e limpeza",
            description: "Sacos para lixo  |  Detergentes e saneantes  |  Caixas coletoras  Vassouras, rodos e mops  |  Limpadores e acessórios | Lixeiras  |  Panos e fibras  |  Baldes e cestos",
            image: limpeza
        },
        {
            icon: icon3,
            title: "Uniformes",
            description: "Camisas  |  Camisetas  |  Polos | Macacões  |  Moletons  |  Calças | Jalecos  | Jaquetas e coletes",
            image: uniformes
        },
        {
            icon: icon4,
            title: "Materiais médicos",
            description: "Aventais, campos e kits cirúrgicos  |  Luvas, máscaras, toucas e propés  |  Capas para barreiras microbiológicas  |  Panos e Wipers | Seringas, equipos e sondas  |  Fitas crepes, indicadoras e esparadrapos  |  Ataduras, compressas e curativos",
            image: material
        },
        {
            icon: icon5,
            title: "Embalagens e descartáveis",
            description: "Filmes Termoencolhiveis  |  Bobinas   |  Sacos plásticos | Embalagens para esterilização  |  Copos | Pratos e talheres  |  Potes   |  Papéis  |  Dispensers",
            image: descartaveis
        },
        {
            icon: icon6,
            title: "Suprimentos industriais",
            description: "Soldas e abrasivos  |  Ferramentas manuais  |  Ferramentas elétricas | Ferramentas a bateria  |  Parafusos e fixadores  |  Máquinas e equipamentos  |  Acessórios em geral  |  Equipamentos hidráulicos",
            image: suprimento
        },
        {
            icon: icon7,
            title: "Escritório e informática",
            description: "Papel A4  |  Canetas, lápis e pincéis  |  Autoadesivos | Grampos  |  Cadernos e blocos  |  Colas, fitas e apontadores Móveis e cadeiras  |  Teclados e mouses",
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
                <VerticalCircles right="0" top="0" />
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
            <VerticalCircles top="95%" left="0" />
        </section>
    )
}