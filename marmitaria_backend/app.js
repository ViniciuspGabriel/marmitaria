const express = require("express") // Importa o express
const rotaMarmita = require("./rotas/marmita.js")
const rotaItens = require("./rotas/itens.js")
const rotatamanhoPreco = require("./rotas/tamanhoPreco.js")
const vendas = require("./rotas/vendas.js")
const app = express()
const Connect = require("./src/callConect.js")



async function chamarConexao() {
   const resultado = await Connect();
}

chamarConexao();
app.use(express.json())
app.use('/marmita', rotaMarmita)
app.use('/itens', rotaItens)
app.use('/tamanhoPreco', rotatamanhoPreco)
app.use('/vendas', vendas)


const port = 8000

app.listen(port, () => {
    console.log('Escutando a porta ')
})