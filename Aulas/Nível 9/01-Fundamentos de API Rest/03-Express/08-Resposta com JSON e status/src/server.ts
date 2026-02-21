import express from "express";

const PORT = 3333; // Caixa alta para constantes de configurações, como portas, URLs, etc.

const app = express();
app.use(express.json()) // Habilitando o Express para interpretar requisições com corpo no formato JSON

app.get("/products", (request, response) => {
  const {page, limit} = request.query
  response.send(`Product ${page} de ${limit}`);
})

app.post("/products", (request, response) => {
  const {name, price} = request.body //Atribuindo tudo o que é enviado no corpo da requisição para uma variável
  response.status(201).json({name, price}) //Retorna a resposta em forma de JSON, com os dados do produto criado e status 201 (created)
})

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))