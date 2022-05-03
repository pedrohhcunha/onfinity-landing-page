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
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
