console.log(new Date()) //nesse caso retorna a data e hora atual 

console.log(new Date(2025, 9, 8)) //Quando vamos passar a data específica, temos que trabalhar com ano, mês (obs: o mês sempre começa no 0 e não no 1 (0-11)), dia

//Definindo data e hora

console.log(new Date(2025, 9, 8, 13, 11, 50)) //Mesma lógica para data, somente acrescentando a hora no final 00:00:00

console.log(new Date("2025-09-08T12:00:00")) //Passando os mesmos dados, em forma de string (obs: para esse método, ele mantém o mês de acordo com o número passado)

console.log(new Date("July 3, 2025 13:00:00")) //Passando data por meio de  string, contudo de forma extensa