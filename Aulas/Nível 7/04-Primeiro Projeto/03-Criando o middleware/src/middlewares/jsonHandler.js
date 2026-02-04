
// Função que lida a requisição, concatena os chunks recebidos e converte para JSON.
export async function jsonHandler(request, response) {
  // Criamos um array para armazenar os chunks recebidos
  const buffers = []

  // Coletamos todos os chunks recebidos da requisição
  for await (const chunk of request) {
    // Adicionamos cada chunk ao array
    buffers.push(chunk)
  }

  try {
    // Concatenamos todos os chunks e convertemos para string, de string para JSON
    request.body = JSON.parse(Buffer.concat(buffers).toString())
  } catch (error) {
    // Caso ocorra um erro, setamos o body como null
    request.body = null
  }
  // Define o Header de resposta como JSON
  response.setHeader("Content-Type", "application/json")
}
  