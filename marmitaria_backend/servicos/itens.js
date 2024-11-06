const fs = require("fs")

const itensbd = require("./../models/ItensMarmita.js")


async function getTodositens() {
    try {
        const itens = await itensbd.find({});
        console.log("Itens encontrados", itens);
        return itens;
    } catch (err) {
        console.error("Erro ao buscar os Itens", err);
        throw err;
    }
}

module.exports = {
    getTodositens
}