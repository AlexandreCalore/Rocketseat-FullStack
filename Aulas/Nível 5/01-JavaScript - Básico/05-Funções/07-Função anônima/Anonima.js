// Função que não possui nome

// Quando criar uma função sem nome? Para utiliza-la imediatamente, guardando a própia função e não o retorno dela

let showMessage1 = function(){
    return "Olá Alexandre!"
}

console.log(showMessage1())

let showMessage2 = function(name){
    return "Olá " + name
}

console.log(showMessage2("Alexandre"))

