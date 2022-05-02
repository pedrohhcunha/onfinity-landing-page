import axios from 'axios';
import { cnpj } from 'cpf-cnpj-validator'; 

/** Default post body exemplo:
{
	"name": "Teste teste",
    "email": "teste@gmail.com",
    "job": "Programador",
    "company": "Onfinity",
    "employees": "10-50",
    "segment": "Distribuidora",
    "state": "SC",
    "city": "Chapecó",
    "phone": "49999999999",
    "products": ["Higiene e limpeza", "Materias para escritório"]
}
*/

export default (req, res) => {      
    let nome = req.body.name
    let email = req.body.email
    let cargo = req.body.job
    let empresa = req.body.company
    let funcionarios = req.body.employees
    let segmento = req.body.segment
    let estado = req.body.state
    let cidade = req.body.city
    let telefone = req.body.phone
    let produtos = req.body.products

    let utm_source = req.query.utm_source || 'Onfinity'
    let utm_medium = req.query.utm_medium || 'organic'
    let utm_campaign = req.query.utm_campaign || 'busca-orgânica'

    axios.post(process.env.RD_API_URL + '/auth/token', 
    {  
      "client_id": process.env.RD_CLIENT_ID,
      "client_secret": process.env.RD_CLIENT_SECRET,
      "refresh_token": process.env.RD_REFRESH_TOKEN
    })
    .then(response => {
      let access_token = response.data.access_token
      let config = {
        headers: {
          Authorization: `Bearer ${access_token}`
        }
      }

      axios.post(process.env.RD_API_URL + '/platform/events',{
        "event_type": "CONVERSION",
        "event_family":"CDP",
        "payload": {
          "conversion_identifier": "onfinity-lead",
          "job_title": cargo,
          "name": nome,
          "email": email,
          "traffic_source": utm_source,
          "traffic_medium": utm_medium,
          "traffic_campaign": utm_campaign,
          "company_name": empresa,
          "state": estado,
          "city": cidade,
          "personal_phone": telefone,
          "cf_produtos_de_interesse_onfinity": produtos,  //dando pau
          "cf_quantidade_de_funcionarios": funcionarios, 
          "cf_segmento_texto": segmento,
          "tags": ["onfinity", "2022"],
          "available_for_mailing": true
        }
        }, config).
        then(formulario => {
          if(formulario.data.hasOwnProperty('event_uuid')){
            res.status(200).json({message: 'Formulário encaminhado com sucesso', success:true})
          } else {
            res.status(500).json({message: 'Erro ao encaminhar solicitação', error:true})
          }
        }).
        catch(error => {
            res.status(400).json({message: 'Erro ao encaminhar solicitação', error:true})
        })
    });
}