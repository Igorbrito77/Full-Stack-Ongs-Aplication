const connection = require('../database/connections');

module.exports = {
    list,
    create,
    destroy
}

async function list(req, res){

    const incidents = await connection('incidents').select('*').orderBy('id', 'desc');

    return res.json(incidents);
}


async function create(req, res){

   const{ title, description, value } = req.body;

    console.log(req.body);

    const ong_id = req.headers.authorization;   


    const [id] = await connection('incidents').insert({
            title,
            description,
            value,
            ong_id 

        });

    return res.json({id});
   
}

async function destroy(req, res){

    const {id} = req.params;
    const ong_id = req.headers.authorization;

    try{

        const incident = await connection('incidents').select('ong_id').where('id', id).first();

        if(incident.ong_id != ong_id){
            return res.status(401).json({error: 'Operation not permitted'});
        }

        await connection('incidents').delete().where('id', id);

        return res.status(204).send({message : 'Incident deleted with sucess.'});
    }
    catch(err){
        return res.status(500).send(err);
    }
}