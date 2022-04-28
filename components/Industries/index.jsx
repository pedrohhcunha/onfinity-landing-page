import styles from './style.module.scss'
import SectionTitle from '../SectionTitle'
import Button from '../Button'
import weikkiImage from  './images/weikki.png'
import Image from 'next/image'
import HorizontalCircles from '../HorizontalCircles'

export default function Industries() {
    return(
        <section className={styles.industries}>
            <SectionTitle alternative>Nossas <strong>Insdústrias</strong></SectionTitle>
            <div className={styles.industry}>
                <HorizontalCircles right="351px" top="20px" />
                <iframe className={styles.iframe} src="https://www.youtube.com/embed/_ryi9ibyG18" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <div className={styles.areaText}>
                    <h3 className={styles.title}>Azeplast</h3>
                    <p className={styles.description}>
                        A Azeplast é uma recicladora e fabricante que junta o melhor da tecnologia com a humanidade. Oferece soluções sustentáveis, seguras e eficientes para processos de embalagem de produtos e descarte de resíduos.
                        <br /> <br />
                        Há mais de 30 anos, desenvolve e comercializa sacos para lixo e embalagens PCR (reciclado pós-consumo).
                    </p>
                    <Button>Compre Azeplast</Button>
                </div>
            </div>
            <div className={styles.industry}>
                <HorizontalCircles left="251px" top="30px" />
                <iframe className={styles.iframe} src="https://www.youtube.com/embed/kiiZvKOqz18" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <div className={styles.areaText}>
                    <h3 className={styles.title}>Septi</h3>
                    <p className={styles.description}>
                        A Septi é uma indústria e importadora de materiais médicos, descartáveis e EPI’s que desenvolve e comercializa soluções inovadoras para procedimentos cirúrgicos, ambulatoriais, assistenciais e de diagnósticos. 
                        <br /> <br />
                        Possui um portfólio completo em paramentação cirúrgica e não cirúrgica, incluindo aventais, máscaras, campos e kits cirúrgicos e uma linha completa em papeis. 
                    </p>
                    <Button>Compre Septi</Button>
                </div>
            </div>
            <div className={styles.industry}>
                <HorizontalCircles right="201px" top="20px" />
                <div className={styles.iframe}>
                    <Image src={weikkiImage} layout="fill"   />
                </div>
                <div className={styles.areaText}>
                    <h3 className={styles.title}>Weikki</h3>
                    <p className={styles.description}>
                        A Weikki é uma indústria de uniformes corporativos, executivos e industriais com mais de 26 anos de mercado. Seus produtos seguem tendências em design, segurança e bem-estar e são ideais para todos os tipos de negócios, desde atendimento ao público até os setores industriais, alimentícios, de saúde e construção civil.
                    </p>
                    <Button>Compre Weikki</Button>
                </div>
            </div>
        </section>
    )
}