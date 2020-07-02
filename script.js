let cards = document.querySelectorAll('.card');
let modal = document.querySelector('.modal');
let imageBig;
let idImage;

cards.forEach((card)=>{
    card.addEventListener('click',()=>{
        modal = document.querySelector('.modal');
        modal.style.display = 'block';
        imageBig = document.querySelector('.image-big');
        idImage = card.querySelector('img').getAttribute('src').split('.')[0];
        console.log(idImage);
        imageBig.style.backgroundImage = `url(${idImage[0]}.jpg)`;
        imageBig.style.backgroundSize = 'cover';
        imageBig.style.backgroundOrigin = 'bottom left';
    })
})

// modal.addEventListener('click',()=>{
//     modal.style.display = 'none';
// })

window.onclick = function(event) {
    
    if (event.target == modal) {
      modal.style.display = "none";
    }
}

let anterior = document.querySelector('.anterior');
let proximo = document.querySelector('.proximo');

anterior.addEventListener('click',()=>{
    let fotoAnterior = idImage - 1;

    if(fotoAnterior < 1)
        fotoAnterior = 6;
    
    idImage = fotoAnterior;

    imageBig.style.backgroundImage = `url(${fotoAnterior}.jpg)`;
    imageBig.style.backgroundSize = 'cover';
    imageBig.style.backgroundOrigin = 'bottom left';
})
proximo.addEventListener('click',()=>{
    let fotoAnterior = idImage + 1;

    if(fotoAnterior > 6)
        fotoAnterior = 1;
    
    idImage = fotoAnterior;

    imageBig.style.backgroundImage = `url(${fotoAnterior}.jpg)`;
    imageBig.style.backgroundSize = 'cover';
    imageBig.style.backgroundOrigin = 'bottom left';
})
