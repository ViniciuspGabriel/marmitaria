// Instancia para criar rotas/rotadores
const {Router} = require("express")
const {getVendas, postVendas} = require("../controllers/vendas")

const router = Router()

// Rotas para Vendas

router.get('/', getVendas)

router.post('/', postVendas)

module.exports = router
