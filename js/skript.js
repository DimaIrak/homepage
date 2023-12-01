console.log("Witam");

let przycisk = document.querySelector(".przycisk");
let reguly = document.querySelector(".reguly");
let nowaKlasa = document.querySelector(".nowaKlasa");

przycisk.addEventListener("click", () => {
    reguly.classList.toggle("nowaKlasa");
});