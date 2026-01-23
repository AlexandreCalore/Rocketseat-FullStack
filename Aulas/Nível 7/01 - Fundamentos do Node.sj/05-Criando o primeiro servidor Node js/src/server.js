import http from "node:http";

const server = http.createServer((request, response) => { //conseguimos acessar tanto o request quanto o response de quem fez a solicitação
  return response.end("Hello World!"); //finaliza a resposta enviando uma mensagem
})

server.listen(3333) //numero da porta que o server vai atender as requisições

// Basicamente você abre o servidor na porta 3333 e quando alguém fizer uma requisição para esse servidor, ele vai responder com "Hello World!"