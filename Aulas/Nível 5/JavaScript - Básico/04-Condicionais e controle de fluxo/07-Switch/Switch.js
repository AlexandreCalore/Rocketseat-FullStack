// Ideal para analisar caso a caso

let option = 1

//colocamos dentro das chaves () a condição a ser analisada
switch (option){
  case 1:
    console.log("Consultar pedido")
    break // Serve para encerrar o comando quando a condição for atendida
  case 2:
    console.log("Falar com atendente")
    break
  case 3:
    console.log("Cancelar pedido")
  default: // uma opção que vai ser executada como padrão acaso não houver valores encontrados.
    console.log("Número incorreto")
}