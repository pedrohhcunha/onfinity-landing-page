import styles from './style.module.scss'
import AreaInput from '../AreaInput'
import { useState } from 'react'
import AreaSelect from '../AreaSelect'
import Button from '../Button'
import AreaCheckbox from '../AreaCheckbox'

export default function ContactForm() {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        cargo: '',
        empresa: '',
        quantidade_de_funcionarios: '',
        segmento: '',
        estado: '',
        cidade: '',
        telefone: '',
        produtos_de_interesse: [
            {
                name: 'Higiêne e limpeza',
                label: 'higiene_e_limpeza',
                value: false
            },
            {
                name: 'Materiais para escritório',
                label: 'materiais_para_escritorio',
                value: false
            },
            {
                name: 'EPI\'s',
                label: 'epis',
                value: false
            },
            {
                name: 'Uniformes',
                label: 'uniformes',
                value: false
            },
            {
                name: 'Materiais médicos',
                label: 'materiais_medicos',
                value: false
            },
            {
                name: 'Embalagens',
                label: 'embalagens',
                value: false
            },
            {
                name: 'Suprimentos industriais',
                label: 'suprimentos_industriais',
                value: false
            },
            {
                name: 'Descartáveis',
                label: 'descartaveis',
                value: false
            }
        ]
    });

    return(
        <form className={styles.form}>
            <AreaInput
                label="Nome"
                name="name"
                placeholder="Digite seu nome"
                value={formData.name}
                onChange={event => setFormData({ ...formData, name: event.target.value })}
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
                    required
                />
                <AreaInput
                    label="Cargo"
                    name="cargo"
                    placeholder="Digite seu cargo"
                    value={formData.cargo}
                    onChange={event => setFormData({ ...formData, cargo: event.target.value })}
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
                    required
                />
            </div>
            <AreaInput
                label="Segmento"
                name="segmento"
                placeholder="Digite o segmento da sua empresa"
                value={formData.segmento}
                onChange={event => setFormData({ ...formData, segmento: event.target.value })}
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
                    required
                />
                <AreaInput
                    label="Cidade"
                    name="cidade"
                    placeholder="Digite sua cidade"
                    value={formData.cidade}
                    onChange={event => setFormData({ ...formData, cidade: event.target.value })}
                    required
                />
                <AreaInput
                    label="Telefone"
                    name="telefone"
                    placeholder="Digite seu telefone"
                    value={formData.telefone}
                    onChange={event => setFormData({ ...formData, telefone: event.target.value })}
                    required
                />
            </div>
            <AreaCheckbox
                label="Produtos de interesse"
                options={formData.produtos_de_interesse.map(item => {
                    return {
                        name: item.name,
                        label: item.label,
                        value: item.value
                    }
                })}
                required
            />
            <div className={styles.areaButton}>
                <Button>Enviar pedido</Button>
            </div>
        </form>
    )
}