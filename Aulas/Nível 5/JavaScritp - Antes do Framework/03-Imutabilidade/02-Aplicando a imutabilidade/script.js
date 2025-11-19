const adress1 = {
  street: "Av. Brail",
  number: 20
}

//Isso é uma referência, e não uma cópia. Estamos apenas apontando o endereço da memória do adress1 para o adress2
const adress2 = adress1


adress2.number = 30 //Muda o valor da propiedade nos dois objetos por conta de apontarem para o mesmo local na memória

console.log(adress1,adress2)

//Agora, vamos criar um novo objeto, aproveitando as propiedades do adress1, mas que não aponta para ao mesmo endereço de memória.

const adress3 = {...adress1}
adress3.number = 40
console.log(adress1,adress3)

//Ou

const adress3 = {...adress1, number:40 }
console.log(adress1,adress3)

//Exemplo com array

const list1 = ["Apple", "Banana"]
const list2 = list1
console.log(list1, list2)

list2.push("Orange")
console.log(list1, list2) //Adiciona em ambas as listas por conta que estamos apontando para o mesmo endereço da memória

const list3 = list1
list3 = [...list1, "Orange"]
