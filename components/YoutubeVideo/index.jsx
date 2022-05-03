import styles from './style.module.scss'

import { useRef } from "react"

import useIntersectionObserver from '@react-hook/intersection-observer'


export default function YoutubeVideo({ url, title, children }) {
    const containerRef = useRef()
    const lockRef = useRef(false)

    const { isIntersecting } = useIntersectionObserver(containerRef)

    if (isIntersecting) {
        lockRef.current = true
    }

    return(
        <div className={styles.container} ref={containerRef}>
            {lockRef.current ?
                <>
                    { children }
                    <iframe
                        className={styles.iframe}
                        title={title}
                        src={url}
                        frameBorder="0"
                        allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen="allowFullScreen"
                    ></iframe>
                </>
            : null}
        </div>
    )
}