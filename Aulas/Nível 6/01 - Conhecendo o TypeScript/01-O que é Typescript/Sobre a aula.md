# JavaScript

O js é uma linguagem não tipada. Isto é, podemos criar uma variável para receber conteúdo de diferentes tipos.

É uma característica bastante flexível e que tornou o JS popular. Mas, para o crescimento consistente da aplicação, é crucial definir regras. Ai entra o TypeScript

# TypeScript

Adiciona tipagem ao JS

No final, o código TypeScript é convertido para JS permitindo ser executado em qualquer lugar em que o JS é executado. 

# TypeScript se torna JS

# 1

```typescript```

type Result = "pass" | "fail"

function verify(result: Result) {
  if (result === "pass") {
    console.log("Passed")
  } else {
    console.log("Failed")
  }
}

>>>>>>>>>

```types are removed```

type Result = "pass" | "fail"

function verify(result: Result) {
  if (result === "pass") {
    console.log("Passed")
  } else {
    console.log("Failed")
  }
}

>>>>>>>>

```JS file```

function verify(result) {
  if (result === "pass") {
    console.log("Passed")
  } else {
    console.log("Failed")
  }
}

# Vantagens de se utilizar o TypeScript

Feedback mais rápido de erros;

Antecipa erros que seriam visto em execução;

Ajuda a manter o código consistente;

Ajuda no trabalho em times;

Processo de refatoração mais fácil;

Recurso de Autocomplete;

Pode adotar gradualmente typescript em uma base de código;