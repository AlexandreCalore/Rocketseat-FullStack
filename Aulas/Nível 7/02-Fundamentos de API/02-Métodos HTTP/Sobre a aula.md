# Métodos HTTP — Resumo de Estudo

## Relação cliente-servidor
No desenvolvimento de APIs existe uma comunicação entre **cliente** e **servidor**.
- O cliente faz **requisições**.
- A API, que está no servidor, **processa** e **retorna respostas**.
- A comunicação segue o protocolo **HTTP**, que é o padrão.

## Obrigatoriedade de resposta
Toda requisição feita a uma API **deve gerar uma resposta**.
- Pode ser sucesso ou erro.
- Se não houver resposta, o cliente fica aguardando até ocorrer **timeout**.
- Isso vale para qualquer tipo de cliente: web, mobile ou desktop.

## Requisição e ação
Além de enviar dados, o cliente precisa informar **qual ação deseja executar**.
Essa ação é definida pelos **métodos HTTP**.

## O que são métodos HTTP
Métodos HTTP indicam a intenção da requisição.
Eles são **semânticos**, ou seja, deixam claro o que será feito na API.

## Principais métodos HTTP
- **GET**: leitura ou consulta de dados.
- **POST**: criação de novos recursos.
- **PUT**: atualização completa de um recurso.
- **PATCH**: atualização parcial de um recurso.
- **DELETE**: remoção de um recurso.

Cada método representa uma ação específica dentro da API.

## Mesma rota, ações diferentes
Uma mesma rota pode executar ações diferentes dependendo do método HTTP.

Exemplo conceitual:
- `GET /products` → lista produtos.
- `POST /products` → cria um novo produto.

A diferenciação da ação acontece **pelo método HTTP**, não pela rota.

## Responsabilidade do desenvolvedor
O comportamento de cada método é definido pelo desenvolvedor da API.
Exemplo:
- GET → buscar dados.
- POST → cadastrar dados.
- PUT → atualizar.
- DELETE → remover.
- PATCH → atualizar parcialmente um produto por exemplo.

## Conteúdo da resposta
Uma resposta pode:
- Conter dados (lista, objeto, ID).
- Não conter dados, apenas indicar sucesso ou erro.

Mesmo sem conteúdo, a resposta deve indicar o resultado da requisição.

## Status Codes HTTP
Os **HTTP Response Status Codes** indicam o resultado da requisição.

### Faixas de status
- **1xx**: informativo.
- **2xx**: sucesso.
- **3xx**: redirecionamento.
- **4xx**: erro do cliente.
- **5xx**: erro do servidor.

## Exemplos comuns
- **200**: sucesso.
- **201**: recurso criado.
- **301 / 302**: redirecionamento.
- **400**: requisição inválida.
- **401**: não autorizado.
- **404**: recurso não encontrado.
- **500**: erro interno do servidor.

## Uso prático
Status codes adicionam uma camada extra de informação à resposta.
Eles permitem ao cliente entender:
- Se a requisição foi bem-sucedida.
- Se houve erro.
- Se o erro foi do cliente ou do servidor.

## Conclusão
Métodos HTTP definem **o que** a API deve fazer.
Status codes indicam **como** a requisição foi processada.
Juntos, garantem comunicação clara, padronizada e previsível entre cliente e API.
