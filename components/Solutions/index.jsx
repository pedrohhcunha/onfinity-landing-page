import styles from './style.module.scss'
import icon1 from './icons/icon1.svg'
import icon2 from './icons/icon2.svg'
import icon3 from './icons/icon3.svg'
import icon4 from './icons/icon4.svg'
import icon5 from './icons/icon5.svg'
import icon7 from './icons/icon7.svg'
import descartaveis from './images/descartaveis.webp'
import epis from './images/epis.webp'
import escritorio from './images/escritorio.webp'
import limpeza from './images/limpeza.webp'
import material from './images/material.webp'
import uniformes from './images/uniformes.png'
import embalagens from './images/embalagens.png'
import AreaIcon from '../AreaIcon'
import Image from 'next/image'
import SectionTitle from '../SectionTitle'
import { useState } from 'react'
import Button from '../Button'
import Link from 'next/link'
import VerticalCircles from '../VerticalCircles'

export default function Solutions() {

    const listItems = [
        {
            icon: icon3,
            title: "Uniformes",
            description: "Camisas  |  Camisetas  |  Polos | Macacões  |  Moletons  |  Calças | Jalecos  | Jaquetas e coletes",
            image: uniformes
        },
        {
            icon: icon1,
            title: "EPI's",
            description: "Capacetes  |  Botas  |  Botinas  |  Cremes para mãos | Cintos de segurança  |  Abafadores  |  Óculos | EPI's para trabalho em altura",
            image: epis
        },
        {
            icon: icon2,
            title: "Higiene, Limpeza e Descartáveis",
            description: "Sacos para lixo | Papéis | Pratos e talheres | Copos Dispensers | Detergentes e saneantes | Limpadores e acessórios | Baldes e cestos | Lixeiras | Potes",
            image: limpeza
        },
        {
            icon: icon7,
            title: "Escritório e informática",
            description: "Papel A4  |  Canetas, lápis e pincéis  |  Autoadesivos | Grampos  |  Cadernos e blocos  |  Colas, fitas e apontadores | Móveis e cadeiras  |  Teclados e mouses",
            image: escritorio
        },
        {
            icon: icon4,
            title: "Materiais médicos",
            description: "Aventais, campos e kits cirúrgicos  |  Luvas, máscaras, toucas e propés  |  Capas para barreiras microbiológicas  |  Panos e Wipers | Seringas, equipos e sondas  |  Fitas crepes, indicadoras e esparadrapos  |  Ataduras, compressas e curativos",
            image: material
        },
        {
            icon: icon5,
            title: "Embalagens",
            description: 'Filmes Termoencolhíveis | Bobinas Sacos plásticos | Filme Stretch | Embalagens para food',
            image: embalagens
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
                            <Link href="#solucoes">
                                <a className={styles.link}>
                                    <AreaIcon icon={item.icon} alt={`Icone ${item.title}`} />
                                    <h4 className={styles.titleIem}>{item.title}</h4>
                                </a>
                            </Link>
                        </li>
                    ))
                : null}
            </ul>
            <VerticalCircles top="95%" left="0" />
        </section>
    )
}