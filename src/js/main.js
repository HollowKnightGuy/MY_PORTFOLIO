const toggle = document.getElementById('toggleDark');
const body = document.querySelector('body');
const imagenes = document.getElementsByTagName('img');
const sources = document.getElementsByTagName('source');
let heightcalc;

if(screen.width > 1000 && screen.width <= 1300){
    heightcalc = 750;
}


if(screen.width > 1301 && screen.width <= 1600){
    heightcalc = 750;
}


else if(screen.width > 1601 && screen.width <= 1900){
    heightcalc = 710;
}

else if(screen.width > 1901 && screen.width <= 2200){
    heightcalc = 800;
}

else if(screen.width > 2201){
    heightcalc = 950;
}


// TAKES CARE OF THE LIGHT AND DARK THEME WORKS
toggle.addEventListener('click', function(){
    this.classList.toggle('bi-brightness-high-fill');
    if(this.classList.toggle('bi-moon')){
        body.className = 'light-theme';
        body.style.transition = '.5s';
        }
    else{
        body.className = 'dark-theme';
        body.style.transition = '.5s';
    }
});
// CHANGE THE CLASS TO THE NAV 
document.querySelector('.toggle').addEventListener('click', function() {
    this.classList.toggle('activate');
    document.querySelector('.menu-mine').classList.toggle('menu-column');
});

// CONTROL WHEN THE ANIMATION OF THE BARS STARTS TO OCCUR IN ABOUT ME

$(document).on("scroll", function(){
    console.log($(document).scrollTop());
    if ($(document).scrollTop() > heightcalc) {
        for(let i = 1; i < 6; i++){
            $(".fillcont"+i).css("animation-play-state", "running");//.fadeOut();
        }
    }
});



AOS.init();