import http from "node:http";

const server = http.createServer((request, response) => { 
  return response.end("Hello World!"); //Sempre se faz necessário dar um retorno para que o servidor saiba que a resposta foi finalizada
})

server.listen(3333) 
// Iniciar o servidor do node com o comando --watch, dessa forma é possível ao atualizar o arquivo, ele automaticamente refletir as mudanças no servidor sem precisar reiniciar manualmente