import styles from './style.module.scss'
import SectionTitle from '../SectionTitle'
import Image from 'next/image'

import albert from './images/albert.png'
import amanco from './images/amanco.png'
import atacadao from './images/atacadao.png'
import aurora from './images/aurora.png'
import bp from './images/bp.png'
import brf from './images/brf.png'
import britania from './images/britania.png'
import cemil from './images/cemil.png'
import elis from './images/elis.png'
import gru from './images/gru.png'
import marfrig from './images/marfrig.png'
import peccin from './images/peccin.png'
import prevent from './images/prevent.png'
import saoJoao from './images/saoJoao.png'
import unimed from './images/unimed.png'
import dp from './images/dp.png'

export default function Clients() {
    const listItems = [
        {
            name: "Albert",
            image: albert
        },
        {
            name: "Amanco",
            image: amanco
        },
        {
            name: "Atacadao",
            image: atacadao
        },
        {
            name: "Aurora",
            image: aurora
        },
        {
            name: "BP",
            image: bp
        },
        {
            name: "BRF",
            image: brf
        },
        {
            name: "Britania",
            image: britania
        },
        {
            name: "Cemil",
            image: cemil
        },
        {
            name: "Elis",
            image: elis
        },
        {
            name: "Gru",
            image: gru
        },
        {
            name: "Marfrig",
            image: marfrig
        },
        {
            name: "Peccin",
            image: peccin
        },
        {
            name: "Prevent",
            image: prevent
        },
        {
            name: "São João",
            image: saoJoao
        },
        {
            name: "Unimed",
            image: unimed
        },
        {
            name: "Divina previdência",
            image: dp
        }
    ]

    return (
        <div className={styles.clients}>
            <SectionTitle alternative>Clientes <strong>que confiam</strong> na gente</SectionTitle>
            <p className={styles.description}>São mais de 2000 empresas que confiam no trabalho da Onfinity </p>
            <ul className={styles.list}>
                {listItems.map((item, index) => (
                    <li className={styles.item} key={index}>
                        <Image src={item.image} alt={`Logo oficial do cliente ${item.name}`} className={styles.image} />
                    </li>
                ))}
            </ul>
        </div>
    )
}