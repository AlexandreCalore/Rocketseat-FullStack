// Manipulando atributos dos elementos da DOM

const input = document.querySelector("input")

input.setAttribute("disabled", true) // Nesse método, passamos 2 parâmetros, nome do atributo e valor do atributo

input.setAttribute("type", "file") 

// Além de atualizar, conseguimos remover um atributo

input.removeAttributeAttribute("id")