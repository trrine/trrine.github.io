function getEmailLink() {
    let local = "herrmanntrine";
    let domain = "gmail.com";
    return "mailto:" + local + "@" + domain;
}

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