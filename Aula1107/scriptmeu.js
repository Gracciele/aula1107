/*Criar um sistema onde o user indica quantos lances de escadas ele quer, com o valor desenha as escadas no console.
Exemplo:

User solicita 3 lances
*
**
***

Bônus:
permitir que o use defina qual 'material' da escada.

Exemplo:
user define que quer 3 lances de escada com #
#
##
### */

let escadas = prompt('Quantos lances de escadas você quer?');
let material = prompt('Qual símbolo deseja que construa sua escada?');

let contador = 0;

let escadas2 = material;

while(contador < escadas ){
    
    console.log(escadas2);
    escadas2  = material + escadas2;
    contador = contador + 1;

    
}

console.log('Saiu do laço');