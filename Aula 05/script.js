/*let contador = 0;

while (contador <= 20) {
    contador++; //contador = contador + 1
    console.log(`Número vale: ${contador}`);
}
console.log('\nTerminiou');

let senha = prompt('Senha')
while (senha !== 'ifpr') {
    console.error('Senha incorreta!');
    senha = prompt('Senha: ')
}

//Exemplo 5

for (let contador = 0; contador <= 10; contador++) {
    console.log(`Número vale ${contador}`)
}

//Exemplo 6
let contador = -2

for (; contador < =228; contador++) {
    console.log(`Número vale ${contador}`)
}

//Exemplo 7

for (let i = 100; i >= 65; i--) {
    console.log(`Número vale`)
}

//Exemplo 9

for (let i = 100; i >= 65; i-= 2) {
    console.log(`Número vale`)
}

let nota;
do {
    nota = Number(promtp('Digite um número de 1 a 10:'));
} while (Number.isNaN(nota) || nota < 0 || nota > 10)
console.log(`${nota} número válido`)


let total = 0;

while (true) {
    const entrada = prompt('Valor do item (ou "fim" para encerrar:)');    
}


//Exemplo 12

for (let tabuada = 1; tabuada <= 10; tabuada++) {
    console.log(` -------- Tabuada do ${tabuada} -------- `)
        for (let x = 1; x <= 10; x++) {
            console.log(`${tabuada} X ${x} = ${tabuada * x}`)
        }
}

//exemplo 19

for (let linha = 1; linha <= 8; linha++) {
    let desenho = '';
    for (let col = 1; col <= linha; col++) {
        desenho += '*\n'
    }
    console.log(desenho)
}

//Exercícico 927
/*
    Crie um algorítimo que solicite quantos alunos há na turma e em seguida, na nota de cada um
*/
/*
const qtde = Number(prompt('Quantos alunos em sala'));
let soma = 0;
let maior = -Infinity;
let menor = Infinity;
let aprovados = 0;

for (let j = 1; j <= qtde; ) {
    const nota = Number(prompt(`Nota do aluno ${j}`))
    console.log(`Soma vale ${soma}`)
    console.log(`maior vale ${maior}`)
    console.log(`menor vale ${menor}`)
    console.log(`aprovados vale ${aprovados}`)
    
    soma += nota;
    if  (nota > maior) maior = nota;
    if  (nota < menor) maior = nota;
    if  (nota >= 60) aprovados++;
}

console.log(`Média Geral: ${(soma / qtde).toFixed(1)}`);
console.log(`Maior: ${maior}`)
console.log(`Menor: ${menor}`)
console.log(`Quantidade de aprovados: ${aprovados}`);
*/

//Crie um algorítimo para sortear um número entre 1 e 10, inclusivos. O usuário tenta adivinhar e, ao adivinhar, mostre quantas
//tentaivas ele necessitou para acertar o número. Insita uma condição onde o usuári delimita qunatas chances ele terá
//para acertar o númer

const numeroAleatorio = Math.floor((Math.random() * 10) + 1)
let tentativas = 0;
while (true) {
    const numeroInserido = Number(prompt(`Tente adivinha o número de um a dez`));
    if (numeroInserido == numeroAleatorio) {break;}
    tentativas++;
    alert("Você errou")
}
console.log(`Você acertou em ${tentativas} tentativas`)