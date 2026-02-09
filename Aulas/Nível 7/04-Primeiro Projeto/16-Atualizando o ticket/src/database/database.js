import fs from "node:fs"

const DATABASE_PATH = new URL("db.json", import.meta.url) // Para colocar o caminho do arquivo do banco de dados que querenos salvar. Pegando o endereço dinamicamente.
export class Database {
  #database = {}

  construtctor() {
    fs.readFile(DATABASE_PATH, "utf-8")
    .then((data) => {
      this.#database = JSON.parse(data) // Converte a string JSON para um objeto JavaScript
    }) // Se o arquivo existir, ele lê os dados e converte de volta para objeto JavaScript
    .catch(() => {
      this.#persist()
    })    // Se o arquivo não existir, ele cria um novo arquivo com um objeto vazio
  }

  #persist(){
    fs.writeFile(DATABASE_PATH, JSON.stringify(this.#database)) // Converte o objeto JavaScript para uma string JSON e salva no arquivo
  }

  insert({table, data}){ // Vamos criar um método para inserir dados na tabela
    if(Array.isArray(this.#database[table])) { // Antes de salvarmos, precisamos verificar se a tabela já existe
      this.#database[table].push(data) // Se a tabela existir, adicionamos o novo dado ao array existente
    } else {
      this.#database[table] = [data] // Se a tabela não existir, criamos um novo array com o dado
    }

    this.#persist() // Após inserir os dados, chamamos o método #persist para salvar as alterações no arquivo

  }

  select (table, filters){
    let data =  this.#database[table] ?? [] // Se a tabela não existir, retornamos um array vazio

    if(filters){
      data = data.filter(( row ) => {
        return Object.entries(filters).some(([key, value]) => {
          return row[key].tolowerCase().includes(value.toLowerCase())
        }) //entrie basicamente te joga a chave e o valor
      }) // Aplicando filtro na lista
    }
    return data

  }

  update(table, id, data){
    const rowIndex = this.#database[table].findeIndex((row) => row.id === id)

    if(rowIndex > -1){
      this.#database[table][rowIndex] = {
        ...this.#database[table][rowIndex],
        ...data
      }

      this.#persist()
    }
  }
}