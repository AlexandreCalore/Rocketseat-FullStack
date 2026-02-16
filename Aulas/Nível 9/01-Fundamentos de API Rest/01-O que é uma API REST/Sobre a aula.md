# API RESTful — Resumo de Estudo

## Revisão: o que é uma API
API (Application Programming Interface) é uma interface que expõe funcionalidades para serem consumidas por clientes (web, mobile, desktop), sem que o front-end precise conhecer a implementação interna.

Ela recebe requisições, processa no servidor e retorna respostas.

## O que é REST
REST (Representational State Transfer) é um **modelo arquitetural**.

- Não é linguagem.
- Não é framework.
- Não é tecnologia.
- É um conjunto de **diretrizes** para construir aplicações distribuídas usando padrões da web, como HTTP.

Uma API é considerada RESTful quando segue essas diretrizes.

## Objetivo da arquitetura REST
- Simplicidade.
- Padronização.
- Escalabilidade.
- Melhor organização da comunicação cliente-servidor.

## Princípios de uma API RESTful

### 1. Cliente-Servidor
- Separação entre interface (cliente) e armazenamento/processamento (servidor).
- O cliente não se preocupa com regras de negócio ou persistência.
- O servidor não se preocupa com interface.

Essa separação permite evolução independente das partes.

---

### 2. Stateless
- Cada requisição deve conter todas as informações necessárias para ser processada.
- O servidor não armazena estado do cliente entre requisições.
- Cada requisição é independente.

Isso aumenta escalabilidade e previsibilidade.

---

### 3. Resource-Based (Baseado em recursos)
A API é estruturada em torno de **recursos**.

- Recursos são representados por rotas.
- Métodos HTTP indicam a ação sobre o recurso.

Exemplo conceitual:
- `POST /products` → cria produto.
- `GET /products` → lista produtos.
- `PUT /products/:id` → atualiza produto.
- `DELETE /products/:id` → remove produto.

A combinação de rota + método define a operação.

---

### 4. Manipulação por representações
Os recursos não são manipulados diretamente.

- O cliente envia e recebe **representações** do recurso.
- JSON é a representação mais comum.

Exemplo:
- O cliente envia um JSON.
- A API converte e adapta esses dados.
- O banco pode armazenar em outro formato (ex: tabelas relacionais).

JSON representa dados em trânsito, não necessariamente o formato interno de armazenamento.

---

### 5. Sistema em camadas
A arquitetura pode ser organizada em camadas:

- Controladores
- Serviços
- Repositórios
- Banco de dados

Cada camada tem responsabilidade específica.
Isso melhora manutenção, organização e escalabilidade.

---

### 6. Cache
Respostas podem ser armazenadas em cache.

- Evita requisições repetidas desnecessárias.
- Reduz carga no servidor.
- Melhora performance.

O cliente pode reutilizar dados já obtidos quando apropriado.

---

## Conclusão
Uma API RESTful é uma API que segue as diretrizes REST:

- Separação cliente-servidor.
- Comunicação stateless.
- Organização baseada em recursos.
- Uso de representações (ex: JSON).
- Arquitetura em camadas.
- Suporte a cache.

REST não define tecnologia, define princípios.  
Seguir esses princípios resulta em APIs mais organizadas, escaláveis e previsíveis.
