let media = Number(prompt("Insira a primeira nota"))
media += Number(prompt("Insira a segunda nota"))
media += Number(prompt("Insira a terceira nota"))

media = media / 3
media = Math.round(media * 10) / 10

alert(media)
