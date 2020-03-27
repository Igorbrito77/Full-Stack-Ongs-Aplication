const connection = require('../database/connections');

module.exports = {
    list
}

async function list(req, res){

    const ong_id = req.headers.authorization;   

    try{

        const incidents = await connection('incidents').select('*').where('ong_id', ong_id);

        return res.status(200).send(incidents);
    }
    catch(err){
        return res.status(500).send(err);
    }

} 