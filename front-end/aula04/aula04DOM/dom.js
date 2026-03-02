//O **DOM  (Document Object Model)** é a representação do HTML em forma de *árvore de objetos**


//Isso permite que o JavaScript:
// - Leia elementos da página
// - Modifique textos
// - Troque imagens
// - Reaja a cliques
// - Crie elementos novos


//O navegador transforma o HTML em objetos manipuláveis


//==============================
// SELECIONANDO ELEMENTOS DO DOM
//==============================


//selecionar por ID
let titulo = document.getElementById("titulo")
let subtitulo = document.getElementById("subtitulo")
let paragrafo = document.getElementById("paragrafo")
let imagem = document.getElementById("imagemteste")


//selecionar por classe
let caixas = document.getElementsByClassName("box")


//Mostrando no console para o aluno visualizar
console.log(titulo)
console.log(caixas)
console.log(imagem)


//===============================
// Função para alterar o conteúdo
//===============================


function alterar(){
    //alterando os textos
    titulo.innerText = "Novo Título 💕"
    subtitulo.innerText = "Subtitulo alterado com sucesso"
    paragrafo.innerText = "O texto do paragrafo foi modificado!"


    //alterando elemento da classe
    caixas[0].innerText = "Primeiro parágrafo alterado"
    caixas[1].innerText = "Segundo parágrafo alterado"


    //alterando a imagem
    imagem.src = "https://t3.ftcdn.net/jpg/04/17/48/16/360_F_417481640_bko4B3dkXqRtRI2Qlr3304yNqdGwG5Bi.jpg"
}








