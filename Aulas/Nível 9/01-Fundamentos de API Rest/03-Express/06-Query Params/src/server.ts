import express from "express";

const PORT = 3333; // Caixa alta para constantes de configurações, como portas, URLs, etc.

const app = express();

app.get("/products", (request, response) => {
  const {page, limit} = request.query
  response.send(`Product ${page} de ${limit}`);
})

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))