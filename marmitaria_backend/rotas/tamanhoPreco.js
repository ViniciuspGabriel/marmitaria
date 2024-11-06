//instancia para criar rotas
const {Router} = require("express")

const {getTamanhoPreco} = require("../controllers/tamanhoPreco.js")

const router = Router();

// Rotas para a tabela TamanhoPreco

router.get('/',getTamanhoPreco)

module.exports = router