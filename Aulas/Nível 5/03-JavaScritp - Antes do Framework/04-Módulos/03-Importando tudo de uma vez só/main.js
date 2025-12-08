//Para usar a funcionalidade de calc, vamos importar o módulo calc.

import * as calc from "./calc.js"
//Explicação: Podemos apenas usar * para trazer todas as funções, definindo um alias para elas. Dessa forma instanciamos o módulo dentro do alias, e com isso podemos usar seus métodos de maneira mais simples.

console.log("4 * 4 =", calc.multiply(4,4))
console.log("4 + 4 =", calc.sum(4,4))