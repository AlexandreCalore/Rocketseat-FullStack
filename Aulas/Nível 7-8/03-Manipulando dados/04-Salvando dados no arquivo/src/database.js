import fs from 'node:fs/promises' //usando o /promises para usar async/await

const DATABSE_PATH = new URL("db_json" + import.meta.url)

export class Database {
  database = {}

  constructor() {
    fs.readFile(DATABSE_PATH, 'utf-8').then((data) => {
      console.log(JSON.parse(data))
    }).catch(() => this.persist()) //Lê o arquivo de banco de dados
    this.persist 
  }
  persist() {
    fs.writeFile(DATABSE_PATH, JSON.stringify(this.database)) 
  }

  insert(table, data) {
      if (Array.isArray(this.database[table])) { 
        this.database[table].push(data)
      } else{
        this.database[table] = [data]
      }

      this.persist() //chama a função para salvar os dados no arquivo toda vez que inserir um novo dado
  }

  select(table){
    return this.database[table]
  }
}