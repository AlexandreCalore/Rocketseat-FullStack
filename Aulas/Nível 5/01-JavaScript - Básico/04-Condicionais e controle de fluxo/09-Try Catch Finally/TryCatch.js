console.log(result) // tentamos imprimir uma variável que não existe.

try {
    console.log(result) // Aqui conseguimos capturar o erro, sem exibi-lo para o usuario
} catch (error) {
    console.log(`O seu erro foi o seguinte ${error}`) // Capturamos o erro e atribuimos ele a variável "error", depois conseguimos "trata-lo" e imprimir ele por exemplo, mas sem estourar o erro real para o usuário
} finally {
// É o bloco que serve para executar independente de erro ou não, sendo também opcional
console.log("Fim")

}

let result = 0

try {
  if (result === 0) {
    throw new Error ("O valor é igual a 0") // Aqui dizemos ao programa, para lançar um novo erro caso o resultado seja igual a 0   
  }
} catch (error) {
    console.log(error) // O que fizemos, foi atribuir uma mensagem específica de erro em um contexto, e depois quando imprimimos ela, apareceu no console a mensagem que fizemos, podendo tratar exceções personalizadas/filtradas.
} finally {
    console.log("Fim")
}