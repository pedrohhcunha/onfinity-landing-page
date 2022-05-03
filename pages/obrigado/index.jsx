import styles from './style.module.scss'
import Button from '../../components/Button'
import Router from 'next/router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMailBulk } from '@fortawesome/free-solid-svg-icons';

export default function Obrigado() {
  return (
    <main className={styles.main}>
        <div className={styles.content}>
            <FontAwesomeIcon icon={faMailBulk} className={styles.icon} />
            <h1 className={styles.title}>Obrigado!</h1>
            <p className={styles.description}>
                Agradacemos pelo seu contato, <br /> logo entraremos em contato com você.
            </p>
            <Button onClick={() => {
                Router.push('/')
            }}>Voltar para o site</Button>
        </div>
    </main>
  );
}