// Foi instalado uma versão específica 

// versão instalada: npm install json-server@1.0.0-alpha.17

// localhost:3000/products é o endereço da API que queremos consumir

//Consumindo API dentro do JS

//const response = fetch("http://localhost:3333/products")
//.then((data) => console.log(data))
//.then((response) => response.json()) //Utilizamos o fetch para fazer requisições (comando padrão do JS), sendo uma promise. JSON - Retorna o JSON/Conteúdo do response

//console.log(response) // precisa estar 

//http = local
//https = remoto


//Utilizando fetch com async e await
async function fetchProducts() {
  const response = await fetch(`http://localhost:3333/products`)
  const data = await response.json()
  console.log(data)
}

async function fetchProductById(id) {
  const response = await fetch(`http://localhost:3333/products/${id}`)
  const data = await response.json()
  console.log(data)
}


fetchProductById("3")