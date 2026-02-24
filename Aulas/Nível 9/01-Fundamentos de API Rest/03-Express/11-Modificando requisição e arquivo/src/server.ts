import express from "express";
import { myMiddleware } from "./middleware/my-middleware";


const PORT = 3333; // Caixa alta para constantes de configurações, como portas, URLs, etc.

const app = express();
app.use(express.json()) // Habilitando o Express para interpretar requisições com corpo no formato JSON

// Se quisermos aplicar o middleware para todas as rotas, podemos usar o app.use() sem especificar um caminho, ou seja, ele será aplicado globalmente.

//app.use(myMiddleware) // Aplicando o middleware globalmente para todas as rotas

app.get("/products", (request, response) => {
  const {page, limit} = request.query
  response.send(`Product ${page} de ${limit}`);
})

//No caso, iremos aplicar a essa função em especifico ao identificar que está tentando bater nesta rota, ou seja, o middleware só será aplicado para essa rota específica, e não para todas as rotas da aplicação. Sendo a função Next acionada para chamar automaticamente a proxima função.
app.post("/products", myMiddleware, (request, response) => {
  const {name, price} = request.body //Atribuindo tudo o que é enviado no corpo da requisição para uma variável
  response.status(201).json({name, price, user_id: request.user_id}) //Retorna a resposta em forma de JSON, com os dados do produto criado e status 201 (created)
})

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))