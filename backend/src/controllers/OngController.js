const crypto = require('crypto');
const connection = require('../database/connections');

module.exports = {
    list,
    create
}


async function list(req, res){

    const ongs = await connection('ongs').select('*') .orderBy('id', 'desc');
    return res.json(ongs);
}

async function create(req, res){

    const {name, email,whatsapp, city, uf} = req.body;

    const id = crypto.randomBytes(4).toString('HEX');   

    await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf
        });
       
    return res.json({id}); 
}