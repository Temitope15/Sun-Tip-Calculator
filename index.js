const price = document.querySelector(".price-input");
const tip = document.querySelector(".tip-input");
const button = document.querySelector(".button");

const priceToPay = document.querySelector(".bill");
const tipToPay = document.querySelector(".tip");
const taxToPay = document.querySelector(".tax");
const result = document.querySelector(".result");

const showResult = document.querySelector(".result-container");


const CalculateTip = () => {
    const Bill = parseInt(price.value);
    const Tip = parseInt(tip.value);
    const Tax = Bill * 0.03;
    const Total = Bill + Tip + Tax;


    priceToPay.innerText = `NGN ${Bill}`;
    taxToPay.innerText = `NGN ${Tax}`;
    tipToPay.innerText = `NGN ${Tip}`;
    


    result.innerText = `NGN ${Total}`;

    if (Total) {
     showResult.style.display = "block";
     price.style.display = "none";
     tip.style.display = "none";
     button.style.backgroundColor = "black";
     button.innerText = "checkout"
    }
}

button.addEventListener("click", CalculateTip)