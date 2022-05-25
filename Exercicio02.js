/* Nesse desafio você irá criar uma lista de **estudantes** e, cada estudante dentro dessa lista, deverá conter os seguintes dados:

- nome;
- nota da primeira prova;
- nota da segunda prova.

Depois de criada a lista:

- [ ]  Crie uma **função** que irá calcular a média das notas de cada aluno;
- [ ]  Supondo que a média, para esse concurso é **7**, verifique **se** cada aluno obteve sucesso ou não em entrar no concurso e mostre uma mensagem na tela.*/

let nota1
let nota2


let students = [
  {
    name: "Verônica",
    nota1: 8,
    nota2: 8
  },
  {
    name: "Pedro",
    nota1: 4,
    nota2: 7
  },
  {
    name: "Flávia",
    nota1: 9,
    nota2: 8
  },
  {
    name: "Rafael",
    nota1: 10,
    nota2: 10
  }
]

//function media(nota1, nota2) {
 // return ((nota1 + nota2)/2)
//}

function media(nota1, nota2) {
  return (nota1 + nota2)/2
}

for (let student of students) {

if ( media(student.nota1, student.nota2) >= 7){
function printStudentsMedia(student) {
  return `
    A média do(a) aluno(a) ${student.name} é: ${media(student.nota1, student.nota2)}
    Parabéns ${student.name}! Você foi aprovado!
  `
} 
} else {
  function printStudentsMedia(student) {
    return `
      A média do(a) aluno(a) ${student.name} é: ${media(student.nota1, student.nota2)}
      Não foi dessa vez ${student.name}! Tente na próxima!
    `
}
}



  let mediamessage = printStudentsMedia(student)
  alert(mediamessage)
}