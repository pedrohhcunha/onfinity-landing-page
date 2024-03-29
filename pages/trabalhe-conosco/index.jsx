import styles from './style.module.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Vaga from '../../components/Vaga'
import Head from 'next/head'
import Snackbar from '../../components/Snackbar'

import axios from 'axios'

import { useState, useEffect } from 'react'

export default function TrabalheConosco(props){

    const [modalIsActive, setModalIsActive] = useState(false);

    const [stateModalVaga, setStateModalVaga] = useState(0);

    const [vagasSepti, setVagasSepti] = useState([])

    const [vagaAtual, setVagaAtual] = useState(0);

    const [feedback, setFeedback] = useState({
        open: false,
        message: '',
    });

    const [newVaga, setNewVaga] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [modalInHover, setModalInHover] = useState(false);

    const sendForm = event => {
        event.preventDefault()
        
        const finalData = new FormData();
        const imagefile = document.querySelector('#curriculum');
        
        finalData.append("image", imagefile.files[0]);
        finalData.append("nome", newVaga.name)
        finalData.append("email", newVaga.email)
        finalData.append("mensagem", newVaga.message)
        finalData.append("vaga", vagaAtual)

        axios({
            method: 'post',
            url: `${process.env.NEXT_PUBLIC_INTRANET_API}/receive_curriculo`,
            data: finalData
        },{headers: { 'Content-Type': 'multipart/form-data' }}).then(response => {
            document.querySelector('#FormVaga').reset()
            
            setNewVaga({
                nome: "",
                email: "",
                mensagem: "",
                file: {},
                vaga: props.vagaId
            })

            setStateModalVaga(false)
            setFeedback({
                open: true,
                message: 'Currículo enviado com sucesso!',
            })
        })
    }
    
    //Bloquendo scroll quando o modal estiver aberto
    useEffect(() => {
        axios.post(`${process.env.NEXT_PUBLIC_INTRANET_API}/vagas_company`, {
            id: 1
        }).
        then((response) => {
            setVagasSepti(response.data)
        })
    }, []);

    useEffect(() => {
        if(stateModalVaga){
            document.querySelector('body').style.overflow = 'hidden'
        } else {
            document.querySelector('body').style.overflow = 'auto'
        }
    }, [stateModalVaga]);

    return(
        <>
        <Head>
            <title>Onfinity - Trabalhe conosco</title>
            <meta name="title" content="Onfinity - Trabalhe conosco" />
        </Head>
        <Header openModal={() => setModalIsActive(true)} />
            <main className={styles.main}>
                <h2>Trabalhe Conosco</h2>
                <div className={styles.vagas}>
                    {vagasSepti.length >= 1 ?
                        vagasSepti.map((vaga, index) => (
                            <Vaga
                                key={index}
                                imagem={vaga?.imagem_url}
                                title={vaga?.titulo}
                                responsabilidades={vaga?.responsabilidades}
                                requisitos={vaga?.requisitos}
                                oferecemos={vaga?.beneficios}
                                openVaga={event => {
                                    event.preventDefault()
                                    console.log("Abrindo a vaga " + vaga.id)
                                    setVagaAtual(vaga?.id)
                                    setStateModalVaga(true)
                                }}
                            />  
                        ))
                    : null
                    }
                </div>
                {vagasSepti.length >= 1 ?
                    <aside className={`${styles.modalVaga} ${stateModalVaga ? styles.active : null}`} onClick={() => {
                        if(!modalInHover){
                            setModalInHover(false)
                        }
                    }}>
                        <form id="FormVaga" onSubmit={sendForm} className={styles.modal}>
                            <div className={styles.topArea}>
                                <h2 className={styles.titleArea}>{vagasSepti.find(vaga => vaga.id === vagaAtual)?.titulo}</h2>
                                <FontAwesomeIcon icon={faTimes} className={styles.iconClose} onClick={() => setStateModalVaga(false)}/>
                            </div>
                            <div className={styles.areaInputs}>
                                <div className={styles.areaInput}>
                                    <label className={styles.label} htmlFor="nameInput">Nome*</label>
                                    <input value={newVaga.name} onChange={event => setNewVaga({...newVaga, ['name']: event.target.value})} required className={styles.input} name="nameInput" type="text" />
                                </div>
                                <div className={styles.areaInput}>
                                    <label className={styles.label} htmlFor="nameInput">Email*</label>
                                    <input value={newVaga.email} onChange={event => setNewVaga({...newVaga, ['email']: event.target.value})} required className={styles.input} name="emailInputx" type="email" />
                                </div>
                                <div className={styles.areaInput}>
                                    <label className={styles.label} htmlFor="nameInput">Sua mensagem</label>
                                    <textarea valeu={newVaga.message} onChange={event => setNewVaga({...newVaga, ['message']: event.target.value})} required className={styles.input} style={{padding: '10px', minHeight: '100px', resize: 'none'}}  name="nameInput" type="text" />
                                </div>
                                <div className={styles.areaInput}>
                                    <label className={styles.label} htmlFor="nameInput">Seu curriculum</label>
                                    <label htmlFor='curriculum' className={`${styles.areaDragInDrop} ${newVaga.file ? styles.active : ''}`}>
                                        {newVaga.file ? newVaga.file.name : 'Busque o curriculum no seu dispositivo  '}
                                    </label>
                                    <input onChange={event => {
                                        console.log("Adicionou aquele arquivo:", event.target.files[0])
                                        setNewVaga({...newVaga, ['file']: event.target.files[0]})
                                    }} style={{display: 'none'}} type="file" id="curriculum" name="curriculum" />
                                </div>
                            </div>
                            <div className={styles.controllersArea}>
                                <button onClick={() => setStateModalVaga(false)} className={styles.button}>Cancelar</button>
                                <button type="submit" className={styles.button}>Enviar</button>
                            </div>
                        </form>
                    </aside>
                : null}
            </main>
            <Snackbar active={feedback.open} closeFunction={() => {
                setFeedback({
                    ...feedback,
                    open: false
                })
            }}>{feedback.message}</Snackbar>
            <Footer />
        </>
    )
}