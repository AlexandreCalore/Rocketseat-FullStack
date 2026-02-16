// Importa as rotas do arquivo routes.js
import { routes } from "../routes/index.js"

// Função middleware que intercepta a requisição para decidir qual controlador executar
export function routeHandler(request, response) {
  // Procura dentro da lista, a rota.
  // Percorre o array de rotas importado para encontrar uma que corresponda ao método e URL da requisição atual
  const route = routes.find((route) => {
    return route.method === request.method && route.path === request.url
  })

  // Se a rota for encontrada, executa a função controladora (controller) definida nela
  if(route){
    return route.controller({request, response})
  }

  // Se nenhuma rota for encontrada, retorna erro 404
  return response.writeHead(404).end("Rota não encontrada")
}

