import http from "node:http";

import { jsonHandler } from "./middlewares/jsonHandler.js";
import { routeHandler } from "./middlewares/routeHandler.js";

// Função que será executada toda vez que uma requisição for feita ao servidor
async function listener(request, response){
  // Chamamos o middleware para tratar a requisição
  await jsonHandler(request, response);
  routeHandler(request, response);
}

http.createServer(listener).listen(3333) // Iniciado o servidor sem precisar da constante server

