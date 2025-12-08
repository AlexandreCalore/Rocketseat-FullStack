console.log(user)
var user = "Alexandre"
//Inverteu a ordem para demonstrar que o resultado seria undefined, e também que permite ler a variavel mesmo não tendo sido declarada o seu conteúdo

// ao definirmos VAR dentro de qualquer lugar do código, ele se torna automaticamente de escopo global
var email = "teste@gmail.com"

{ // aqui, estamos criando um escopo de bloco
// e acessando seu conteúdo
  console.log(email)
}

{ // Mas também conseguimos definir seu conteúdo dentro de um bloco, e acessa-lo por fora.

  var age = 28// criamos essa variável dentro do escopo para exemplificar o caso de escopo global, e por se tratar de uma "VAR", conseguimos acessar o conteúdo dela pelo console.log mesmo estando fora do mesmo.

  let age = 12 // diferente da VAR, não conseguimos ler o valor do LET fora do escopo.      
}

console.log(age)
console.log(ageLet)

{
    console.log(adress) // Retorna um erro, pois diferente de VAR, não consegue ler a variavel antes de ter tido contato com ela através da leitura do código.
    let adress = "Rua X" 
}