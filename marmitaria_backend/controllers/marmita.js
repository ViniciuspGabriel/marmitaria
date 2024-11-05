const { getTodasMarmitas,getMarmitaPorId, insereMarmita, modificaMarmita, deletaMarmita } = require("../servicos/marmitas")



async function getMarmitas(req, res){
    try{
        const marmitas = await getTodasMarmitas()
        res.send(marmitas)
        // res.status(200).json(marmitas);
    }catch (error){
        res.status(500)
        res.send(error.message)
    }
}


function getMarmita(req, res){
    try{
        const id = req.params.id
        const marmitas = getMarmitaPorId(id)
        res.send(marmitas)
    }catch (error){
        res.status(500)
        res.send(error.message)
    }
}

async function postMarmita(req, res){
    try{
        const marmitaNovo = req.body
        await insereMarmita(marmitaNovo)
        res.status(201)
        res.send("Marmita inserida com sucesso")
    }catch (error){
        res.status(500)
        res.send(error.message)
    }
}

function patchMarmita(req, res){
    try{
        const id = req.params.id
        const marmitaNovo = req.body
        modificaMarmita(marmitaNovo, id)
        res.status(201)
        res.send("Marmita modificado com sucesso")
    }catch (error){
        res.status(500)
        res.send(error.message)
    }
}

function deleteMarmita(req, res){
    try{
        const id = req.params.id
        deletaMarmita(id)
        res.status(201)
        res.send("Marmita deletada com sucesso")
    }catch (error){
        res.status(500)
        res.send(error.message)
    }
}


module.exports = {
    getMarmitas,
    getMarmita,
    postMarmita,
    patchMarmita,
    deleteMarmita
}