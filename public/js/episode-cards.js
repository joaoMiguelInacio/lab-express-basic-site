const cards = Array.from(document.getElementsByClassName("card"));

function turnCard() {
    this.classList.toggle("turn");
}

cards.forEach((card) => card.addEventListener("click", turnCard));