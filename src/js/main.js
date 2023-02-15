const toggle = document.getElementById('toggleDark');
const body = document.querySelector('body');
const imagenes = document.getElementsByTagName('img');


// TAKES CARE OF THE LIGHT AND DARK THEME WORKS
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

// CHANGE THE CLASS TO THE NAV 
document.querySelector('.toggle').addEventListener('click', function() {
  this.classList.toggle('activate');
  document.querySelector('.menu').classList.toggle('menu-column');
});

// CONTROL WHEN THE ANIMATION OF THE BARS STARTS TO OCCUR IN ABOUT ME
let done = false;
$(document).on("scroll", function(){
    if(!done){

        if ($(document).scrollTop() > 400) {
            console.log($(document).scrollTop());
            for(let i = 1; i<6; i++)
                $(".fillcont"+i).css("animation-play-state", "running");//.fadeOut();
            }
            let done = true
    }

})



AOS.init();