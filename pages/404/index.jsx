import styles from './style.module.scss'
import Header from '../../components/Header'
import Button from '../../components/Button'

export default function ErrorPage() {
    return(
        <main className={styles.main}>
            <Header shadow={false} />

            <div className={styles.container}>
                <h1 className={styles.errorName}>404</h1>
                <h2 className={styles.errorDescription}>Desculpe, está página não foi encontrada!</h2>
                <Button onClick={() => {
                    window.location.href = '/'
                }}>Voltar para a página inicial</Button>
            </div>
        </main>
    )
}