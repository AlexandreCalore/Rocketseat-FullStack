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
  response.send(`Produto ${name} com preço ${price} criado com sucesso!`);  
})

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))