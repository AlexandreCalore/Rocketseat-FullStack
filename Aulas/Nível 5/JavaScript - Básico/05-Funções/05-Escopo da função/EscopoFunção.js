showMessage("Olá, Alexandre")
//Aqui vemos que conseguimos utilizar a função antes mesmo de ter sido declarada, pois ela tem o comportamento de içamento.

function showMessage(message){
  console.log(message)
  //Conseguimos criar uma função dentro de função
  endLine()

  function endLine(){
    console.log("--------------")
  }
}

// Porém, diferente da primeira função que criamos, se tentarmos utilizar a função endLine fora do escopo da função onde ela foi declarada, vai retornar um erro.

endLine() //Erro