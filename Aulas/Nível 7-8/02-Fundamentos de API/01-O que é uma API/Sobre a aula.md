# Conceito de API — Resumo de Estudo

## O que é uma API
API significa **Application Programming Interface**.  
É uma interface que disponibiliza funcionalidades de uma aplicação sem que o consumidor precise saber como elas foram implementadas internamente.

## Objetivo de uma API
O principal objetivo de uma API é **separar responsabilidades**:
- A lógica e regras de negócio ficam no back-end (API).
- A interface fica no front-end (web, mobile ou desktop).

O front-end consome a API sem conhecer sua implementação interna.

## Exemplo prático
Em um sistema de agendamento médico:
- A API contém regras de negócio, validações e acesso ao banco de dados.
- O front-end apenas envia e recebe dados.
- A mesma API pode ser usada por aplicações web, mobile ou desktop.

## Estrutura básica de uma API
Uma API envolve três elementos principais:
- **Cliente**: quem faz a requisição (web, mobile, desktop).
- **API**: interface que recebe e processa requisições.
- **Servidor**: onde a API está hospedada e executa.

## Analogia do restaurante
- Cliente → usuário do sistema.
- Garçom → API.
- Cozinha → servidor.
- Pedido → requisição.
- Prato pronto → resposta.

O cliente faz o pedido, a API processa no servidor e devolve uma resposta.

## Fluxo de requisição e resposta
1. O cliente envia uma requisição para a API.
2. A API processa a solicitação no servidor.
3. A API devolve uma resposta ao cliente.

A resposta pode ser positiva ou negativa, mas **sempre deve existir**.

## Importância da resposta
Uma API sempre precisa retornar uma resposta.
Sem resposta, o cliente fica aguardando até ocorrer timeout, causando erro na aplicação.

## Comunicação cliente-servidor
A comunicação entre cliente e API segue um padrão chamado **HTTP**, que define como dados são enviados e recebidos.

## Rotas
Uma rota define:
- Uma URL específica.
- Uma funcionalidade da API.
- Um ponto de entrada para requisições HTTP.

Rotas conectam o cliente às funcionalidades da API.

## Protocolo HTTP
HTTP é o protocolo padrão de comunicação entre cliente e servidor.
HTTPS é a versão segura do HTTP, com criptografia.

## URL e seus componentes
Uma URL contém:
- Protocolo (HTTP ou HTTPS)
- Endereço do servidor
- Rota (recurso ou funcionalidade acessada)

Exemplo conceitual:
- Protocolo define como comunicar
- Servidor define onde comunicar
- Rota define o que acessar

## Conclusão
APIs permitem criar sistemas desacoplados, reutilizáveis e escaláveis.  
Elas funcionam como intermediárias entre clientes e servidores, garantindo comunicação padronizada, segura e organizada entre aplicações.
