import http from "node:http";

const server = http.createServer((request, response) => { 
  const { method } = request // desestruturação para pegar o método HTTP da requisição
  return response.writeHead(200).end("Hello World!: " + method);
  // Definimos o tipo de retorno do status code, tratando então o tipo de resposta 
})

server.listen(3333) 