let num = [5, 8, 2, 9, 3];
console.log(num);
console.log(`O vetor tem ${num.length} posições`);
console.log(`O vetor ordenado é ${num.sort()}`);
let i = num.indexOf(4);
if (i == -1) {
  console.log(`O valor não foi encontrado!`);
} else {
  console.log(`O valor está na posição ${i}`);
}
