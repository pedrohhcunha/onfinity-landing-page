import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import '../styles/globals.css'
import Head from 'next/head'
import Modal from '../components/Modal'
import { useState } from "react";
import ContactForm from '../components/ContactForm'

function MyApp({ Component, pageProps }) {
  const [contactModal, setContactModal] = useState(true);
  
  return (
    <>
      <Head>
        <link rel='canonical' href='https://onfinity.com.br' />
        <title>Onfinity - Suprimentos corporativos</title>
        <meta name="title" content="Onfinity - Suprimentos corporativos" />
        <meta name="description" content="A sua melhor escolha em suprimentos corporativos. Lhe ajudamos a encontrar soluções nas categorias que mais importam: EPI&apos;s, higiene e limpeza, descartáveis, materiais médicos, materiais para escritório e informática, uniformes, embalagens e suprimentos industriais." />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet" />
      </Head>
      <Component {...pageProps} />
      <Modal isActive={contactModal} closeModal={() => setContactModal(false)} title="Formulário de contato">
        <ContactForm />
      </Modal>
      <script dangerouslySetInnerHTML={{__html: `
        (function(h,o,t,j,a,r){
          h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
          h._hjSettings={hjid:2603841,hjsv:6};
          a=o.getElementsByTagName('head')[0];
          r=o.createElement('script');r.async=1;
          r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
          a.appendChild(r);
        })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
      `}}></script>
    </>
  )
}

export default MyApp
