//Para usar a funcionalidade de calc, vamos importar o módulo calc.

import {sum, multiply} from "./calc.js"
//Explicação: Estamos importando {precisando declarar as funções que queremos compartilhar dentro da função, e posteriormente traze-las no import} e citar de qual módulo queremos trazer as funções.

console.log("4 * 4 =", multiply(4,4))
console.log("4 + 4 =", sum(4,4))