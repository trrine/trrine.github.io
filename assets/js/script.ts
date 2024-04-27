// EMAIL LINK

function getEmailLink(): string {
    let local: string = "herrmanntrine";
    let domain: string = "gmail.com";
    return "mailto:" + local + "@" + domain;
}

// TYPEWRITER FUNCTIONS

// Function to introduce a delay in milliseconds using Promises
function wait(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms))
}

// Function to type text character by character into an HTML element
async function typeText(text: string, id: string, delay: number): Promise<void> {
    const chars: string[] = text.split("");
    let i: number = 0;

    while (i < chars.length) {
        await wait(delay);
        document.getElementById(id)!.innerHTML += chars[i];
        i++;        
    }

    return;
}

// Function to delete text character by character from an HTML element
async function deleteText(id: string, delay: number): Promise<void> {
    const text = document.getElementById(id)!;
    const chars: string[] = text.innerHTML.split("");
    let i: number = 0;

    while (chars.length > 0) {
        await wait(delay);
        chars.pop();
        text.innerHTML = chars.join("");
        i--;
    }
}

// Function to create a typing animation for a list of text strings
async function typingAnimation(carouselList: string[], id: string): Promise<void> {
    let i: number = 0;

    while (true) {
        await typeText(carouselList[i], id, 100);
        await wait(2500);
        await deleteText(id, 100);
        await wait(2000);

        i++;

        // Start over
        if (i >= carouselList.length) {i = 0;}
    }
}

// List of text strings for the typing animation
const carouselText: string[] = [
    "software engineering",
    "machine learning",
    "full-stack web development",
    "big data analytics"
]

// Initialise the typing animation
typingAnimation(carouselText, "typewriter__text");

// SLIDESHOW

// Arrays to keep track of slide indices and element IDs
let slideIndex: number[] = [1, 1, 1, 1];
let slideId: string[] = ["slides-1", "slides-2", "slides-3", "slides-4"];
let dotId: string[] = ["slides-1__dot", "slides-2__dot", "slides-3__dot", "slides-4__dot"];

// Function to display slides within a slide set
function showSlides(slideIndexToDisplay: number, slideSetIndex: number): void {
    let images = document.getElementsByClassName(slideId[slideSetIndex]) as HTMLCollectionOf<HTMLElement>;
    let dots = document.getElementsByClassName(dotId[slideSetIndex]) as HTMLCollectionOf<HTMLElement>;
    
    // Handle slide index boundaries
    if (slideIndexToDisplay > images.length) {
        slideIndex[slideSetIndex] = 1;
    }

    if (slideIndexToDisplay < 1) {
        slideIndex[slideSetIndex] = images.length;
    }

    // Hide all images and remove 'active' class from dots
    for (let i: number = 0; i < images.length; i++) {
        images[i].style.display = "none";
    }

    for (let i: number = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    // Display the selected slide and mark the corresponding dot as 'active'
    images[slideIndex[slideSetIndex] - 1].style.display = "block";
    dots[slideIndex[slideSetIndex] - 1].className += " active";
}

// Function to navigate to the next or previous slide within a slide set
function plusSlides(slideIndexToDisplay: number, slideSetIndex: number): void {
    showSlides(slideIndex[slideSetIndex] += slideIndexToDisplay, slideSetIndex);
}

// Function to navigate to a specific slide within a slide set
function currentSlide(slideIndexToDisplay: number, slideSetIndex: number): void {
    showSlides((slideIndex[slideSetIndex] = slideIndexToDisplay), slideSetIndex);
}

// Initialise slideshows
showSlides(1, 0);
showSlides(1, 1);
showSlides(1, 2);
showSlides(1, 3);

// SCROLL TO TOP BUTTON

const topButton: HTMLElement = document.getElementById("top__button")!;

// Function to handle scrolling and show/hide the scroll-to-top button
function scrollFunc(): void {
    // Get the current vertical scroll position of the web page
    let y: number = window.scrollY;

    // Check if the user has scrolled down the page (y is greater than 0)
    if (y > 0) {
        topButton.className = "show";
    
    } else {
        topButton.className = "hide";
    }
}

// Function to scroll to the top of the page smoothly
function scrollToTop(): void {
    window.scrollTo({top: 0, behavior: "smooth"});
}

// Add a scroll event listener to handle the scroll behavior
window.addEventListener("scroll", scrollFunc);

// Add a click event listener to the scroll-to-top button
topButton.onclick = function(e: Event): void {
    e.preventDefault();
    scrollToTop();
}

// CLEAR FORM 

function clearForm() {
    (document.getElementById("name__field") as HTMLInputElement).value = "";
    (document.getElementById("email__field") as HTMLInputElement).value = "";
    (document.getElementById("message__field") as HTMLInputElement).value = "";
}