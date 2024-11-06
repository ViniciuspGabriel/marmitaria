const {getTodostamanhoPreco} = require("../servicos/tamanhoPreco.js")

async function getTamanhoPreco(req, res) {
    try {
        const tamanhoPreco = await getTodostamanhoPreco()
        res.send(tamanhoPreco)
    } catch (error) {
        res.status(500)
        res.send(error.message)
        
    }
    
}

module.exports ={
    getTamanhoPreco
}