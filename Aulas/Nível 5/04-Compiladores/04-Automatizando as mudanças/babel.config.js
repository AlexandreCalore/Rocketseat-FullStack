const presets = [
  [
    "@babel/preset-env", //estamos adicionando configurações ao babel, no nosso caso, navegadores que queremos dar suporte
    {
      edge: "17",
      firefox: "60",
      chrome: "67"
    }
  ]
]

module.exports = { presets }
