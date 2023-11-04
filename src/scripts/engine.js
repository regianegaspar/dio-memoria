const imagens = [
    "src/img/001.jpg", "src/img/001.jpg",
    "src/img/002.jpg", "src/img/002.jpg",
    "src/img/003.jpg", "src/img/003.jpg",
    "src/img/004.jpg", "src/img/004.jpg",
    "src/img/005.jpg", "src/img/005.jpg",
    "src/img/006.jpg", "src/img/006.jpg",
    "src/img/007.jpg", "src/img/007.jpg",
    "src/img/008.jpg", "src/img/008.jpg",
];

let openCards = [];
let shuffledIndices = shuffleArray([...Array(imagens.length).keys()]);

const gameContainer = document.querySelector(".game");

// Criar a div om as imagens em ordem aleatória
for (let i = 0; i < imagens.length; i++) {
    const box = document.createElement("div");
    box.className = "item";
    box.onclick = handleClick;
    const img = document.createElement("img");
    const index = shuffledIndices[i];
    img.src = imagens[index];
    box.appendChild(img);
    gameContainer.appendChild(box);
}

function handleClick() {
    if (openCards.length < 2 && !this.classList.contains("boxOpen")) {
        this.classList.add("boxOpen");
        openCards.push(this);

        if (openCards.length === 2) {
            setTimeout(checkMatch, 500);
        }
    }
}

// Comparar as imagens
function checkMatch() {
    const [card1, card2] = openCards;
    const img1 = card1.querySelector("img").src;
    const img2 = card2.querySelector("img").src;

    if (img1 === img2) {
        card1.classList.add("boxMatch");
        card2.classList.add("boxMatch");
    } else {
        card1.classList.remove("boxOpen");
        card2.classList.remove("boxOpen");
    }
    openCards = [];

    if (document.querySelectorAll(".boxMatch").length === imagens.length) {
        alert("Você venceu!");
    }
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
