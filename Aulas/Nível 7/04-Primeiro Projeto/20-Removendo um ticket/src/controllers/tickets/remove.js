export function removed({request, response, database}){
  const { id } = request.params

  database.delete("tickets", id)

  return response.end(id)
}