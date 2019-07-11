let lancesDeEscadas = Number(prompt('Quantos lances de escada você deseja?'));

while(isNaN(Number(lancesDeEscadas))){
    lancesDeEscadas = prompt(`Você digitou "${lancesDeEscadas}". O programa só aceita valores numéricos nessa etapa. Por favor, digite quantos lances de escada você gostaria`);
}

let material = prompt('Qual o material de sua escada?');
let desenho = '';

let i = 0;

while (i < lancesDeEscadas) {
    desenho = desenho + material;
    console.log(desenho);

i++;
}