// EMAIL LINK

function getEmailLink() {
    let local = "herrmanntrine";
    let domain = "gmail.com";
    return "mailto:" + local + "@" + domain;
}

// NAME TYPEWRITER FUNCTIONS

function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

async function typeWord(word, id, delay) {
    const letters = word.split("");
    let i = 0;

    while (i < letters.length) {
        await wait(delay);
        document.getElementById(id).innerHTML += letters[i];
        i++;        
    }

    return;
}

async function deleteWord(id, delay) {
    const word = document.getElementById(id);
    const letters = word.innerHTML.split("");
    let i = 0;

    while (letters.length > 0) {
        await wait(delay);
        letters.pop();
        word.innerHTML = letters.join("");
        i--;
    }
}

async function wordAnimation(word, id, delay) {
    while (true) {
        await typeWord(word, id, delay);
        await wait(1500);
        await deleteWord(id, delay);
        await wait(500);
    }
}

wordAnimation("Trine.", "name", 200);

// SLIDESHOW

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}