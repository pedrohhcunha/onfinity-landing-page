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

export default function Home() {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href={`https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap`} rel="stylesheet" />
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
      <Footer />
    </>
  )
}
