// EMAIL LINK
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function getEmailLink() {
    let local = "herrmanntrine";
    let domain = "gmail.com";
    return "mailto:" + local + "@" + domain;
}
// NAME TYPEWRITER FUNCTIONS
// Function to introduce a delay in milliseconds using Promises
function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
// Function to type text character by character into an HTML element
function typeText(text, id, delay) {
    return __awaiter(this, void 0, void 0, function* () {
        const chars = text.split("");
        let i = 0;
        while (i < chars.length) {
            yield wait(delay);
            document.getElementById(id).innerHTML += chars[i];
            i++;
        }
        return;
    });
}
// Function to delete text character by character from an HTML element
function deleteText(id, delay) {
    return __awaiter(this, void 0, void 0, function* () {
        const text = document.getElementById(id);
        const chars = text.innerHTML.split("");
        let i = 0;
        while (chars.length > 0) {
            yield wait(delay);
            chars.pop();
            text.innerHTML = chars.join("");
            i--;
        }
    });
}
// Function to create a typing animation for a list of text strings
function typingAnimation(carouselList, id) {
    return __awaiter(this, void 0, void 0, function* () {
        let i = 0;
        while (true) {
            yield typeText(carouselList[i], id, 100);
            yield wait(2500);
            yield deleteText(id, 100);
            yield wait(2000);
            i++;
            // Start over
            if (i >= carouselList.length) {
                i = 0;
            }
        }
    });
}
// List of text strings for the typing animation
const carouselText = [
    "software engineering",
    "machine learning",
    "full-stack web development",
    "big data analytics"
];
// Initialise the typing animation
typingAnimation(carouselText, "typewriter__text");
// SLIDESHOW
// Arrays to keep track of slide indices and element IDs
let slideIndex = [1, 1, 1];
let slideId = ["slides-1", "slides-2", "slides-3"];
let dotId = ["slides-1__dot", "slides-2__dot", "slides-3__dot"];
// Function to display slides within a slide set
function showSlides(slideIndexToDisplay, slideSetIndex) {
    let images = document.getElementsByClassName(slideId[slideSetIndex]);
    let dots = document.getElementsByClassName(dotId[slideSetIndex]);
    // Handle slide index boundaries
    if (slideIndexToDisplay > images.length) {
        slideIndex[slideSetIndex] = 1;
    }
    if (slideIndexToDisplay < 1) {
        slideIndex[slideSetIndex] = images.length;
    }
    // Hide all images and remove 'active' class from dots
    for (let i = 0; i < images.length; i++) {
        images[i].style.display = "none";
    }
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    // Display the selected slide and mark the corresponding dot as 'active'
    images[slideIndex[slideSetIndex] - 1].style.display = "block";
    dots[slideIndex[slideSetIndex] - 1].className += " active";
}
// Function to navigate to the next or previous slide within a slide set
function plusSlides(slideIndexToDisplay, slideSetIndex) {
    showSlides(slideIndex[slideSetIndex] += slideIndexToDisplay, slideSetIndex);
}
// Function to navigate to a specific slide within a slide set
function currentSlide(slideIndexToDisplay, slideSetIndex) {
    showSlides((slideIndex[slideSetIndex] = slideIndexToDisplay), slideSetIndex);
}
// Initialize slideshows
showSlides(1, 0);
showSlides(1, 1);
showSlides(1, 2);
// SCROLL TO TOP BUTTON
const topButton = document.getElementById("top__button");
// Function to handle scrolling and show/hide the scroll-to-top button
function scrollFunc() {
    // Get the current vertical scroll position of the web page
    let y = window.scrollY;
    // Check if the user has scrolled down the page (y is greater than 0)
    if (y > 0) {
        topButton.className = "show";
    }
    else {
        topButton.className = "hide";
    }
}
// Function to scroll to the top of the page smoothly
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}
// Add a scroll event listener to handle the scroll behavior
window.addEventListener("scroll", scrollFunc);
// Add a click event listener to the scroll-to-top button
topButton.onclick = function (e) {
    e.preventDefault();
    scrollToTop();
};
// CLEAR FORM 
function clearForm() {
    document.getElementById("name__field").value = "";
    document.getElementById("email__field").value = "";
    document.getElementById("message__field").value = "";
}
