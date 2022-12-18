let toogle = document.getElementById("toogle");
let body = document.querySelector("body");

toogle.onclick = function(){
    toogle.classList.toggle('active');
    body.classList.toggle('active');

    if (body.className === 'active'){
        document.style.setproperty('--dark-maincolor', '#008EFF');
    
    }
}

