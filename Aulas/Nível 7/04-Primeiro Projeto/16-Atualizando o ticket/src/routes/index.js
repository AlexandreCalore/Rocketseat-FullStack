import { parseRoutePath } from "../utils/parseRoutePath.js";
import { tickets } from "./tickets.js";

// Exportamos uma nova lista de rotas processadas
export const routes = [...tickets].map((route) => ({
  // 1. Espelhamento (Spread) do Objeto:
  // Copia todas as propriedades originais da rota (method, controller, etc.)
  // para este novo objeto, garantindo que nada se perca.
  ...route,

  // 2. Sobrescrita da Propriedade 'path':
  // Substitui a string original do caminho (ex: "/tickets/:id") pelo
  // retorno da função 'parseRoutePath' (que geralmente devolve um Regex).
  // Isso permite identificar parâmetros dinâmicos na URL.
  path: parseRoutePath(route.path),
}))



//  Este arquivo serve para armazenar todas as rotas da aplicação, despejando-as em uma lista.
