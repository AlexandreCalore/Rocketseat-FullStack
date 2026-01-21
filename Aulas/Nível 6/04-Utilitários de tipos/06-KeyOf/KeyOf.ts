const icons = {
  "home": "./path/home.svg",
  "add": "./path/add.svg",
  "remove": "./path/remove.svg",
}

type Icon = typeof icons

const icon: keyof Icon = "add" //ao invés de passarmos um objeto com chave e valores, com o keyoff trabalhamos apenas com as chaves do objeto.