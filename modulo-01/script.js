const nome = "Arthur";
const cidade = "Assis Chateaubriand";
const dataDeNascimento = 2010;

const data = new Date();
const anoAtual = data.getFullYear();

const idade = anoAtual - dataDeNascimento;

const textoResultado = `Olá, meu nome é ${nome}, moro em ${cidade} e nasci em ${dataDeNascimento} ou seja, tenho ${idade} anos`;

const saida = document.querySelector("#saida");
console.log(textoResultado)
saida.innerText = textoResultado;