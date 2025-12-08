// O strict mode (modo estrito): ativando esse modo, os erros que eram silenciosos passa a gerar exceções no JS

//exemplo

"use strict"

function showMessage(){
  personName = "Calore"
  console.log("Olá", personName)

  //Aqui simulamos uma situação onde não existia a variavel, e mesmo assim o JS interpretou como se tivesse, acabou criando ela e aplicando o hoisting (içamento) levando para o escopo global. O que era para ser um "erro" acabou por passar direto pelo JS. Para contornar isso, deve-se declarar o termo "use-strict" na função para que ele reclame que a função não existe. Podemos aplica-lo também no escopo global ou na função se desejar.
}

showMessage

class Student {
  get point(){
    return 7
  }
}

/*ATRIBUINDO VALOR A UM MÉTODO QUE NÃO POSSUI SETTER*/

let student = new Student()

student.point = 10 // Se definirmos o "use-strict" no escopo global, aqui ele reclamaria que não podemos setar a propiedade, pois esse método apenas possui getter (pega a informação)

console.log(student.point()) //Cenário correto para chamarmos o método.


/*DELETE DE UM OBJETO QUE NÃO PODEMOS DELETAR*/

delete window.document

function sum(a, a, c) { //passando 2 parametros duplicados
  return a + a + c
}

const result = sum (1,2,3) //Nesse cenário, o 2° parametro duplicado sobrepoem o primeiro, portanto o resultado seria diferente do esperado 
console.log(result)