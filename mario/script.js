let mario = document.querySelector('.mario')
let cano = document.querySelector('.cano')
let nuvens = document.querySelector('nuvens')
let telaFim = document.querySelector('.telaFim')
let botaoReiniciar = document.querySelector('.botaoReiniciar ')

console.log('====PARADA 01===')
console.log('Mario: ', mario)
console.log('Cano:', cano)
console.log('Nuvens:',nuvens)
console.log('Tela De Fim :', telaFim)
console.log(' botao Reiniciar', botaoReiniciar )


function pular(){
    mario.classList.add('pular')

    setTimeout(function(){
        mario.classList.remove('pular')
    }, 500)
}

document.addEventListener('keydown',function(){
    console.log('Tecla pressionada! Chamada função pular()')

    pular()
})