import { Router } from "express";
import { myMiddleware } from "../middleware/my-middleware";

const productsRouter = Router() // Iniciamos as rotas do Express dentro dessa variável.

//Aqui, trazemos todas as rotas que estavam no server.ts para esse arquivo, e substituimos no lugar de app, a constante.

productsRouter.get("/", (request, response) => {
  const {page, limit} = request.query
  response.send(`Product ${page} de ${limit}`);
})

//No caso, iremos aplicar a essa função em especifico ao identificar que está tentando bater nesta rota, ou seja, o middleware só será aplicado para essa rota específica, e não para todas as rotas da aplicação. Sendo a função Next acionada para chamar automaticamente a proxima função.
productsRouter.post("/", myMiddleware, (request, response) => {
  const {name, price} = request.body //Atribuindo tudo o que é enviado no corpo da requisição para uma variável
  response.status(201).json({name, price, user_id: request.user_id}) //Retorna a resposta em forma de JSON, com os dados do produto criado e status 201 (created)
})

export { productsRouter } //Exportando as rotas para serem utilizadas em outros arquivos, como no server.ts, onde iremos importar e usar essas rotas.