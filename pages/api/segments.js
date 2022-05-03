import axios from 'axios'

export default async (req, res) => {

    if(req.method === 'GET'){

        const ID_SEGMENT = 4027

        let response = await axios.get(`https://api.pipedrive.com/v1/organizationFields/${ID_SEGMENT}?api_token=${process.env.PIPEDRIVE_API}`)

        if(response.status === 200 && response.data.success){

            res.status(200).json({
                success: true,
                segments: response.data.data.options 
            })   
        }
    } else {
        res.status(405).json({
            success: false,
            error: 'Method not allowed'
        })
    }
}