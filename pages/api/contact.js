export default function handler(req, res){
    if(req.method === 'POST'){
        res.status(200).json({
            success: true,
            message: 'Contact complete'
        })
    } else {
        res.status(405).json({
            error: true,
            message: 'Method not allowed'
        })
    }
  }