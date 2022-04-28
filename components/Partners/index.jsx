import styles from './style.module.scss'
import SectionTitle from '../SectionTitle'
import Image from 'next/image'

import image1 from './images/image1.svg'
import image2 from './images/image2.svg'
import image3 from './images/image3.svg'

export default function Clients() {

    return (
        <div className={styles.partners}>
            <SectionTitle alternative>Nossos <strong>parceiros</strong></SectionTitle>
            <p className={styles.description}>Somos parceiros e representantes de grandes indústrias para entregar as melhores soluções para cada uma das suas necessidades.</p>
            <ul className={styles.list}>
                <li className={styles.item}>
                    <Image src={image1} alt="" className={styles.image} />
                </li>
                <li className={styles.item}>
                    <Image src={image2} alt="" className={styles.image} />
                </li>
                <li className={styles.item}>
                    <Image src={image3} alt="" className={styles.image} />
                </li>
            </ul>
        </div>
    )
}