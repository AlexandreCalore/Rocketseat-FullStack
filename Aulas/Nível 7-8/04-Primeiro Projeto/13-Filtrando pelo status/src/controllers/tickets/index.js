export function index({ request, response, database}){
  const {status} = request.query

  const filters = status ? { status } : null

  const tickets = database.select("tickets", filters) // Seleciona todos os tickets do banco de dados
  
  return response.end(JSON.stringify(tickets)) // Retorna os tickets em formato JSON
}