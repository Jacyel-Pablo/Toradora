var taiga_ft = ["../img_Selecao_de_personagens/Taiga/Taiga 1.png", "../img_Selecao_de_personagens/Taiga/Taiga 2.png", "../img_Selecao_de_personagens/Taiga/Taiga 3.png", "../img_Selecao_de_personagens/Taiga/Taiga 4.png", "../img_Selecao_de_personagens/Taiga/Taiga 5.png"]
var sentido_seta = 0
var imagem = document.getElementById("container__imagem")
var numero_img = document.getElementById("numero_img")

function seta_esquerda()
{
    if (sentido_seta == 0) {
        sentido_seta = 4
    } else {
        sentido_seta -= 1
    }

    imagem.setAttribute("src", taiga_ft[sentido_seta])
    numero_img.innerText = `${sentido_seta + 1}/5`
}

function seta_direita()
{
    if (sentido_seta == 4) {
        sentido_seta = 0
    } else {
        sentido_seta += 1
    }

    imagem.setAttribute("src", taiga_ft[sentido_seta])
    numero_img.innerText = `${sentido_seta + 1}/5`
}