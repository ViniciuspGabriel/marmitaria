const {getTodositens} = require("../servicos/itens.js")

async function getItens(req, res){
    try{
        const itens = await getTodositens()
        res.send(itens)
        // res.status(200).json(marmitas);
    }catch (error){
        res.status(500)
        res.send(error.message)
    }
}

module.exports ={
    getItens
}