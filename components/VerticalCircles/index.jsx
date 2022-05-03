import styles from './style.module.scss'
import circles from './images/circles.svg'
import Image from 'next/image'

export default function VerticalCircles({ top, left, right, bottom }) {
    return(
        <aside className={styles.circles} style={{
            position: 'absolute',
            zIndex: '1000',
            top: top,
            left: left,
            right: right,
            bottom: bottom
        }}>
            <Image alt="Grafismo formado por um conjunto de circulos." src={circles} />
        </aside>
    )
}