import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import '../styles/globals.css'
import Head from 'next/head'
import { ModalProvider } from "../contexts/modal";
import ContactModal from "../components/ContactModal";

export default function App({ Component, pageProps }) {

  return (
    <ModalProvider>
      <Head>
        <meta charset="UTF-8" />
        <meta name="description" content="A Onfinity é uma solução completa em suprimentos corporativos, fornecendo a sua empresa produtos de higiene e limpeza, epis, uniformes, materias médicos, embalagens, descatáveis e materias de escritório/informática." />
        <meta name="keywords" content="Onfinity, suprimentos, corporativos, soluções, mercado corporativos, suprimento corporativo, suprimentos corporativos office, apis, uniformes, descartáveis, papel, linha de papéis, higiene e limpeza, higiente, limpeza" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Onfinity" />
        <meta name="google-site-verification" content="H8NT1XQ_9J2q3Nh36rGyzJN1vrSwaZ1BeK8cHQc5tkk" />

        <meta property="og:type" content="company" />
        <meta property="og:title" content="Onfinity - Soluções em suprimentos corporativos" />
        <meta property="og:description" content="A Onfinity é uma solução completa em suprimentos corporativos, fornecendo a sua empresa produtos de higiene e limpeza, epis, uniformes, materias médicos, embalagens, descatáveis e materias de escritório/informática." />
        <meta property="og:image" content="https://onfinity.com.br/images/cover.png" />
        <meta property="og:url" content="https://onfinity.com.br" />
        <meta property="og:site_name" content="Onfinity" />
        <meta property="fb:admins" content="Onfinity-101644625222997" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Onfinity - Soluções em suprimentos corporativos" />
        <meta name="twitter:description" content="A Onfinity é uma solução completa em suprimentos corporativos, fornecendo a sua empresa produtos de higiene e limpeza, epis, uniformes, materias médicos, embalagens, descatáveis e materias de escritório/informática." />
        <meta name="twitter:image" content="https://onfinity.com.br/images/cover.png" />
        <meta name="twitter:url" content="https://onfinity.com.br" />

        <link rel='canonical' href='https://onfinity.com.br' />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet" />
     
      </Head>
      <Component {...pageProps} />
      <ContactModal />
      <script dangerouslySetInnerHTML={{__html: `
        (function(h,o,t,j,a,r){
          h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
          h._hjSettings={hjid:2952891,hjsv:6};
          a=o.getElementsByTagName('head')[0];
          r=o.createElement('script');r.async=1;
          r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
          a.appendChild(r);
        })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
      `}}></script>
    </ModalProvider>
  )
}