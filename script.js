var weddingDate = new Date("Apr 30, 2026 20:00:00").getTime();

var timer = setInterval(function(){

var now = new Date().getTime();

var distance = weddingDate - now;

var days = Math.floor(distance / (1000 * 60 * 60 * 24));
var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

document.getElementById("countdown").innerHTML =
days + " Days " + hours + " Hours Left";

},1000);

function createPetal(){

const petal = document.createElement("div");

petal.classList.add("petal");

petal.innerHTML = "🌸";

petal.style.left = Math.random()*100 + "vw";

petal.style.animationDuration = (6 + Math.random()*6) + "s";

petal.style.fontSize = (18 + Math.random()*22) + "px";

document.querySelector(".petals").appendChild(petal);

setTimeout(()=>{
petal.remove();
},12000);

}

setInterval(createPetal,300);

function openInvitation(){

document.getElementById("invitationCard").style.display="none";

document.getElementById("mainContent").style.display="block";

}

function openEnvelope(){

const envelope = document.querySelector(".envelope");

envelope.classList.add("open");

setTimeout(function(){

document.getElementById("envelopeScreen").style.display="none";
document.getElementById("mainContent").style.display="block";

},1200);

}

function createParticle(){

const particle = document.createElement("span");

particle.style.left = Math.random()*100 + "vw";
particle.style.animationDuration = (5 + Math.random()*5) + "s";

document.querySelector(".light-particles").appendChild(particle);

setTimeout(()=>{
particle.remove();
},10000);

}

setInterval(createParticle,200);

let slides = document.querySelectorAll(".slide");
let currentSlide = 0;

function showSlide(index){

    slides.forEach(slide => slide.classList.remove("active"));

    currentSlide = index;

    if(currentSlide < 0){
        currentSlide = slides.length - 1;
    }

    if(currentSlide >= slides.length){
        currentSlide = 0;
    }

    slides[currentSlide].classList.add("active");
}

function nextSlide(){
    showSlide(currentSlide + 1);
}

function prevSlide(){
    showSlide(currentSlide - 1);
}

// let slides = document.querySelectorAll(".slide");
// let currentSlide = 0;

// function changeSlide() {

//     slides[currentSlide].classList.remove("active");

//     currentSlide++;

//     if (currentSlide >= slides.length) {
//         currentSlide = 0;
//     }

//     slides[currentSlide].classList.add("active");
// }

// // Run every 5 seconds
// setInterval(changeSlide, 5000);
