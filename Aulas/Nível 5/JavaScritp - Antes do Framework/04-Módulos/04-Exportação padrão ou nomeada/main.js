//Para usar a funcionalidade de calc, vamos importar o módulo calc.

import batata, {multiply} from "./calc.js"
// Para importar funções "export default", podemos importa-la sem precisar envolve-la em chaves ou especificar seu nome. Por exemplo, estamos importando sum, com o nome de batata, devido a ser default.

console.log("4 * 4 =", multiply(4,4))
console.log("4 + 4 =", batata(4,4))