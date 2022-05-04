import Head from "next/head"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Initial from "../components/Initial"
import About from "../components/About"
import Infos from "../components/Infos"
import Purpose from "../components/Purpose"
import Benefits from "../components/Benefits"
import Solutions from "../components/Solutions"
import Industries from "../components/Industries"
import Mix from "../components/Mix"
import Segments from '../components/Segments'
import Clients from "../components/Clients"
import Partners from '../components/Partners'
import Final from '../components/Final'
import WhatsappButton from '../components/WhatsappButton'

export default function Home() {
  return (
    <main style={{
      scrollBehavior: 'smooth',
      overflowY: 'scroll',
      maxHeight: '100vh'
    }}>
      <Head>
        <title>Onfinity - Uma solução completa em Suprimentos Corporativos</title>
        <meta name="title" content="Onfinity - Uma solução completa em Suprimentos Corporativos" />
      </Head>
      <Header />
      <Initial />
      <About />
      <Infos />
      <Purpose />
      <Solutions />
      <Benefits />
      <Industries />
      <Mix />
      <Segments />
      <Clients />
      <Partners />
      <Final />
      <Footer />
      <WhatsappButton />
    </main>
  )
}
