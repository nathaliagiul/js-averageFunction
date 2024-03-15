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

    const msgSucess = `A média do(a) aluno(a) ${student.name} é: ${mediaStudent}\n
    Parabéns, ${student.name}! Você foi aprovado(a) no concurso!`;
    const msgTryAgain =  `A média do(a) aluno(a) ${student.name} é: ${mediaStudent}\n
    Não foi dessa vez, ${student.name}! Tente novamente!`;

    mediaStudent >= 7 ? alert(msgSucess) : alert(msgTryAgain);
}
