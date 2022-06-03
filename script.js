const mario = document.querySelector('.mario')

const pipe = document.querySelector('.pipe')
const pipe2 = document.querySelector('.pipe2')

let overtela = document.querySelector('.over-tela')

let gameboard = document.querySelector('.game-board')

let clouds = document.querySelector('.clouds')



let death = 0


pipe.style.animation = 'none'
clouds.style.animation = 'none'
clouds.style.display = 'none'


function contagem() {
    let Tcont = document.querySelector('#cont')
    let cont = 5
    parseInt(cont)

    let interCont = setInterval( () => {
        --cont
        Tcont.textContent = cont
    }, 1000)

    setTimeout(() => {
        clearInterval(interCont)
        let contagem = document.querySelector('.contagem')
        contagem.style.display = 'none'
    }, 5 * 1000)
}

contagem()

function pular() {
    mario.classList.add('jump')
    setTimeout(() => {
        mario.classList.remove('jump')
    } ,500)
}

gameOver()




setTimeout( () => {
    if (death == 0) {
        modificar()

    }
} ,17 * 1000)





function inicializacao() {

setTimeout( () => {

    pipe.style.animation = 'pipe-animation 1.5s infinite linear'
    clouds.style.animation = 'nuvens 8.5s infinite linear'
    clouds.style.display = 'block'

    points()

    console.log(death)
}, 5 * 1000)

}

inicializacao()


function gameOver() {
    let x = setInterval(() => {
    
        let marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '')
        let pipePosition = pipe.offsetLeft
        let pipePosition2 = pipe2.offsetLeft

    
        if (marioPosition < 102 && pipePosition <= 120 && pipePosition > 0) {
    
            death = 1

            pipe.style.left = `${pipePosition}px`
            pipe.style.animation = 'none'
            pipe2.style.left = `${pipePosition2}px`
            pipe2.style.animation = 'none'
    
            mario.style.bottom = `${marioPosition}px`
            mario.style.animation = 'none'
    


            mario.src = 'img/game-over.png'
            mario.style.width = '75px'
            mario.style.marginLeft = '50px'
    
            overtela.style.display = 'block'

    
            window.addEventListener('keydown', (evento) => {
    
                if (evento.key == ' ') {
                    location.reload()
                }
            })
    
        } else if (marioPosition < 102 && pipePosition2 <= 120 && pipePosition2 > 0) {

            pipe.style.left = `${pipePosition}px`
            pipe.style.animation = 'none'
            pipe2.style.left = `${pipePosition2}px`
            pipe2.style.animation = 'none'

            death = 1

    
            mario.style.bottom = `${marioPosition}px`
            mario.style.animation = 'none'
    
            mario.src = 'img/game-over.png'
            mario.style.width = '75px'
            mario.style.marginLeft = '50px'
    
            overtela.style.display = 'block'

    
            window.addEventListener('keydown', (evento) => {
    
                if (evento.key == ' ') {
                    location.reload()
                }
            })
        }

    } ,10)
}


    
function modificar() {                
            
            pipe2.style.display = 'block'
    
            gameboard.style.background = 'linear-gradient(360deg, #FFF 20%, black)'
            clouds.style.animationDuration = '5s'
            pipe.style.animationDuration = '1.2s'
            pipe2.style.animationDuration = '1.2s'
            pipe2.style.animationDelay = '640ms'
    
    
            gameOver()
    
}
    
function points() {
    let Tpoint = document.querySelector('#ponto')
    let point = 1
    

        var timerPoint = setInterval(() => {

            if(death == 1) {
                clearInterval(timerPoint)
            }

            point = point + 1
            Tpoint.textContent = point
        } ,100)

        let timePoint2 = setTimeout(() => {
            var timerPointMod = setInterval(() => {
                
                if(death == 1) {
                    clearInterval(timerPointMod)
                    clearTimeout(timePoint2)
                }

                clearInterval(timerPoint)
                point = point + 1
                Tpoint.textContent = point

            } ,50)
        },12 * 1000)


}




window.addEventListener('keydown', pular)