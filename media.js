/*
Nesse desafio você irá criar uma lista de **estudantes** e, cada estudante dentro dessa lista, deverá conter os seguintes dados:

- nome;
- nota da primeira prova;
- nota da segunda prova.

Depois de criada a lista:

- [ ]  Crie uma **função** que irá calcular a média das notas de cada aluno;
- [ ]  Supondo que a média, para esse concurso é **7**, verifique **se** cada aluno obteve sucesso ou não em entrar no concurso e mostre uma mensagem na tela.

Mensagem sugerida:
A média do(a) aluno(a) x é:
Não foi dessa vez, x! Tente novamente!
Parabéns, x! Você foi aprovado(a) no concurso!
*/

const students = [
    {
      name: "Luiz Johnson",
      undOne: 5.5,
      undTwo: 7,
    },
    {
      name: "Maria Miller",
      undOne: 6,
      undTwo: 8,
    },
    {
      name: "João Williams",
      undOne: 4,
      undTwo: 6.5,
    },
    {
      name: "Ana Smith",
      undOne: 7,
      undTwo: 9,
    },
    {
      name: "Pedro Moore",
      undOne: 5,
      undTwo: 6,
    }
  ];

const media = (undOne, undTwo) => (undOne + undTwo)/2;

for(let student of students){
    const mediaStudent = media(student.undOne, student.undTwo);
    if(mediaStudent >= 7){
        alert(`A média do(a) aluno(a) ${student.name} é: ${mediaStudent}\n
        Parabéns, ${student.name}! Você foi aprovado(a) no concurso!`);
    } else {
        alert(`A média do(a) aluno(a) ${student.name} é: ${mediaStudent}\n
        Não foi dessa vez, ${student.name}! Tente novamente!`)
    }
}