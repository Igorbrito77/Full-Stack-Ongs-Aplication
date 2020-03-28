const connection = require('../database/connections');

module.exports = {
    create
}

async function create(req, res){

    const {id} = req.body;   

    try{

        const ong = await connection('ongs').select('name').where('id', id).first();

        if(!ong){
            return res.status(400).send({message : 'No ONG with this ID'});
        }

        return res.status(200).send(ong);
    }
    catch(err){
        return res.status(500).send(err);
    }

} 