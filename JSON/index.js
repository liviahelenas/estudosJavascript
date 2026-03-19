const aula = "JSON";

console.log(aula);

/// fs: file system: facilita a leitura de arquivos
const fs = require("fs");

///leitura de dados JSON(código abaixo)

///1) propriedade readfile de file system, leia o arquivo .eslintrc.json

///2) no parâmetro erro, se acontecer, demonstre 

///3) criando um objeto js dadosObjeto, que irá receber o JSON.parse, passando pelo parâmetro de dados.

/// JSON.parse: transforma texto em objeto javascript, podendo ser mapeado depois

fs.readFile(".eslintrc.json", (erro, dados) => {
    if(erro){
    console.log("Erro" , erro);
} else {
    const dadosObjeto = JSON.parse(dados);
    console.log(dadosObjeto.rules);
}
});

//transformando um dado JSON em String

const dadoJSON = {"Nome" : "Lívia Helena",
    "Idade" : 24,
    "Cor favorita" : "rosa"
};

//transformando um dado JSON em String com stringinfy
console.log(JSON.stringify(dadoJSON));

