// Instacia para criar rotas/roteadores
const {Router} = require ("express")
const {getMarmitas, getMarmita, postMarmita, patchMarmita, deleteMarmita} = require("../controllers/marmita.js")

const router = Router()

// Rotas para Marmita
router.get('/', getMarmitas)

router.get('/:id', getMarmita)

router.post('/', postMarmita)

router.patch('/:id', patchMarmita)

router.delete('/:id', deleteMarmita)

module.exports = router