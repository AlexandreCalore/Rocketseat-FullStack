# Express — Resumo de Estudo

## O que é o Express
Express é um **framework para Node.js**.

Framework = conjunto de ferramentas que facilita o desenvolvimento.

O Express é:
- Minimalista.
- Flexível.
- Focado em requisições e respostas HTTP.

---

## Problema usando Node puro
Com Node puro é necessário:

- Lidar manualmente com chunks do body.
- Reconstruir o corpo da requisição.
- Criar lógica para extrair:
  - Query params
  - Route params
- Fazer validações manualmente.
- Implementar parsing de JSON.
- Criar estrutura própria de roteamento.

Isso aumenta complexidade e código repetitivo.

---

## O que o Express resolve
Express já fornece recursos prontos para:

- Ler `req.body` (JSON automaticamente tratado).
- Acessar `req.query`.
- Acessar `req.params`.
- Criar rotas de forma simples.
- Trabalhar com middlewares.
- Organizar melhor a aplicação.

Reduz código manual e aumenta produtividade.

---

## Principais características

### 1. Minimalista e Flexível
- Não impõe estrutura rígida.
- Permite organizar o projeto conforme necessidade.
- Fornece apenas o essencial para APIs.

---

### 2. Métodos HTTP Utilitários
Permite criar rotas de forma direta:

- `app.get()`
- `app.post()`
- `app.put()`
- `app.delete()`

Facilita a criação de APIs REST.

---

### 3. Sistema de Roteamento
- Estrutura leve.
- Fácil definição de endpoints.
- Permite uso de middlewares por rota ou globalmente.
- Pode ser modularizado.

---

## Benefícios práticos
- Menos código repetitivo.
- Maior clareza.
- Desenvolvimento mais rápido.
- Estrutura mais organizada.
- Melhor manutenção.

---

## Conclusão
Express abstrai a complexidade do Node puro no tratamento de requisições HTTP.  
Ele fornece uma base eficiente para criar APIs robustas com menos esforço e maior organização.
