const fs = require("fs")

const venda = require('./../models/vendas')
const { marmita } = require('./../models/Marmita')


async function getTodasVendas(params) {
    try {
        const vendas = await venda.find({});
        console.log("Vendas encontradas: ", vendas);
        return vendas;
    } catch (error) {
        console.log("Erro ao buscar vendas: ", error);
        throw error;

    }

}

async function insereVenda(vendaNova) {

    try {
        // const vendaData = new venda(vendaNova);
        // const vendaSalva = await vendaData.save();


        // const marmitaEncontrada = await marmita.findById(vendaNova.marmita);
        // const vendaCompleta = {...vendaNova, marmita: {...marmitaEncontrada._doc}}
        // const VendaEfetuada = await venda.create(vendaCompleta);
        // Transformar vendaNova.marmita em um array
        const marmitasEncontradas = await marmita.find({
            _id: { $in: vendaNova.marmita } // Considerando que vendaNova.marmita seja uma lista de IDs
        });

        const vendaCompleta = {
            ...vendaNova,
            marmita: marmitasEncontradas.map(marmita => ({ ...marmita._doc })) // Garantindo que cada marmita seja adicionada ao array
        };

        // Criar a venda com o array de marmitas
        const VendaEfetuada = await venda.create(vendaCompleta);

        console.log("Venda Salva", VendaEfetuada);
        return vendaSalva;
    } catch (error) {
        console.log("Erro ao salvar Venda",)
    }
}

module.exports = {
    getTodasVendas,
    insereVenda
}