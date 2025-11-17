//O método some() testa se ao menos um dos elementos no array passa na condição e retorna um valor true ou false

//Exemplo de array de idades.

const ages = [15,30,39,29]

const result = ages.some((age) => age >= 18)
console.log(result) //Retorna true pois pelo menos 1 item do array atendeu a condição 