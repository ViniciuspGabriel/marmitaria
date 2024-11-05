const tamanhoPrecobd = require("./../models/tamanhoPreco.js")

async function getTodostamanhoPreco() {
    try {
        const tamanhoPreco = await tamanhoPrecobd.find({});
        console.log("Itens encontrados", tamanhoPreco);
        return tamanhoPreco;
    } catch (erro) {
        console.error("Erro ao buscar os Itens", erro);
        throw erro;
    }
}

module.exports = {
    getTodostamanhoPreco
}