const mongoose = require("mongoose")

const itensMarmita = new mongoose.Schema({
    id: {type: mongoose.Schema.Types.ObjectId},
    item: {type: String, required: true},
}, {versionKey: false});


const itens = mongoose.model("itens", itensMarmita);

module.exports = itens;