import { useEffect } from 'react';
import styles from './style.module.scss'

export default function Snackbar({ active, closeFunction, children}) {

    useEffect(() => {
        if(active) {
            setTimeout(() => {
                closeFunction();
            }, 3000);
        }
    }, [active])
    return(
        <article className={`${styles.snackbar} ${active ? styles.active : ''}`}>
            <p>{children}</p>
        </article>
    )
}