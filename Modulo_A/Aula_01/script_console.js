//Acesse o site do Google e rode esses comandos no console do chrome


alert("Olá Mundo!")

//Muda a cor de fundo do site para preto
document.body.style.background = 'black' 

//Mudar a cor da imagem para preto e branco
document.querySelector('img#hplogo').style.filter = 'grayscale(100%)' 

//Mudar a visibilidade do logo do google para 'escondido'
document.querySelector('img#hplogo').style.visibility = 'hidden'


document.querySelector('.feed-post-header-chapeu').innerText = 'Alterei o texto'