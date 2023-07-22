function mudar_personagem()
{
    let imagem = document.getElementById('person__imagem')
    let nome = document.getElementById('person_name')

    const personagem = {
        0 : "imagens/Ryuuji.png",
        1 : "imagens/Taiga.png",
        2 : "imagens/Minori Kushieda.png",
        3 : "imagens/Kitamura.png",
        4 : "imagens/Ami.png"
    }

    const nomes = {
        0 : "Ryuuji",
        1 : "Taiga",
        2 : "Minorin",
        3 : "Kitamura",
        4 : "Ami"
    }

    const cores_txt = {
        0 : "rgb(0, 0, 107)",
        1 : "rgb(247, 162, 51)",
        2 : "rgb(255, 32, 32)",
        3 : "rgb(41, 41, 41)",
        4 : "rgb(15, 15, 255)"
    }

    const random1 = Math.floor(Math.random() * 5)

    imagem.setAttribute('src', personagem[random1])

    nome.innerText = nomes[random1]

    nome.style.color = cores_txt[random1]

}