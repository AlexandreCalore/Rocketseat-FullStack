/*
    - Parâmetros: é a variável (escopo da função) que irá receber um valor em uma função

    - Argumentos: é o valor que é passado para a função.
*/

//Passando parâmetros

function message (username){
console.log("Olá", username) // Aqui vamos imprimir olá para diferentes nomes de pessoa, para isso utilizamos o parâmetro/variável que queremos utilizar, e utilizaremos o argumento (valor daquela variável) para imprimir mensagens dinâmicas. 
}

//Passando argumentos

message("Alexandre") // Se quisermos chamar a função message, e darmos um "Olá" para o Alexandre por exemplo, passamos o argumento (valor) dentro do parâmetro 'username' que está sendo utilizado dentro da função
message("Julia") 

// Lembrando que a variável username, só é criada dentro do escopo da função, não podendo ser utilizada fora dela. Se criamos nesse caso outra variável fora do escopo da função, chamada username e atribuirmos um argumento a ela, ele vai ignorar completamente ela. Exceto se removermos o parâmetro da função, e dentro dela continuarmos chamando a varíavel, ai sim ele vai imprimir se baseando na variável global.


// Função sem valor padrão

function joinTextUndefined (text1, text2, text3){
    console.log(text1, text2, text3)
    // A ordem dos parâmetros importa na hora de utilizarmos os argumentos por exemplo.
}

joinTextUndefined("Alexandre", "Ricardo", "Calore")
    
joinTextUndefined("Alexandre") // Se deixarmos de passar argumentos, ele irá retornar como undefined. Conseguimos contornar isso atribuindo um valor padrão para a function

// Função com valor padrão

function joinText (text1, text2="", text3=""){
    console.log(text1, text2, text3)   
}


joinTextUndefined("Alexandre")
    
