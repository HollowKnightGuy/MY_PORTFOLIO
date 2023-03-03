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
  document.querySelector('.menu-mine').classList.toggle('menu-column');
});

// CONTROL WHEN THE ANIMATION OF THE BARS STARTS TO OCCUR IN ABOUT ME

$(document).on("scroll", function(){
    if ($(document).scrollTop() > 700) {
        for(let i = 1; i < 6; i++){
            $(".fillcont"+i).css("animation-play-state", "running");//.fadeOut();
        }
    }
    if ($(document).scrollTop() > 1400) {
        console.log($(document).scrollTop());
        for(let j = 1; j < 3; j++){
            console.log(  $(".lang-bars"+j));
            $(".lang-bars"+j).css("animation-play-state", "running");
        }
    }
});


const input1 = document.getElementById('nameinput');
const input2 = document.getElementById('phoneinput');
const input3 = document.getElementById('emailinput');
const input4 = document.getElementById('messageinput');



input1.addEventListener('blur', function () { 
    input1.previousElementSibling.style.color = 'var(--text3-color)';
})


input2.addEventListener('blur', function () { 
    input2.previousElementSibling.style.color = 'var(--text3-color)';
})

input3.addEventListener('blur', function () { 
    input3.previousElementSibling.style.color = 'var(--text3-color)';
})

input4.addEventListener('blur', function () { 
    input4.previousElementSibling.style.color = 'var(--text3-color)';
})

AOS.init();