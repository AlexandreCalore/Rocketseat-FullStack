import express from "express";

const PORT = 3333; // Caixa alta para constantes de configurações, como portas, URLs, etc.

const app = express();

app.get("/products/:id/:user", (request, response) => {
  const { id, user } = request.params; // Acessando o valor do parâmetro "id" da rota

  response.send(`Product ID: ${id}, do usuário : ${user}`);
})

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))