let username = "Rodrigo"

console.log(username)
console.log(typeof username) // verifica o tipo da variável

console.log("Uma string com aspas")
console.log('Uma stringo com aspas simples')

// Quando utilizar aspas ou aspas simples?

console.log('Uma string com "aspas duplas" dentro de simples') //Quando queremos destacar uma frase dentro do console.log, com aspas duplas, é necessário envolve-la com aspas simples antes, pois assim o JS não vai entrar em conflito

//E o mesmo vale para o inverso!

console.log("Uma string com 'aspas simples' dentro de aspas duplas")

// Podemos utilizar também o ascento grave

console.log(`
    Uma string com ascento grave permite escrever
    com múltiplas linhas. Respeitando as quebras 
    na hora de imprimir também
`)