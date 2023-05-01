let images = document.querySelectorAll(".forder");
let button1 = document.querySelector(".btn1");
let button2 = document.querySelector(".btn2");

let control = 0;

button1.style.display ="none"

function slider(){
    for(i=0; i<images.length; i++){
        images[i].style.transform = `translateX(-${control*100}%)`
    }
   if(control== 1){
    button1.style.display = "block";
   }
  else if(control== 0){
    button1.style.display = "none";
   }
   if(control==6){
    button2.style.display="none";
   }
   else{
    button2.style.display = "block";
   }
}

function nex(){
    control--;
    slider();
}
function pre(){
    control++;
    slider();
}

let box1 = document.getElementById("click1");
let ebox1 = document.getElementById("boxs1");
let icon1 = document.getElementById("icon1");

let box2 = document.getElementById("click2");
let ebox2 = document.getElementById("boxs2");
let icon2 = document.getElementById("icon2");

let box3 = document.getElementById("click3");
let ebox3 = document.getElementById("boxs3");
let icon3 = document.getElementById("icon3");

function open(){
    box1.addEventListener('click', ()=>{
        ebox1.classList.toggle('open');
        icon1.classList.toggle('icon')
    })

    box2.addEventListener('click', ()=>{
        ebox2.classList.toggle('open');
        icon2.classList.toggle('icon')
    })

    box3.addEventListener('click', ()=>{
        ebox3.classList.toggle('open');
        icon3.classList.toggle('icon')
    })
}

open();