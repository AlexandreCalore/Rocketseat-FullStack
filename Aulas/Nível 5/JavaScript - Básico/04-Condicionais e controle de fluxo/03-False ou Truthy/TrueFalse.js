//False = valor falso
//True = considerado verdadeiro em contextos onde um boolean é obrigatóri em cenários de condicionais ou de loop

console.log('### EXEMPLOS DE FALSY ###')
console.log(false 
  ? "Verdadeiro" 
  : "Falso")

console.log(0 
  ? "Verdadeiro" 
  : "Falso")

console.log(-0 
  ? "Verdadeiro" 
  : "Falso")

console.log("" 
  ? "Verdadeiro"  
  : "Falso")

console.log(null 
  ? "Verdadeiro" 
  : "Falso")

console.log(undefined 
  ? "Verdadeiro" 
  : "Falso")

console.log(NaN 
  ? "Verdadeiro" 
  : "Falso")
//Cenários onde os inputs são considerados como falsos.

console.log('### EXEMPLOS DE TRUTHY ###')
console.log(true 
  ? "Verdadeiro" 
  : "Falso")

console.log({} //objeto vazio considerado como true 
  ? "Verdadeiro" 
  : "Falso")

console.log([] //array vazio considerado como true   
  ? "Verdadeiro" 
  : "Falso")

console.log(1 //número inteiro 
  ? "Verdadeiro"  
  : "Falso")

console.log(3.23 
  ? "Verdadeiro" 
  : "Falso")

console.log("Alexandre" 
  ? "Verdadeiro" 
  : "Falso")

console.log(" " //espaço vazio considerado como true  
  ? "Verdadeiro" 
  : "Falso")

console.log("false" //texto "false" vazio considerado como true  
? "Verdadeiro" 
: "Falso")

console.log(-1   
  ? "Verdadeiro" 
  : "Falso")

console.log(Infinity //infinity vazio considerado como true  
  ? "Verdadeiro" 
  : "Falso")