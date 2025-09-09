function sum(a,b){
  let result = a + b
  console.log(result)
  //contudo há casos onde vamos querer retornar o valor para utilizarmos fora da função

  return result // Aqui estamos retornando o resultado para quem chamou a função, podendo usar o valor fora da função
}

response = sum(7,4) //Atribuimos o que retornou da função para a variável response
console.log(response)

//Ou então imprimir o retorno diretamente

console.log(sum(2,5))