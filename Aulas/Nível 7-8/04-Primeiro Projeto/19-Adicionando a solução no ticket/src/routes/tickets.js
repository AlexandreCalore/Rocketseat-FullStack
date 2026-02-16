import { create } from "../controllers/tickets/create.js"
import { index } from "../controllers/tickets/index.js"
import { update } from "../controllers/tickets/update.js"
import { updateStatus } from "../controllers/tickets/updateStatus.js"

export const tickets = [
  {
    method: "POST",
    path: "/tickets",
    controller: create
  },
  {
    method: "GET",
    path: "/tickets",
    controller: index  
  },
  {
    method: "PUT",
    path: "/tickets/:id",
    controller: update  
  },
    {
    method: "PATCH",
    path: "/tickets/:id/close",
    controller: updateStatus,  
  }
]
/** 
  Aqui estamos criando uma lista de rotas para o recurso de tickets.
  Cada objeto da lista tem um método, um path e um controller.
  O método é o tipo de requisição que a rota vai aceitar (GET, POST, PUT, DELETE).
  O path é a url que a rota vai ser acessada.
  O controller é a função que vai ser executada quando a rota for acessada.
  Neste caso, a rota vai criar um ticket e retorna uma mensagem de sucesso.
  O controller recebe dois parâmetros, o request e o response.
  O request é o objeto que contém todas as informações da requisição, como o corpo e as headers.
  O response é o objeto que vai ser usado para enviar a resposta da requisição.
*/