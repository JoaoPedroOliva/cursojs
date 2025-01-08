//Validações:
// Validar se o numero está entre 1 e 100
// Não permitir numero repetirdos
// Não permetira numeros vazio

//Função adicionar
//Adicionar irá adicionas os números no Select

let add = document.getElementById("tnum");
let lista = document.getElementById("flista");
let res = document.getElementById("res");
let valores = [];

function isNumero(n) {
  if (Number(n) >= 1 && Number(n) <= 100) {
    return true;
  } else {
    return false;
  }
}

function inLista(n, l) {
  if (l.indexOf(Number(n)) != -1) {
    return true;
  } else {
    return false;
  }
}

function adicionar() {
  if (isNumero(num.value) && !inLista(num.value, valores)) {
  }
}

function finalizar(array) {}
// Função finalizar
// Quantidade de numeros
// Maior valor
// Menor valor
// Soma dos valores
// Media dos valores
