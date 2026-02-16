export function index({ request, response, database}){
  const tickets = database.select("tickets") // Seleciona todos os tickets do banco de dados
  return response.end(JSON.stringify(tickets)) // Retorna os tickets em formato JSON
}