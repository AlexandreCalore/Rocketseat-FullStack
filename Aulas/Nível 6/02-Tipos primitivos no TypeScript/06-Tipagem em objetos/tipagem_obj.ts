let user: { //declaramos seus tipos
  name: string,
  age: number,
  urlAvatar?: string
} 
= 
{ 
  name: "Alexandre", //declaramos seus valores
  age: 22 
}

/*
function signIn(email: string, password: string){
  //Lógica de conectar o usupario na aplicação
}
*/

function signIn({ email, password}:{email: string, password: string}){
  //Tipamos o tipo de cada variável
}

signIn({email: "calore@gmail.com", password: "123"})