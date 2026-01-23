import http from "node:http";

const server = http.createServer((request, response) => { 
  return response.end("Hello World!"); 
})

server.listen(3333) 

//Criamos nosso própio comando npm assim por dizer, assimilando ao comando 'dev' que deve executar o servidor em modo de desenvolvimento com o --watch para reiniciar automaticamente ao salvar as mudanças no código fonte 