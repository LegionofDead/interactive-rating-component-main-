

const rating_cards = document.querySelectorAll(".ratings span");
const submit_btn = document.querySelector(".submit_btn");
const rate_point = document.getElementById("rate");
const rating_section = document.querySelector(".rating_section");
const thank_section = document.querySelector(".thank_section"); // thank_section
let currentRate = null;

rating_cards.forEach((rating_card) => {
    rating_card.addEventListener("click", (e) => {
        setRate(e.target.innerText);
    });
});

submit_btn.addEventListener("click", () => {
    if (currentRate === null) return;
    
    rate_point.innerText = currentRate.toString();
    rating_section.classList.add("hidden");
    thank_section.classList.remove("hidden");
});

function setRate(rate) {
    currentRate = +rate;
    changeActiveCard(currentRate);
    console.log(currentRate);
}

function changeActiveCard(rate) {
    rating_cards.forEach((card, index) => {
        if (rate - 1 === index) {
            card.classList.add("checked");
        } else {
            card.classList.remove("checked");
        }
    });
}