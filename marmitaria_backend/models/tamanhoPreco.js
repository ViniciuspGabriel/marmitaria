const mongoose = require("mongoose")

const tamanhoPreco = new mongoose.Schema({
    id: {type: mongoose.Schema.Types.ObjectId},
    tamanho: {type: String, required: true},
    Preco: {type: Number, required:true}
}, {versionKey: false});


const precoporTamanho = mongoose.model("precoporTamanho", tamanhoPreco);

module.exports = precoporTamanho;