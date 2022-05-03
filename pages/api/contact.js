import axios from 'axios';

export default (req, res) => {      
    let nome = req.body.nome
    let email = req.body.email
    let cargo = req.body.cargo
    let empresa = req.body.empresa
    let funcionarios = req.body.employees
    let segmento = req.body.segmento
    let estado = req.body.estado
    let cidade = req.body.cidade
    let telefone = req.body.telefone
    let produtos = req.body.produtos_de_interesse

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