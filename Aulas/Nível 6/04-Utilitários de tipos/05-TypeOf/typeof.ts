interface Product { //definindo tipagem a partir de algo
  id: number,
  name: string
}

const product1: Product = {id: 1, name: "teclado"}

const prodcut2: typeof product1 = {id:2, name: "mouse"} //criamos e definimos que a tipagem dele seria igual ao produto 1

//útil para quando vai usar uma biblioteca/recurso externo e quer reaproveitar uma tipagem dessa bibilioteca