const buttonMonthly = document.querySelector(".button-container__monthly");
const buttonAnnualy = document.querySelector(".button-container__annualy");
const suscriptionName = document.querySelectorAll(".card-price__suscription");
const basicValue = document.querySelector("#value1");
const premiumValue = document.querySelector("#value2");
const businessValue = document.querySelector("#value3");

console.log(basicValue);

buttonAnnualy.addEventListener("click", () => {
    for(let suscription of suscriptionName) {
        suscription.textContent = "/Annualy";
    }
    basicValue.textContent = "$380";
    premiumValue.textContent="$480";
    businessValue.textContent="$580";
    buttonAnnualy.classList.remove("button-unchoosed");
    buttonAnnualy.classList.add("button-choosed");
    buttonMonthly.classList.remove("button-choosed");
    buttonMonthly.classList.add("button-unchoosed");
});

buttonMonthly.addEventListener("click", () => {
    for(let suscription of suscriptionName) {
        suscription.textContent = "/Monthly";
    }
    basicValue.textContent = "$39";
    premiumValue.textContent="$49";
    businessValue.textContent="$59";
    buttonMonthly.classList.remove("button-unchoosed");
    buttonMonthly.classList.add("button-choosed");
    buttonAnnualy.classList.remove("button-choosed");
    buttonAnnualy.classList.add("button-unchoosed");
});


