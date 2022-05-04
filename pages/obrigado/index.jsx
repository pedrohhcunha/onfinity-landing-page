import styles from './style.module.scss'
import Button from '../../components/Button'
import Router from 'next/router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMailBulk } from '@fortawesome/free-solid-svg-icons';
import HorizontalCircles from '../../components/HorizontalCircles'
import VerticalCircles from '../../components/VerticalCircles'
import { Head } from 'next/head';

export default function Obrigado() {
  return (
    <main className={styles.main}>
        <Head>
            <title>Onfinity - Obrigado</title>
            <meta name="title" content="Onfinity - Obrigado" />
        </Head>
        <HorizontalCircles top="200px" left="0" />
        <HorizontalCircles top="500px" right="0" />
        <VerticalCircles right="400px" top="0" />
        <VerticalCircles left="400px" bottom="0" />
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