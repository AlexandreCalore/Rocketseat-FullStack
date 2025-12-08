let message = "Estou estudando fundamento do JS"

//Substituir parte de um texto

console.log(message) // aqui printamos a mensagem normalmente

// Utilizando o método replace de uma string

console.log(message.replace("JS","HTML")) // Recebe 2 parâmetros: 1° parte do texto a ser substituido | 2° pelo o que vai ser substituido

//Extraindo parte de uma string (start, end)

console.log(message.slice(0,5)) //Utilizamos o método da string chamado slice, que tem a função de 'cortar' parte da string, devendo passar o caracter onde vai começar o corte e o seu fim. Nesse caso, retorna aquilo que fora cortado

////Extraindo parte de uma string, só que de trás para frente agora

console.log(message.slice(-2)) //Apenas invertemos o sinal, assim caracterizando que vmaos pegar de trás para a frente aquela quantidade de caracteres


//Removendo espaços indesejados do texto

let textWithSpace = "           teste de texto com espaço              "

console.log(textWithSpace.length) //utilizando o método length para contar quantos caracteres existem nessa string 

console.log(textWithSpace.trim().length) //