let hour = 11

if(hour <= 12){
//dentro dos parenteses são definidos as condições ()

//dentro das chaves são definidos os comandos a serem executados {}

//As chaves também servem para definir  o escopo do if 

console.log("Seja bem vindo!")
console.log("Bom dia!")
}

// Chaves são opcionais somente no caso do 'if' executar apenas 1 comando

if(hour <= 12)
  console.log("Seja bem vindo!")
  console.log("Bom dia!")
// Observação: para o caso de omissão de chaves, ele vai considerar apenas como sendo parte do if a linha seguinte, do contrário vai descartar os demais comandos, nesse exemplo, o "Bom dia!" não irá aparecer

