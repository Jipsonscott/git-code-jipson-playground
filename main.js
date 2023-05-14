const button = document.querySelector(".button")
const bigCrad = document.querySelector(".big-card")
const times = document.querySelector(".times")


button.addEventListener("click", () => {
    bigCrad.classList.toggle("main")
})
