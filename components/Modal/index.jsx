import styles from './styles.module.scss'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from 'react';

export default function Modal({ children, isActive, closeModal, title }){

    const [modalHover, setModalHover] = useState(false);

    useEffect(() => {
        window.addEventListener('keydown', event => {
          if(event.key === "Escape"){
            closeModal();
          }
        })
    }, []);

    return (
        <aside className={`${styles.areaModal} ${isActive ? styles.active : ''}`} onClick={() => !modalHover ? closeModal() : null}>
            <div className={styles.modal} onMouseEnter={() => setModalHover(true)} onMouseLeave={() => setModalHover(false)}>
                <div className={styles.topArea}>
                    <h2 className={styles.title}>{title}</h2>
                    <FontAwesomeIcon onClick={closeModal} icon={faTimes} className={styles.icon} />
                </div>
                <div className={styles.utilArea}>
                    { children }
                </div>
            </div>
        </aside>
    )
}