import styles from './style.module.scss'
import SectionTitle from '../SectionTitle'
import icon1 from './icons/icon1.svg'
import Image from 'next/image'

export default function Segments() {

    const listItems = [
        {
            title: "Hospitais",
            icon: icon1
        },
        {
            title: "Indústrias",
            icon: icon1
        },
        {
            title: "Agrouindustrias",
            icon: icon1
        },
        {
            title: "Laboratórios",
            icon: icon1
        },
        {
            title: "Facilities",
            icon: icon1
        },
        {
            title: "Food services",
            icon: icon1
        },
        {
            title: "Prestadores de serviços",
            icon: icon1
        },
        {
            title: "Supermercados",
            icon: icon1
        },
        {
            title: "Shopping centers",
            icon: icon1
        },
        {
            title: "Hoteis e resorts",
            icon: icon1
        },
        {
            title: "Contrutoras",
            icon: icon1
        },
        {
            title: "Instituições de ensino",
            icon: icon1
        }
    ]
    return(
        <section className={styles.segments}>
            <SectionTitle alternative>Segmentos <strong>Onfinity</strong></SectionTitle>
            <p className={styles.description}>
                Oferecemos soluções completas em suprimentos corporativos para os mais variados segmentos de mercado. 
            </p>
            <ul className={styles.list}>
                {listItems.length >= 1 ?
                    listItems.map((item, index) => (
                        <li key={index} className={styles.item}>
                            <div className={styles.areaIcon}>
                                <Image src={item.icon} alt=""/>
                            </div>
                            <h4 className={styles.text}>{item.title}</h4>
                        </li>
                    ))
                : null}
            </ul>
        </section>
    )
}