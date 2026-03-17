const fs = require('fs');

///callbacks
console.log('Demonstrando o assincronismo');

///funcao "timer", paramêtros: (função , segundos * 1000)
setTimeout(() => {
    console.log('Isso aqui será executado depois de 2 segundos');

}, 2 * 1000);

console.log('Essa frase irá aparecer antes do código anterior , referente a setTimeout escrito ser processado, demonstrando código Assincrono');

///promises
function lerArquivo() {

    return new Promise((resolve, reject) => {
        fs.readFile('aula0.txt', (erro, conteudoArquivo) => {
            if (erro) {
                reject('Ocorreu um erro ao tentar ler o arquivo', erro);
            } else {
                resolve(String(conteudoArquivo));
            }
        });
    });
}

///async e  await
async function leituraArquivo() {

    try {
        console.log('Isso irá aparecer ANTES da leitura do arquivo;')
        const retornoPromessa = await lerArquivo();
        console.log(retornoPromessa);
        console.log('Isso irá aparecer DEPOIS da leitura do arquivo')
    } catch (erro) {
        console.log("Isso aqui é executado, depois da promessa com ERRO")
    } finally {
        console.log('Essa parte sempre é executada. Independente de sucesso e falha')
    }
 
}
leituraArquivo();
