import styles from './style.module.scss'
import AreaInput from '../AreaInput'
import { useState } from 'react'
import AreaSelect from '../AreaSelect'
import Button from '../Button'
import AreaCheckbox from '../AreaCheckbox'
import axios from 'axios'
import Router from 'next/router'
import { useEffect } from 'react'

export default function ContactForm() {

    const produtos_de_interesse = [
        "Higiene e limpeza",
        "Materiais para escritório",
        "EPI\'s",
        "Uniformes",
        "Materiais médicos",
        "Embalagens",
        "Suprimentos industrias",
        "Descartáveis"
    ]

    const [formData, setFormData] = useState({
        nome: '',
        email: '',
        cargo: '',
        empresa: '',
        quantidade_de_funcionarios: '',
        segmento: '',
        estado: '',
        cidade: '',
        telefone: '',
        produtos_de_interesse: []
    });

    const [errors, setErrors] = useState([]);

    const [loading, setLoading] = useState(false);

    const [segmentsOptions, setSegmentsOptions] = useState([]);

    const sendData = async event => {
        event.preventDefault()
        console.log(formData)

        if(!loading){
            setLoading(true)

            let auxErrors = []

            if(formData.nome.length <= 2){
                auxErrors.push({
                    field: 'nome',
                    message: 'O nome deve ter mais de 2 caracteres'
                })
            }
            if(formData.email.length <= 5){
                auxErrors.push({
                    field: 'email',
                    message: 'O email deve ter mais de 5 caracteres'
                })
            }
            if(formData.cargo.length <= 2){
                auxErrors.push({
                    field: 'cargo',
                    message: 'O cargo deve ter mais de 2 caracteres'
                })
            }
            if(formData.empresa.length <= 2){
                auxErrors.push({
                    field: 'empresa',
                    message: 'O nome da sua empresa deve ter mais de 2 caracteres'
                })
            }
            if(!formData.quantidade_de_funcionarios){
                auxErrors.push({
                    field: 'quantidade_de_funcionarios',
                    message: 'Informe a quantidade de funcionários da sua empresa'
                })
            }
            if(formData.segmento.length <= 2){
                auxErrors.push({
                    field: 'segmento',
                    message: 'O segmento não pode ter menos de 2 carcteres'
                })
            }
            if(!formData.estado){
                auxErrors.push({
                    field: 'estado',
                    message: 'Informe o estado'
                })
            }
            if(formData.cidade.length <= 2){
                auxErrors.push({
                    field: 'cidade',
                    message: 'A sua cidade deve ter mais de 2 caracteres'
                })
            }
            if(formData.telefone.length <= 8){
                auxErrors.push({
                    field: 'telefone',
                    message: 'O telefone deve ter mais de 8 caracteres'
                })
            }

            if(auxErrors.length >= 1){
                setLoading(false)
                return setErrors(auxErrors)
            }

            try{
                const response = await axios.post(`/api/contact`, formData)
                
                if(response.status === 200 && response.data.success){
                    setLoading(false)
                    setFormData({
                        nome: '',
                        email: '',
                        cargo: '',
                        empresa: '',
                        quantidade_de_funcionarios: '',
                        segmento: '',
                        estado: '',
                        cidade: '',
                        telefone: '',
                        produtos_de_interesse: []
                    })
                    Router.push('/obrigado')
                }
                setLoading(false)
                return alert('Erro ao enviar formulário')

            } catch(error){
                setLoading(false)
                return alert(error)
            }
        }
    }

    useEffect(() => {
        const fetchData = async () => {
            let response = await axios.get('/api/segments')

            if(response.status === 200 && response.data.success){
                return setSegmentsOptions(response.data.segments)
            }
            return alert('Erro ao carregar segmentos')
        }

        fetchData()
    }, [])

    return(
        <form method='POST' onSubmit={sendData} className={styles.form}>
            <AreaInput
                label="Nome"
                name="nome"
                placeholder="Digite seu nome"
                value={formData.nome}
                onChange={event => setFormData({ ...formData, nome: event.target.value })}
                error={errors.find(error => error.field === 'nome')?.message}
                required
            />
            <div className={`${styles.inputsLine} ${styles.emailCargo}`}>
                <AreaInput
                    label="E-mail"
                    name="email"
                    type="email"
                    placeholder="Digite seu e-mail"
                    value={formData.email}
                    onChange={event => setFormData({ ...formData, email: event.target.value })}
                    error={errors.find(error => error.field === 'email')?.message}
                    required
                />
                <AreaInput
                    label="Cargo"
                    name="cargo"
                    placeholder="Digite seu cargo"
                    value={formData.cargo}
                    onChange={event => setFormData({ ...formData, cargo: event.target.value })}
                    error={errors.find(error => error.field === 'cargo')?.message}
                    required
                />
            </div>
            <div className={`${styles.inputsLine} ${styles.empresaQuantidade}`}>
                <AreaInput
                    label="Empresa"
                    name="empresa"
                    placeholder="Digite o nome da sua empresa"
                    value={formData.empresa}
                    onChange={event => setFormData({ ...formData, empresa: event.target.value })}
                    error={errors.find(error => error.field === 'empresa')?.message}
                    required
                />
                <AreaSelect
                    label="Quantidade de funcionários"
                    name="quantidade_de_funcionarios"
                    placeholder="Selecione..."
                    value={formData.quantidade_de_funcionarios}
                    onChange={event => setFormData({ ...formData, quantidade_de_funcionarios: event.target.value })}
                    options={[
                        { value: '1-10', name: '1-10' },
                        { value: '11-50', name: '11-50' },
                        { value: '51-100', name: '51-100' },
                        { value: '101-200', name: '101-200' },
                        { value: '201-500', name: '201-500' },
                        { value: '501-1000', name: '501-1000' },
                        { value: '1001-2000', name: '1001-2000' },
                        { value: '2001-5000', name: '2001-5000' },
                        { value: '5001-10000', name: '5001-10000' },
                        { value: '10000+', name: '10000+' },
                    ]}
                    error={errors.find(error => error.field === 'quantidade_de_funcionarios')?.message}
                    required
                />
            </div>
            <AreaSelect
                label="Segmento"
                name="segmento"
                placeholder="Selecione..."
                value={formData.segmento}
                onChange={event => setFormData({ ...formData, segmento: event.target.value })}
                options={segmentsOptions.map(segment => {
                    return {
                        value: segment.id,
                        name: segment.label
                    }
                })}
                error={errors.find(error => error.field === 'segmento')?.message}
                required
            />
            <div className={`${styles.inputsLine} ${styles.estadoCidadeTelefone}`}>
                <AreaSelect
                    label="Estado"
                    name="estado"
                    placeholder="Selecione..."
                    value={formData.estado}
                    onChange={event => setFormData({ ...formData, estado: event.target.value })}
                    options={[
                        { value: 'AC', name: 'AC' },
                        { value: 'AL', name: 'AL' },
                        { value: 'AP', name: 'AP' },
                        { value: 'AM', name: 'AM' },
                        { value: 'BA', name: 'BA' },
                        { value: 'CE', name: 'CE' },
                        { value: 'DF', name: 'DF' },
                        { value: 'ES', name: 'ES' },
                        { value: 'GO', name: 'GO' },
                        { value: 'MA', name: 'MA' },
                        { value: 'MT', name: 'MT' },
                        { value: 'MS', name: 'MS' },
                        { value: 'MG', name: 'MG' },
                        { value: 'PA', name: 'PA' },
                        { value: 'PB', name: 'PB' },
                        { value: 'PR', name: 'PR' },
                        { value: 'PE', name: 'PE' },
                        { value: 'PI', name: 'PI' },
                        { value: 'RJ', name: 'RJ' },
                        { value: 'RN', name: 'RN' },
                        { value: 'RS', name: 'RS' },
                        { value: 'RO', name: 'RO' },
                        { value: 'RR', name: 'RR' },
                        { value: 'SC', name: 'SC' },
                        { value: 'SP', name: 'SP' },
                        { value: 'SE', name: 'SE' },
                        { value: 'TO', name: 'TO' },
                    ]}
                    error={errors.find(error => error.field === 'estado')?.message}
                    required
                />
                <AreaInput
                    label="Cidade"
                    name="cidade"
                    placeholder="Digite sua cidade"
                    value={formData.cidade}
                    onChange={event => setFormData({ ...formData, cidade: event.target.value })}
                    error={errors.find(error => error.field === 'cidade')?.message}
                    required
                />
                <AreaInput
                    label="Telefone"
                    name="telefone"
                    placeholder="Digite seu telefone"
                    value={formData.telefone}
                    onChange={event => setFormData({ ...formData, telefone: event.target.value })}
                    error={errors.find(error => error.field === 'telefone')?.message}
                    required
                />
            </div>
            <AreaCheckbox
                label="Produtos de interesse"
                options={produtos_de_interesse.map(produto => {
                    return {
                        name: produto,
                        selected: formData.produtos_de_interesse.includes(produto),
                        onClick: () => {
                            let aux = formData.produtos_de_interesse

                            if(aux.includes(produto)){
                                aux = aux.filter(p => p !== produto)
                            } else {
                                aux.push(produto)
                            }
                            setFormData({ ...formData, produtos_de_interesse: aux })
                        }
                    }
                })}
                error={errors.find(error => error.field === 'produtos_de_interesse')?.message}
                required
            />
            <div className={styles.areaButton}>
                <Button type="submit">Enviar pedido</Button>
            </div>
        </form>
    )
}