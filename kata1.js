//parte 1
//Fazer uma contagem de 1 a 20
//Chegar no objetivo atraves de uma loop
for (let count = 0; count <= 20; count++) {
  console.log(count);
}
console.log("--------------------------------------------------------");
//parte 2
//retorna os numeros pares de 1 a 20
//usando um laço de repetição e condicional e usar o resto da divisao para chegar ao resultado
for (let countEven = 0; countEven <= 20; countEven++) {
  if (countEven % 2 === 0) {
    console.log(countEven);
  }
}
console.log("--------------------------------------------------------");
//parte 3
//retorna os impares de 1 a 20
//usando laço de repetição e condicional usando o resto da divisão para chegar ao resultado desejado
let countOdd = 0;
while (countOdd <= 20) {
  if (countOdd % 2 === 1) {
    console.log(countOdd);
  }
  countOdd++;
}
console.log("--------------------------------------------------------");
//parte 4
//retornar os numeros multiplos de 5 ate 100
//possivel resolução, usar um laço de repetição e uma condicional para obter o resultado desejado.
let fiveMultiple = 5;
while (fiveMultiple <= 100) {
  if (fiveMultiple % 5 === 0) {
    console.log(fiveMultiple);
  }
  fiveMultiple++;
}
console.log("--------------------------------------------------------");
//parte 5
//retornar todos os numeros ate 100 que forem quadrados perfeitos
//possivel resolução, usar um laço de repetição e uma condicional para chegar ao objetivo.
for (let perfectSquare = 1; perfectSquare <= 10; perfectSquare++) {
  console.log(perfectSquare ** 2);
}

console.log("--------------------------------------------------------");
//parte 6
//retornar os numeros de 20 ate 1, contagem decrescente.
//possivel resolução, usar um laço de repetição.
for (let countDown = 20; countDown >= 1; countDown--) {
  console.log(countDown);
}
console.log("--------------------------------------------------------");
//parte 7
//retornar os numeros pares de 20 ate 1
//possivel resolução, usar um laço de repetição e uma condicional para chegar ao objetivo.
for (let descendingEven = 20; descendingEven >= 1; descendingEven--) {
  if (descendingEven % 2 === 0) {
    console.log(descendingEven);
  }
}

console.log("--------------------------------------------------------");
//parte 8
//retornar os numeros impares de 20 ate 1
//possivel resolução, usar um laço de repetição e uma condicional para chegar a uma resoluição
for (let descendingOdd = 20; descendingOdd >= 1; descendingOdd--) {
  if (descendingOdd % 2 === 1) {
    console.log(descendingOdd);
  }
}
console.log("--------------------------------------------------------");
//parte 9
//retornar os numeros multiplos de 5 fazendo a contagem decrescente a partir do 100
//possivel resolução, usar laço de repetição e condicional para chegar ao resultado
for (
  let descendingFiveMultiple = 100;
  descendingFiveMultiple >= 1;
  descendingFiveMultiple--
) {
  if (descendingFiveMultiple % 5 === 0) {
    console.log(descendingFiveMultiple);
  }
}
console.log("--------------------------------------------------------");
//parte 10
//retornar os quadrados perfeitos contando de tras para frente a partir do 100
//possivel resolução, usar laço de repetição para chegar ao objetivo
for (
  let descendingPerfectSquares = 10;
  descendingPerfectSquares >= 1;
  descendingPerfectSquares--
) {
  console.log(descendingPerfectSquares ** 2);
}
