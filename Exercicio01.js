/*você irá solicitar ao usuário que ele insira **dois números** e, a partir daí, calcular:

- [ ]  A soma dos dois números;
- [ ]  A subtração dos dois números;
- [ ]  A multiplicação dos dois números;
- [ ]  A divisão dos dois números;
- [ ]  O resto da divisão dos dois números;

Fácil até aqui, né? Bora se desafiar? 👀 🧑‍🚀

- [ ]  Verifique se a soma dos dois números é par ~~(ou ímpar)~~;
- [ ]  Verifique se os dois números inseridos são iguais*/

let number1 = prompt("Informe o primeiro número:");
let number2 = prompt("Informe o segundo número:");

number1 = Number(number1);
number2 = Number(number2);

let numberSum = number1 + number2;
alert("A soma dos dois números é: " + numberSum);

let numberSub = number1 - number2;
alert("A subtração dos dois números é: " + numberSub);

let numberMult = number1 * number2;
alert("A multiplicação dos dois números é: " + numberMult);

let numberDiv = number1 / number2;
alert("A divisão dos dois numeros é: " + numberDiv.toFixed(2));

let numberRest = number1 % number2;
alert("O resto dadivisão dos dois números é: " + numberRest);

if(numberSum % 2 == 0) {
  alert("A soma dos dois números é par: " + numberSum);
} else {
  alert("A soma dos dois números é ímpar: " + numberSum);
};

if(number1 == number2) {
  alert("Os números informados são iguais: " + number1 + "=" + number2)
} else {
  alert("Os números informados são diferentes: " + number1 + "!=" + number2)
};









