import SectionTitle from '../SectionTitle'
import styles from './style.module.scss'
import Button from '../Button'
import arrowLeft from './icons/left.svg'
import arrowRight from './icons/right.svg'
import Image from 'next/image'
import { useRef, useState, useEffect } from 'react'
import image1 from './images/1.png'
import image2 from './images/2.png'
import image3 from './images/3.png'
import image4 from './images/4.png'
import image5 from './images/5.png'
import image6 from './images/6.png'
import image7 from './images/7.png'
import image8 from './images/8.png'
import HorizontalCircles from '../HorizontalCircles'
import VerticalCircles from '../VerticalCircles'

export default function Mix() {

    const slideRef = useRef(null)

    const [scrollSize, setScrollSize] = useState(0);

    const slideItems = [
        {
            id: 1,
            image: image1
        },
        {
            id: 2,
            image: image2
        },
        {
            id: 3,
            image: image3
        },
        {
            id: 4,
            image: image4
        },
        {
            id: 5,
            image: image5
        },
        {
            id: 6,
            image: image6
        },
        {
            id: 7,
            image: image7
        },
        {
            id: 8,
            image: image8
        }
    ]

    const [initialShowedCard, setInitialShowedCard] = useState(0);

    const [scrollDirectionAuto, setScrollDirectionAuto] = useState('next');

    const [autoCount, setAutoCount] = useState(0);

    let scrollSlide = async (direction) => {
        let firstChildren = slideRef.current.children[0];
        let secondChildren = slideRef.current.children[1];
        let pixelBetweenChildrens = secondChildren.getBoundingClientRect().left - firstChildren.getBoundingClientRect().left;
        if(direction === 'prev'){
            setScrollSize(scrollSize + pixelBetweenChildrens);
            setInitialShowedCard(initialShowedCard - 1);

        } else if(direction === 'next') {
            setScrollSize(scrollSize - pixelBetweenChildrens);
            setInitialShowedCard(initialShowedCard + 1);
        }
    }

    useEffect(() => {

        setTimeout(() => {
            console.log("Delayed for 1 second.")
            if(initialShowedCard <= 3 && scrollDirectionAuto === 'next'){
                scrollSlide('next')
            } else if(initialShowedCard === 4 && scrollDirectionAuto === 'next'){
                scrollSlide('prev')
                setScrollDirectionAuto('prev')
            } else if(initialShowedCard !== 0 && scrollDirectionAuto === 'prev'){
                scrollSlide('prev')
            } else if(initialShowedCard === 0 && scrollDirectionAuto === 'prev'){
                scrollSlide('next')
                setScrollDirectionAuto('next')
            }
            setAutoCount(autoCount + 1)
        }, 3000)

    }, [autoCount])

    return(
        <section id="mix" className={styles.mix}> 
            <SectionTitle>Um mix <strong>completo</strong></SectionTitle>

            <div className={styles.listArea}>
                {initialShowedCard !== 0 ?
                    <button onClick={() => scrollSlide('prev')} className={`${styles.arrow} ${styles.left}`}>
                        <Image src={arrowLeft} alt="arrow left"/>
                    </button>
                : null}
                {initialShowedCard <= 3 ?
                    <button onClick={() => scrollSlide('next')} className={`${styles.arrow} ${styles.right}`}>
                        <Image src={arrowRight} alt="arrow right"/>
                    </button>
                : null}
                <div className={styles.wrapper}>
                    <ul style={{transform: `translateX(${scrollSize}px)`}} ref={slideRef} className={styles.list}>
                        {slideItems.length >= 1 ?
                            slideItems.map(item => (
                                <li key={item.id} className={styles.item}>
                                    <HorizontalCircles left="27%" top="-25px" />
                                    <div className={styles.areaImage}>
                                        <Image src={item.image} alt="mix" layout='fill' />
                                    </div>
                                    <Button alternative>Comprar agora</Button>
                                </li>
                            )
                        ): null}
                    </ul>
                </div>
            </div>
            <VerticalCircles top="95%" right="0" />
        </section>
    )
}