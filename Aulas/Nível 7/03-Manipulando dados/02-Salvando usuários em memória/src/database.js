export class Database {
  database = {}
  insert(table, data) {
      if (Array.isArray(this.database[table])) { // Verifica se é um array
        this.database[table].push(data)
      } else{
        this.database[table] = [data]
      }
  }

  select(table){
    return this.database[table]
  }
}