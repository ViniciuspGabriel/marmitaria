// import mongoose from "mongoose";
const mongoose = require("mongoose")
const {marmitaSchema} =require('./Marmita')

const vendaSchema = new mongoose.Schema({
    id: {type: mongoose.Schema.Types.ObjectId},
    cliente: {type: String, required: true},
    //quantidade: {type: Number},
    quantidade: {type: Array},
    marmitas: [{ type: mongoose.Schema.Types.ObjectId, ref: "Marmita" }]
    //marmita: marmitaSchema
}, {versionKey: false});

// Aqui coloco o collect "Marmita"
const vendas = mongoose.model("Venda", vendaSchema);

module.exports = vendas;
