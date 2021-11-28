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

function main() {
    let clickme = document.querySelector(".clickme")
    clickme.addEventListener("click", (e) => {
        document.querySelector(".section").scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
    })

    let typer = new Typing()
    setInterval(() => {
        typer.type()
    }, 100);


}


window.addEventListener("load", main)