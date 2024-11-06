// import mongoose from "mongoose";
const mongoose = require("mongoose")

const marmitaSchema = new mongoose.Schema({
    id: {type: mongoose.Schema.Types.ObjectId},
    nome: {type: String, required: true},
    itens: {type: Array},
    preco: {type: Number},
    tamanho: {type: String},
    data:{type: Date},
    custos: {type: Array},
    //quantidade: {type: Number}
}, {versionKey: false});

// Aqui coloco o collect "Marmita"
const marmita = mongoose.model("Marmita", marmitaSchema);

// module.exports = marmita;
// export {marmita, marmitaSchema};
module.exports = {marmita, marmitaSchema};
