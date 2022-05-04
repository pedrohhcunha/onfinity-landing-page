import { createContext, useState } from "react"

const modalContext = createContext({})

const ModalProvider = ({ children }) => {
    const [modalOpened, setModalOpened] = useState(false)

    return(
        <modalContext.Provider value={{
            modalOpened,
            closeModal: () => setModalOpened(false)
        }}>
            { children }
        </modalContext.Provider>
    )
}

export { modalContext, ModalProvider }