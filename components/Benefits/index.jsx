import styles from './style.module.scss'
import SectionTitle from '../SectionTitle'
import Button from '../Button'
import icon1 from './images/icon1.svg'
import icon2 from './images/icon2.svg'
import icon3 from './images/icon3.svg'
import icon4 from './images/icon4.svg'
import icon5 from './images/icon5.svg'
import Image from 'next/image'
import AreaIcon from '../AreaIcon'

export default function Benefits(){
    return(
        <section className={styles.benefits}>
            <SectionTitle alternative>Nossos <strong>diferenciais</strong></SectionTitle>
            <p className={styles.description}>
                Possuímos um alto know-how técnico e consultivo que oferece mais agilidade com a melhor
                relação custo-benefício do mercado.
            </p>
            <ul className={styles.list}>
                <li className={styles.item}>
                    <AreaIcon icon={icon1} alt="Ícone" />
                    <h4 className={styles.itemTitle}>Amplo mix de soluções</h4>
                    <p className={styles.itemDescription}>Mix completo em suprimentos corporativos que entregam a competitividade necessária para a sua operação.</p>
                </li>
                <li className={styles.item}>
                    <AreaIcon icon={icon2} alt="Ícone" />
                    <h4 className={styles.itemTitle}>+ Agilidade</h4>
                    <p className={styles.itemDescription}> Dois centros de distribuição que garantem uma entrega segura no tempo necessário para o seu negócio performar.</p>
                </li>
                <li className={styles.item}>
                    <AreaIcon icon={icon3} alt="Ícone" />
                    <h4 className={styles.itemTitle}>Preço de fábrica</h4>
                    <p className={styles.itemDescription}>Condições que facilitam a compra através da política de preços de fábrica, importador ou distribuidor.</p>
                </li>
                <li className={styles.item}>
                    <AreaIcon icon={icon4} alt="Ícone" />
                    <h4 className={styles.itemTitle}>Engenharia tributária</h4>
                    <p className={styles.itemDescription}>Oferecemos uma consultoria gratuita que permite identificar a estratégia de compra que oferece os melhores benefícios fiscais e atende a sua necessidade. </p>
                </li>
                <li className={styles.item}>
                    <AreaIcon icon={icon5} alt="Ícone" />
                    <h4 className={styles.itemTitle}>Produtos ESG</h4>
                    <p className={styles.itemDescription}>Produtos feitos a partir de matérias-primas recicladas que entregam performance, contribuem para a cadeia sustentável e são adequados às metas de ESG.</p>
                </li>
            </ul>
            <Button>Fale com um especialista</Button>
        </section>
    )
}