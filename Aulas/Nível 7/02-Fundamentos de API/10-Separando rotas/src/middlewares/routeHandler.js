import {routes} from '../routes.js';

// Função middleware que intercepta a requisição para decidir qual controlador executar
export function routeHandler(request, response) {
  // Procura dentro da lista, a rota.
  // Percorre o array de rotas importado para encontrar uma que corresponda ao método e URL da requisição atual
  const route = routes.find((route) => {
    return route.method === request.method && route.path === request.url
  }) 

  if(route){
    // Se a rota for encontrada, executa a função controladora (controller) definida nela
    return route.controller(request, response)
  }

  return response.writeHead(404).end("Rota não encontrada! Método e URL: " + method + url)
  // Se nenhuma rota for encontrada, retorna erro 404. (Ajuste: usamos request.method e request.url pois as variáveis soltas não existem aqui)
  return response.writeHead(404).end("Rota não encontrada! Método e URL: " + request.method + request.url)
}