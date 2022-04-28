import styles from './style.module.scss'
import SectionTitle from '../SectionTitle'
import iconHospital from './icons/hospital.svg'
import iconIndustrias from './icons/industries.svg'
import iconAgro from './icons/agro.svg'
import iconLab from './icons/laboratorios.svg'
import iconFacilities from './icons/facilities.png'
import iconFood from './icons/food.svg'
import iconPrestadoras from './icons/supermercado.svg'
import iconShopping from './icons/shopping.png'
import iconHoteis from './icons/hoteis.svg'
import iconConstrutoras from './icons/construtoras.svg'
import iconEnsino from './icons/instituicoes.svg'
import iconSupermercado from './icons/supermercado.svg'

import AreaIcon from '../AreaIcon'

export default function Segments() {

    const listItems = [
        {
            title: "Hospitais",
            icon: iconHospital
        },
        {
            title: "Indústrias",
            icon: iconIndustrias
        },
        {
            title: "Agrouindustrias",
            icon: iconAgro
        },
        {
            title: "Laboratórios",
            icon: iconLab
        },
        {
            title: "Facilities",
            icon: iconFacilities
        },
        {
            title: "Food services",
            icon: iconFood
        },
        {
            title: "Prestadores de serviços",
            icon: iconPrestadoras
        },
        {
            title: "Supermercados",
            icon: iconSupermercado
        },
        {
            title: "Shopping centers",
            icon: iconShopping
        },
        {
            title: "Hoteis e resorts",
            icon: iconHoteis
        },
        {
            title: "Contrutoras",
            icon: iconConstrutoras
        },
        {
            title: "Instituições de ensino",
            icon: iconEnsino
        }
    ]
    
    return(
        <section id="segmentos" className={styles.segments}>
            <SectionTitle alternative>Segmentos <strong>Onfinity</strong></SectionTitle>
            <p className={styles.description}>
                Oferecemos soluções completas em suprimentos corporativos para os mais variados segmentos de mercado. 
            </p>
            <ul className={styles.list}>
                {listItems.length >= 1 ?
                    listItems.map((item, index) => (
                        <li key={index} className={styles.item}>
                            <AreaIcon icon={item.icon} alt={`Icon ${item.title}`} />
                            <h4 className={styles.text}>{item.title}</h4>
                        </li>
                    ))
                : null}
            </ul>
        </section>
    )
}