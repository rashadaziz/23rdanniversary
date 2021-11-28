import interact from "https://cdn.interactjs.io/v1.10.11/interactjs/index.js";
import LeaderLine from "https://cdn.jsdelivr.net/gh/rashadaziz/Logic-Simulator/dependencies/leader-line.min.js";

class Typing {
    words = ["23rd", "Wedding", "Anniversary"]
    wordIndex = 0
    position = 0

    type() {
        let text = this.words[this.wordIndex]
        let dynamicText = document.querySelector(".dynamic-text")

        if (this.position < text.length) {
            dynamicText.innerHTML += text.charAt(this.position)
            this.position++
        } else {
            dynamicText.innerHTML = ""
            this.wordIndex++;
            this.position = 0
            if (this.wordIndex === this.words.length) {
                this.wordIndex = 0
            }
        }
    }
}
function drawImage() {
    const bg = document.getElementsByClassName('section')[0]
    bg.innerHTML = ""
    for (let i = 0; i < 500; i++) {
        const blocks = document.getElementsByClassName('blocks');
        bg.innerHTML += '<div class="blocks"></div>';
        const duration = Math.floor(Math.random() * 5);
        blocks[i].style.animationDuration = `${2+duration}s`
    }
    showModal()
}
function showModal() {
    document.body.innerHTML += "<div class='mycard'><h1 class='heart'>&hearts;</h1><p class='quote'>“Our anniversary is just a momentary celebration, but our marriage is a timeless one.” -Unknown</p></div>"
}

function main() {
    let clickme = document.querySelector(".clickme")
    clickme.addEventListener("click", (e) => {
        document.body.style.overflowY = "scroll"
        drawImage()
        document.querySelector(".section").scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
    })

    let typer = new Typing()
    setInterval(() => {
        typer.type()
    }, 100);
}


window.addEventListener("load", main)