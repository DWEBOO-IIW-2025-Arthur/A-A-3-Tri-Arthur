/*
Um ano é bissexto se for divisível por 4, exceto os divisíveis por 100 — a não ser que também sejam divisíveis por 400.
Peça um ano e mostre se ele é bissexto usando uma única expressão lógica. Teste com 2024, 1900 , 2000 e 2026.
*/

function anoBissexto(ano) {
    const eBissexto = ((ano % 4 == 0) && (ano % 100 != 0)) || ano % 400 == 0
    return eBissexto
}
