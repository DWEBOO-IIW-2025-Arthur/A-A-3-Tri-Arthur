conceito1 = prompt("Insira o primeiro conceito: (A, B, C ou D)");
conceito2 = prompt("Insira o segundo conceito: (A, B, C ou D)");
conceito3 = prompt("Insira o terceiro conceito: (A, B, C ou D)");

frequencia1 = Number(prompt("Insira a primeira frequencia: (0% - 100%)"));
frequencia2 = Number(prompt("Insira a segunda frequencia: (0% - 100%)"));
frequencia3 = Number(prompt("Insira a terceira frequencia: (0% - 100%)"));

function checkAprovado(conceito, frequencia) {
    function toNota(conceito) {
        const notaValues = {
            A: 4,
            B: 3,
            C: 2,
            D: 1,
        }
        return notaValues[conceito.toUpperCase];
    }
    return ((toNota(conceito) >= 2) && (frequencia >= 75)) ? 'aprovado' : 'reprovado';
}

console.log(`o aluno foi ${checkAprovado(conceito1, frequencia1)} no primeiro trimestre`)
console.log(`o aluno foi ${checkAprovado(conceito2, frequencia2)} no segundo trimestre`)
console.log(`o aluno foi ${checkAprovado(conceito3, frequencia3)} no terceiro trimestre`)
