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

async function typeText(text, id, delay) {
    const chars = text.split("");
    let i = 0;

    while (i < chars.length) {
        await wait(delay);
        document.getElementById(id).innerHTML += chars[i];
        i++;        
    }

    return;
}

async function deleteText(id, delay) {
    const text = document.getElementById(id);
    const chars = text.innerHTML.split("");
    let i = 0;

    while (chars.length > 0) {
        await wait(delay);
        chars.pop();
        text.innerHTML = chars.join("");
        i--;
    }
}

async function typingAnimation(carouselList, id) {
    let i = 0;

    while (true) {
        await typeText(carouselList[i], id, 100);
        await wait(2500);
        await deleteText(id, 100);
        await wait(2000);

        i++;

        if (i >= carouselList.length) {i = 0;}
    }
}


const carouselText = [
    "software engineering",
    "machine learning",
    "full-stack web development",
    "big data"
]

typingAnimation(carouselText, "typewriter__text");

// SLIDESHOW

let slideIndex = [1, 1];
let slideId = ["slides-1", "slides-2"];
let dotId = ["slides-1__dot", "slides-2__dot"];

function showSlides(n, no) {
    let images = document.getElementsByClassName(slideId[no]);
    let dots = document.getElementsByClassName(dotId[no]);
  
    if (n > images.length) {
        slideIndex[no] = 1
    }

    if (n < 1) {
        slideIndex[no] = images.length;
    }
    
    for (let i = 0; i < images.length; i++) {
        images[i].style.display = "none";
    }

    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    
    images[slideIndex[no] - 1].style.display = "block";
    dots[slideIndex[no] - 1].className += " active";
}

function plusSlides(n, no) {
    showSlides(slideIndex[no] += n, no);
}

function currentSlide(n, no) {
    showSlides((slideIndex[no] = n), no);
}

showSlides(1, 0);
showSlides(1, 1);

// SCROLL TO TOP BUTTON

const topButton = document.getElementById("top__button");

function scrollFunc() {
    let y = window.scrollY;

    if (y > 0) {
        topButton.className = "show";
    
    } else {
        topButton.className = "hide";
    }
}

function scrollToTop() {
    window.scrollTo({top: 0, behavior: "smooth"});
}

window.addEventListener("scroll", scrollFunc);

topButton.onclick = function(e) {
    e.preventDefault();
    scrollToTop();
}

// CLEAR FORM 
function clearForm() {
    document.getElementById("name__field").value = "";
    document.getElementById("email__field").value = "";
    document.getElementById("message__field").value = "";
}