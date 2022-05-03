export default (req, res) => {

    if(req.method === 'GET'){
        res.status(200).json({
            success: true,
            segments: [{
                id: '1',
                label: 'Segmento 1'
            }]
        })
    } else {
        res.status(405).json({
            success: false,
            error: 'Method not allowed'
        })
    }
}