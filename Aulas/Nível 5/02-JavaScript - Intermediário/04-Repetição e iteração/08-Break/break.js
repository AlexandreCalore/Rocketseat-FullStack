//Break encerra a execução da repetição ou witch para seguir para a instrução seguinte

let option = 3

switch (option){
  case 1:
    console.log("Cadastrar")
    break
  case 2:
    console.log("Cadastrar")
  case 3:
    console.log("Remover")
  default:
    console.log("Opção inválida")
    break
} //Quando não tenha o break, se a opção 1 for válida, ele vai executar todas as demais.

//Agora vamos usar o break para finalizar uma repetição

for (let i = 0; i < 10; index++) {
  console.log(i)
  if (i == 5){
    break //Basicamente usado para encerrar o processo
  } 
}