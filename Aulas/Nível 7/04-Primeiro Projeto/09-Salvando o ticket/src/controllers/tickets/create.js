import {randomUUID} from "node:crypto"

export function create({request, response, database}){ // Quando os parametros estão entre chaves, é porque estamos usando desestruturação. Podemos com isso então passar os paramatros em qualquer ordem, prevenindo qualquer tipo de erro.
  const { equipment, description, user_name } = request.body

  const ticket = {
    id: randomUUID(),
    equipment,
    description,
    user_name,
    status: "open",
    created_at: new Date(),
    updated_at: new Date(),
  }

  database.insert("tickets", ticket)

  return response.writeHead(201).end("Criado com sucesso")
}