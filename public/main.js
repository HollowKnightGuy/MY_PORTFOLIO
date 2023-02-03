

const toggle = document.getElementById('toggleDark');
const body = document.querySelector('body');
const imagenes = document.getElementsByTagName('img');

toggle.addEventListener('click', function(){
    this.classList.toggle('bi-brightness-high-fill');
    if(this.classList.toggle('bi-moon')){
        body.className = 'light-theme';
        body.style.transition = '.5s';
        for(let i = 0; i < imagenes.length; i ++){
            let imagen = (imagenes[i].src.split("dark").join("light"));
            imagenes[i].setAttribute('src',imagen);
            }
        }
    else{
        body.className = 'dark-theme';
        body.style.transition = '.5s';
        for(let i = 0; i < imagenes.length; i ++){

            let imagen = (imagenes[i].src.split("light").join("dark"));
            imagenes[i].setAttribute('src',imagen);
            }
    }
});


document.querySelector('.toggle')
        .addEventListener('click', function() {
  this.classList.toggle('activate');
  document.querySelector('.menu').classList.toggle('menu-column');
});

$(document).ready(function() {
    if ($(window).scrollTop() > 20) {
        $(".fill-container").css("animation-play-state", "running");//.fadeOut();
      } else {
        $(".fill-container").css("animation-play-state", "paused");//.fadeOut();
    
      }

})
    



// AOS.init();