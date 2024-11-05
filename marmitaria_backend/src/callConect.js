const conectaNaDataBase  = require("./config/dbConnect.js")


async function fetchData() {
    
    const conexao = await conectaNaDataBase();

    conexao.on("error", (erro) =>{
        console.error("erro de conexão", erro);
    });

    conexao.once("open", () => {
        console.log("Conexao feita com sucesso")
    });

}

module.exports = fetchData;