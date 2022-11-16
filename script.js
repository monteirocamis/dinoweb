// pegar elementos do html [X]
// dinossauro pulando  - imagem do dino indo para cima [x]
// evento de tecla do teclado pressionada  [x] 
// dinossauro subindo [x]
// dinossauro descendo  [x]

// cactus aparecendo da direita pra esquerda , de forma aleatoria 
//fim de jogo quando dinossauro ocupa mesmo espaço do cactus

// aparece texto quando dino encosta no cactus 


const dino = document.querySelector(' .dino ');
const background = document.querySelector(' .background ')



// ----- dino logic ----- // 

function pegarEventoTeclado( event ){
    if(event.keyCode === 32 ){
        //console.log( " tecla espaço pressionado  ")
        pular()
    }
} 

document.addEventListener('keyup' , pegarEventoTeclado )

let position = 0;

function pular(){
    
    let subidaIntervalo = setInterval(  () => {

        //topo do pulo
        if( position >= 200){
          clearInterval(subidaIntervalo)

          let descidaIntervalo = setInterval(() =>{
              //chao
              if( position <= 0 ){
                  clearInterval(descidaIntervalo)
                 //descida
                }else{
                    position -= 20
                    dino.style.bottom = position + 'px'
                 }

            } , 20 )
        }
        //subida
     position += 20
     dino.style.bottom = position + 'px' 

    } ,20 )
}

// ----- cactus logic ----//

