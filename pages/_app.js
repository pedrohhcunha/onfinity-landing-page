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
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
