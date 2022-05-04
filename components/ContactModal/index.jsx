import { useContext } from "react"
import { modalContext } from "../../contexts/modal";
import Modal from '../Modal'
import ContactForm from '../ContactForm'

export default function ContactModal() {

    const { modalOpened, closeModal } = useContext(modalContext);
    
    return(
        <Modal isActive={modalOpened} closeModal={closeModal} title="Formulário de contato">
            <ContactForm />
        </Modal>
    )
}