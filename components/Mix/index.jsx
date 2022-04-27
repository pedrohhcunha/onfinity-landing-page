import SectionTitle from '../SectionTitle'
import styles from './style.module.scss'
import Button from '../Button'
import arrowLeft from './icons/left.svg'
import arrowRight from './icons/right.svg'
import Image from 'next/image'
import { useRef, useState, useEffect } from 'react'

export default function Mix() {

    const slideRef = useRef(null)

    const [scrollSize, setScrollSize] = useState(0);

    const slideItems = [
        {
            id: 1,
            image: '/images/mix/1.jpg'
        },
        {
            id: 2,
            image: '/images/mix/2.jpg'
        },
        {
            id: 3,
            image: '/images/mix/3.jpg'
        },
        {
            id: 4,
            image: '/images/mix/4.jpg'
        },
        {
            id: 5,
            image: '/images/mix/5.jpg'
        },
        {
            id: 6,
            image: '/images/mix/6.jpg'
        },
        {
            id: 7,
            image: '/images/mix/7.jpg'
        },
        {
            id: 8,
            image: '/images/mix/8.jpg'
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
                                    <div className={styles.areaImage}>
                                        {item.image}
                                    </div>
                                    <Button alternative>Comprar agora</Button>
                                </li>
                            )
                        ): null}
                    </ul>
                </div>
            </div>
        </section>
    )
}