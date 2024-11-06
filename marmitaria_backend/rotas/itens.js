// Instacia para criar rotas/roteadores
const {Router} = require ("express")

const {getItens} = require("../controllers/itens.js");

const router = Router()

//Rotas para a tabela itens da Marmita

router.get('/', getItens)

module.exports = router