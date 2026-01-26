import http from "node:http";

const server = http.createServer((request, response) => { 
  const { method } = request // desestruturação para pegar o método HTTP da requisição
  return response.end("Hello World!: " + method);
  // retorno da api: Hello World!: GET 
})

server.listen(3333) 