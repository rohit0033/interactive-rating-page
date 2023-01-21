const mainContainer = document.querySelector(".main-container")
const thanksContainer =document.querySelector(".thank-you")

const sumbitButton = document.getElementById("sumbit")
const rateAgain = document.getElementById("rate-again")
const rating = document.getElementById("rating")
const rates = document.querySelectorAll(".btn")

sumbitButton.addEventListener("click",() =>{
    thanksContainer.classList.remove("hidden")
    mainContainer.style.display="none"
});

rateAgain.addEventListener("click",() =>{
    thanksContainer.classList.add("hidden")
    mainContainer.style.display="block"
});

rates.forEach((rate) => {
    rate.addEventListener("click",() =>{
        //console.log(rate.innerHTML)
        rating.innerHTML = rate.innerHTML
    })
})