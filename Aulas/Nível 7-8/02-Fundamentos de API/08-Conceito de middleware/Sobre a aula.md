# Middleware — Resumo de Estudo

## Conceito de Middleware
Middleware é um **interceptador de requisições HTTP**.  
Ele atua entre o cliente e a função final que será executada na API.

## Posição no fluxo da requisição
Fluxo simplificado:
- Cliente envia requisição.
- A requisição passa por um ou mais middlewares.
- Após isso, a função final da API é executada (ou não).

O middleware sempre é executado **antes** da lógica principal da rota.

## Analogia do segurança
- Cliente → usuário do sistema.
- Segurança → middleware.
- Função da API → lógica final da rota.

O “segurança” analisa a requisição antes de permitir que ela prossiga.

## Acesso à requisição
O middleware tem acesso completo a:
- Dados da requisição.
- Dados da resposta.

Com isso, ele pode:
- Ler informações.
- Modificar o conteúdo.
- Adicionar novos dados à requisição.

## Funções de um middleware
Um middleware pode:
- Validar permissões do usuário.
- Verificar autenticação.
- Adicionar informações na requisição.
- Modificar dados antes da execução da rota.
- Interromper a execução e retornar uma resposta.

## Interrupção do fluxo
O middleware pode encerrar o ciclo requisição–resposta:
- Exemplo: usuário sem permissão.
- A API responde imediatamente com “não autorizado”.
- A função final da rota não é executada.

## Continuidade do fluxo
Se a validação passar:
- O middleware permite que a requisição continue.
- A execução segue para o próximo middleware ou para a função final da rota.

## Encadeamento de middlewares
- Uma requisição pode passar por vários middlewares.
- Cada middleware pode executar lógica específica.
- O fluxo segue até que a requisição seja finalizada ou interrompida.

## Características principais
- Middlewares podem executar qualquer código.
- Podem alterar objetos de requisição e resposta.
- Controlam o fluxo da requisição dentro da API.

## Conclusão
Middleware é um componente central no back-end.  
Ele permite controle, validação e modificação das requisições antes da execução da lógica principal da API.
