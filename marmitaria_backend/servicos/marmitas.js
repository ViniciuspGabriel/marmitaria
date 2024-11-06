const fs = require("fs")
// import marmita from "./../models/Marmita.js"

const {marmita} = require("./../models/Marmita.js")

async function getTodasMarmitas() {
    try {
        // Faz a busca de todas as marmitas no banco de dados
        const marmitas = await marmita.find({}); // Aqui você já obtém o resultado da busca
        console.log("Marmitas encontradas:", marmitas); // Exibe no console para depuração
        
        return marmitas; // Retorna as marmitas encontradas
    } catch (err) {
        console.error("Erro ao buscar marmitas:", err);
        throw err; // Propaga o erro para ser tratado pelo chamador
    }
}

function getMarmitaPorId(id){
   //debugger; // O código vai parar aqui
    const marmitas = JSON.parse(fs.readFileSync("marmitas.json"))

    const marmitaFiltrado = marmitas.filter( marmita => marmita.id === id) [0]
    return marmitaFiltrado
} 

async function insereMarmita(marmitaNovo){
    // const marmitas = JSON.parse(fs.readFileSync("marmitas.json"))

    // const novaListaDeMarmita = [...marmitas, marmitaNovo]

    // fs.writeFileSync("marmitas.json", JSON.stringify(novaListaDeMarmita))

    try {
        // Cria uma nova instância de Marmita com os dados passados
        const marmitaData = new marmita(marmitaNovo);
        const marmitaSalva = await marmitaData.save();
        console.log("Marmita Salva:", marmitaSalva); // Exibe no console para depuração
        return marmitaSalva;
    } catch (error) {
        console.log("Erro ao salvar:", marmitaSalva); // Exibe no console para depuração
    }
    
}

function modificaMarmita(modificacoes, id){
    const marmitas = JSON.parse(fs.readFileSync("marmitas.json"))
    const indiceModificado = marmitas.findIndex(marmita => marmita.id === id)

    const conteudoMudado = {...marmitas[indiceModificado], ...modificacoes}

    marmitas[indiceModificado] = conteudoMudado

    fs.writeFileSync("marmitas.json", JSON.stringify(marmitas))
}

function deletaMarmita(id){
    const marmitas = JSON.parse(fs.readFileSync("marmitas.json"))
    const marmitasFiltrados = marmitas.filter(marmita => marmita.id !== id)
    fs.writeFileSync("marmitas.json", JSON.stringify(marmitasFiltrados))
}

module.exports = {
    getTodasMarmitas,
    getMarmitaPorId,
    insereMarmita,
    modificaMarmita,
    deletaMarmita
}