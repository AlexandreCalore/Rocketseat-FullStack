// Função de seta

const showMessage1 = () => {
    console.log("Olá")    
}

// É a mesma estrutura de uma function comum, o que muda é que no lugar da palavra reservada function, colocamos '=>'

//Conteúdo de showMessage

console.log(showMessage1)
showMessage1()

const showMessage2 = (name = '') => {
    console.log("Olá, " + name)    
}
//Passamos parâmetros nessa arrow function

console.log(showMessage2)
showMessage2("Alexandre")