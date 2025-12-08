class Animal{
  constructor(name){
    this.name = name
  }

  makeNoise(){
    console.log("Algum Som genérico do animal")
  }
}

class Dog extends Animal {
  //Não tem nada
}

const cachorro = new Dog("Zeus")
console.log(cachorro.name)
cachorro.makeNoise() 

class Cat extends Animal {
  //Não tem nada
}

const gato = new Cat("Mel")
console.log(gato.name)
gato.makeNoise() 