
var weddingDate = new Date("Apr 30, 2026 24:00:00").getTime();

setInterval(function(){

var now = new Date().getTime();
var distance = weddingDate - now;

var days = Math.floor(distance / (1000 * 60 * 60 * 24));
var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((distance % (1000 * 60)) / 1000);

updateBox("days", days);
updateBox("hours", hours);
updateBox("minutes", minutes);
updateBox("seconds", seconds);

},1000);

function updateBox(id,value){

const box = document.getElementById(id);

box.innerHTML = value;

box.parentElement.classList.add("animate");

setTimeout(()=>{
box.parentElement.classList.remove("animate");
},300);

}
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

/* 🎵 Play music */
const music = document.getElementById("bgMusic");
if(music){
music.play().catch(()=>{});
}

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

/* Auto change hero slide every 3 seconds */
setInterval(function(){
    nextSlide();
}, 3000);

function showCeremony(type) {
    const section = document.getElementById("ceremonies");
    const info = document.getElementById("ceremony-info");

    const data = {
        sikka: {
            img: "images/lagantika.jpg",
            title: "Sikka Ceremony",
            text: "Sikka ceremony is a sacred ritual where the groom is welcomed and blessed by the bride’s family. It symbolizes acceptance and blessings for the marriage."
        },
        haldi: {
            img: "images/haldi.jpg",
            title: "Haldi Ceremony",
            text: "Haldi ceremony involves applying turmeric paste to the bride and groom for purification and glowing skin. It symbolizes protection from evil."
        },
        mehndi: {
            img: "images/mehndi.jpg",
            title: "Mehndi Ceremony",
            text: "Mehndi ceremony is celebrated with henna designs on the bride’s hands and feet. It symbolizes love, joy, and prosperity."
        },
        chaak: {
            img: "images/chaak.jpg",
            title: "Chaak Ceremony",
            text: "Chaak is a traditional ritual where sacred items are prepared for wedding ceremonies."
        },
        bhaat: {
            img: "images/bhaat.jpg",
            title: "Bhaat Ceremony",
            text: "Bhaat ceremony is performed by the bride's maternal family where they bless the bride and bring gifts."
        },
        wedding: {
            img: "images/wedding.jpg",
            title: "Wedding Ceremony",
            text: "The wedding ceremony includes sacred rituals like pheras around the holy fire which bind the couple in marriage."
        },
        vidai: {
            img: "images/vidaai.jpg",
            title: "Vidaai Ceremony",
            text: "Vidai marks the emotional farewell of the bride from her parental home as she begins her new life."
        }
    };

    const ceremony = data[type];

    // Update info box content
    info.innerHTML = `<h3>${ceremony.title}</h3><p>${ceremony.text}</p>`;

    // Show the info box
    info.classList.add("show");

    // Update section background
    section.style.backgroundImage = `linear-gradient(rgba(255,250,245,0.9), rgba(255,250,245,0.9)), url(${ceremony.img})`;
}

// Lightbox
function openFullImage(img) {
  const lightbox = document.getElementById("fullImageLightbox");
  const fullImg = document.getElementById("fullImage");
  fullImg.src = img.src;
  lightbox.style.display = "flex";
}

function closeFullImage() {
  document.getElementById("fullImageLightbox").style.display = "none";
}

// Horizontal scroll
const scrollContainer = document.querySelector(".scroll-container");
const scrollStep = 300; // pixels to move per arrow click

function scrollGallery(direction) {
  if (!scrollContainer) return;
  scrollContainer.scrollBy({
    left: direction * scrollStep,
    behavior: "smooth"
  });
}

// Auto-scroll with pause on hover
let autoScrollInterval = setInterval(() => {
  if (!scrollContainer) return;
  scrollContainer.scrollBy({ left: 1, behavior: "smooth" });
}, 20);

// Pause auto-scroll when mouse is over the container
scrollContainer.addEventListener("mouseenter", () => clearInterval(autoScrollInterval));
scrollContainer.addEventListener("mouseleave", () => {
  autoScrollInterval = setInterval(() => {
    scrollContainer.scrollBy({ left: 1, behavior: "smooth" });
  }, 20);
});
