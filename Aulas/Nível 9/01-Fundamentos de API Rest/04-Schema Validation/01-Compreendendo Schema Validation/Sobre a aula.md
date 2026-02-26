# Schema Validation — Resumo de Estudo

## Conceito
Schema Validation (validação baseada em esquema) é uma estratégia para validar dados com base em um conjunto de regras previamente definidas.

Essas regras determinam:
- Quais propriedades são esperadas.
- Quais valores são permitidos.
- Qual formato os dados devem seguir.

O conjunto dessas regras é chamado de **schema (esquema)**.

---

## Objetivo
Garantir que os dados recebidos (ex: em uma requisição HTTP) estejam:

- Estruturalmente corretos.
- Com tipos adequados.
- Dentro dos critérios definidos.

Somente dados que atendem ao esquema são considerados válidos.

---

## O que pode ser validado

### 1. Estrutura (propriedades)
- Quais campos são obrigatórios.
- Quais campos são opcionais.
- Nome das propriedades esperadas.

Exemplo:
- `email`
- `password`

---

### 2. Tipo de dado
- string
- number
- boolean
- array
- object

Exemplo:
- Email → string
- Idade → number

---

### 3. Formato
Além do tipo, é possível validar o formato.

Exemplo:
- Email deve conter `@` e domínio válido.
- Senha deve ter tamanho mínimo definido.

---

### 4. Regras adicionais
- Tamanho mínimo ou máximo.
- Intervalo numérico.
- Expressões regulares.
- Valores permitidos.

---

## Exemplo conceitual

### Email
- Tipo: string.
- Deve seguir formato válido de e-mail.

### Senha
- Tipo: string.
- Mínimo de 6 caracteres.

Essas regras são definidas no schema.

---

## Analogia estrutural
Sem um padrão definido, não há como determinar o que é válido.

O schema funciona como o modelo oficial que define:
- Qual é a forma correta.
- Quais características são aceitas.
- O que deve ser rejeitado.

Ele é o parâmetro de validação.

---

## Benefícios
- Evita dados inconsistentes.
- Reduz erros na aplicação.
- Garante previsibilidade.
- Centraliza regras de validação.
- Melhora segurança.

---

## Conclusão
Schema Validation define formalmente a estrutura e as regras que os dados devem seguir.

A validação ocorre comparando os dados recebidos com o esquema definido.

Se os dados não correspondem ao schema, são rejeitados.
Se correspondem, são considerados válidos.