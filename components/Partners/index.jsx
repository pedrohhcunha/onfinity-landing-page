import styles from './style.module.scss'
import SectionTitle from '../SectionTitle'
import Image from 'next/image'

import image1 from './images/image1.png'
import image2 from './images/image2.png'
import image3 from './images/image3.png'
import image4 from './images/image4.png'
import VerticalCircles from '../VerticalCircles'

export default function Partners() {

    return (
        <div className={styles.partners}>
            <SectionTitle alternative>Nossos <strong>parceiros</strong></SectionTitle>
            <p className={styles.description}>Somos parceiros e representantes de grandes indústrias para entregar as melhores soluções para as suas necessidades.</p>
            <ul className={styles.list}>
                <li className={styles.item}>
                    <Image src={image1} alt="Logo oficial do parceiro Betannin" className={styles.image} />
                </li>
                <li className={styles.item}>
                    <Image src={image2} alt="Logo oficial do parceiro Lar plásticos" className={styles.image} />
                </li>
                <li className={styles.item}>
                    <Image src={image3} alt="Logo oficial do parceiro MARLUVAS" className={styles.image} />
                </li>
            </ul>
            <VerticalCircles top="95%" left="0" />
        </div>
    )
}