/* Criar um sistema que avalie se o aluno foi aprovado ou não em uma matéria. Pergunte ao user:
- nome
- a matéria
- a nota
Com os valores recebidos, verificar se o aluno teve nota superior a média (6). A saída do programa deve falar:
"Parabéns, o aluno X foi aprovado na matéria Y" 
OU 
"Parece que a nota do aluno X na matéria Y foi insuficiente"

BÔNUS:

Criar uma segunda condição onde o aluno é aprovado "pelo sistema" se a nota foi 0.5 abaixo da média. Nesse caso o programa deve dizer:
"O aluno X foi aprovado na matéria Y pelo sistema" */

let nomeDoAluno = prompt ("Qual seu nome?");
let materia = prompt ("Qual a matéria?");
let nota = prompt ("Qual a sua nota?");

let media = 6;

if (Number(nota) >= media) {
    /* alert('Parabéns, o aluno '+ nomeDoAluno + 'aprovado em '+ materia);*/
    alert(`O aluno ${nomeDoAluno} foi aprovado na matéria ${materia}. Parabéns!`)
    
  
}

else if (Number(nota) >= media - 0.5) {
   /* alert('O aluno' + nomeDoAluno + ' foi aprovado na matéria '+ materia + ' pelo sistema'); */
    alert(`O aluno ${nomeDoAluno} foi aprovado na matéria ${materia} pelo sistema.` );


}

else  {
    /*alert('Você não foi aprovado');*/
    alert(`Parece que a nota do aluno ${nomeDoAluno} na matéria ${materia} foi insuficiente.`);
    }
