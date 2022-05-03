import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import '../styles/globals.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel='canonical' href='https://onfinity.com.br' />
        <title>Onfinity - Suprimentos corporativos</title>
        <meta name="title" content="Onfinity - Suprimentos corporativos" />
        <meta name="description" content="A sua melhor escolha em suprimentos corporativos. Lhe ajudamos a encontrar soluções nas categorias que mais importam: EPI&apos;s, higiene e limpeza, descartáveis, materiais médicos, materiais para escritório e informática, uniformes, embalagens e suprimentos industriais." />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
