let num = 2;

num = num - 1;

console.log('o número agora vale ', num);
num /= 2;
console.log('o número agora vale ', num);
num += 1;
console.log('o número agora vale ', num);
num -= 1;


//mensagem
let msn = 'Lista de compras:';
msn += 'Alface';
msn += '\n alcool';
msn += '\n fósforo';
msn += '\n abraçadeiras';
msn += '\n fita silver tape';
msn += '\n Materias para os alunos do IIW25';

//Operadores lógicos
// > < >= <= === !== == !===

const conceito = 7;

const aprovado = nota >= 6;
console.log("Aprovado: ", aprovado);
/*

console.log(5 === '5');
console.log(5 == '5');
console.log(5 == '10');
console.log(0 == '');
console.log(0 == false);


&& - E (AND)
|| - OU (OR)
 ! - NÃO (NOT)
*/

console.log(nota >= 6 && frequencia)

let media = 8.0;
let frequencia = 8.0;
const aprovadoPorNota = media >= 6;
const aprovadoPorFrequencia = frequencia >= 75;
const aprovado = aprovadoPorNota && aprovadoPorFrequencia;
console.log(`Aprovado? ${aprovado}`)
//tarefa 1 - converter o códifo acima em uma

//verificando intervalos
//const nome = 87;
//console.log(num >= 0 && num <= 100);

//Funcções matemáticas - Objeto Math
/* 
round(x) - arredonda para o inteiro mais próximo
floor(x) - arredonda para baixo
ceil(x) - arredonda para cima
trunc(x) - descarta a parte decimal
abs(x) - retorna o valor absolutor
sqrt(x) - raíz quadrada aproximada ou exata
max(x) - maior valor;
min(x) - menor valor;
random(x) - Número aleatório entre 0 (incluindo) e 1(excluído);
PI - numero PI
*/


const dado = Math.floo(Math.random() * 6) + 1;