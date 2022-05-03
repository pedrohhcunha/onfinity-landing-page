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
        <meta name="description" content="A sua melhor escolha em suprimentos corporativos. 
        A  Onfinity  possui  um  ecossistema  que  conecta indústrias  a  clientes  finais  e  que  alia  big  data, inteligência artificial e atendimento comercial consultivo. Isso tudo para lhe ajudar a encontrar soluções nas categorias que mais importam: 
        EPI ́s,  higiene  e  limpeza,  descartáveis,  materiais  
        médicos,  materiais  para  escritório  e  informática,  
        uniformes, embalagens e suprimentos industriais
        Fabricamos, importamos e comercializamos
        suprimentos corporativos que garantem custos 
        competitivos, alta produtividade e performance 
        no seu ambiente de trabalho.
        Desde 1991 3 unidades fabris 2 CD's Sul e Sudeste Fabricação, importação e distribuição de suprimentos corporativos." />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
