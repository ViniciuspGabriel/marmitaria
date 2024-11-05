const {getTodasVendas, insereVenda} = require("../servicos/vendas")



async function getVendas(req, res) {
    try{
        const vendas = await getTodasVendas()
        res.send(vendas)
    }catch(error){
        res.status(500)
        res.send(error.message)
    }
    
}

async function postVendas(req, res) {
    
    try{
        const vendaNova = req.body
        await insereVenda(vendaNova)        
        res.status(201)
        res.send("Venda realizada")
    }catch(error){
        res.status(500)
        res.send(error.message)
    }
}


module.exports = {
    getVendas,
    postVendas
}