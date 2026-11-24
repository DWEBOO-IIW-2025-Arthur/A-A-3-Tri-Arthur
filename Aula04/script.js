const temp = Number(prompt("Temperatura agora (°C):"));
if (temp > 21) {
    console.log('Muito quente para mim');
    console.log('Morri.');
} else {
    console.log('Condição Agradável\n Não morri!');
}

console.log('fim.');

//exercício 01 - Depois colocarei no Class

/*
Crie um programa que receba 3 conceitos (A, B, C ou D) e 3
frequências (0 - 100%) e verifique se no final a/o aluna/o está
aprovado
*/
/*

const nota = Number(prompt('Nota (0,0 a 100'));
if (nota >= 90) {
    console.log('Conceito A');
} else if (nota >= 70) {
    console.log('Conceito B');
} else if (nota >= 50) {
    console.log('Conceito C');
} else {
    console.log('Conceito D');
}

if (media >= 70 && frequencia >= 75) {
    console.log('Aprovado, não fez mais que a obrigração');
} else if (frequencia < 75) {
    console.log('Reprovado por faltas, sem choro!');
} else {
    console.log('Em recuperação')
}

//Exemplo 4

const idade = Number(prompt('Qual a sua idade?'));
if (idade >= 16) {
    const temTitulo = confirm('Você possui título de eleitor');
} else {
    console.log('você não tem idade pra voltar');
}

const idade = 18;
let tipo;

if (idade >= 18) {
    tipo = 'Adulto';
} else {
    tipo = 'Criança';
}
console.log('Você é ', tipo)
*/

//usando ternário;

const idade = Number(prompt('Qual a sua idade?'));
const tipo = idade >= 18 ? 'adulto' : 'criança';
console.log('Você é ', tipo);


const opcao = prompt('Selecione um item do menu\n1 - Pastel\n2 - Coxinha\n 3 - Suco')