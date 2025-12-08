# API

API = Application Programming Interface, sendo uma interface que disponibiliza um conjunto de funcionalidades para serem utilizadas.

Exemplo: CEP, precisão de tempo, cotação de moedas etc.

## Relação Cliente e Servidor

           requisição 
Clitente -----------> API
Clitente <----------- API
            resposta 

# Utilizando uma API

A   =             rota/caminho            = B
APP = https://meuservidor.com.br/produtos = API

Separando a rota em 3 partes: 

https              : protocolo de comunicação
meuservidor.com.br : endereço do servidor
products           : recurso da API

# Métodos HTTP

GET    =  LEITURA
POST   =  CRIAÇÃO
PUT    =  ATUALIZAÇÃO
DELETE =  DELEÇÃO
PATCH  =  ATUALIZAÇÃO PARCIAL

# JSON

JSON (JS Object Notation), é uma notação de objetos utilizado para representar dados.

É amplamente utilizado na comunicação entre servidores e clientes.

Exemplo de JSON:

{
  "id": 1,
  "nome": "Xandow",
  "ativo": true,
  "itens": [
    {
      "tipo": "circulo",
      "raio": 3.0
    },
    {
      "tipo": "quadrado",
      "lado": 2.0
    }
  ]
}