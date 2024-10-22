let calculator = document.getElementById("calculate"); // I declared a let variable with an ID "calculate" inside of it
let tip = document.getElementById("tip"); //I declared a let variable with an ID "tip" inside of it
let amount = document.getElementById("amount"); //I declared a let variable with an ID "amount" inside of it
let people = document.getElementById("people"); //I declared a let variable with an ID "people" inside of it

window.addEventListener("DOMContentLoaded", () => {
    document.getElementById("calculate").addEventListener("click", () => { // Am going to use my DOM with an ID "calculate" to triger the click function to calculate the bill
        let amount = parseFloat(document.getElementById("amount").value); // declaring a varible of amount with ID "amount", am using the parsefloat with the possibility of us getting a floating number once we calculate the total

        let tipA = document.getElementById("tip"); //Declaring a varible of tip with an ID "tip"
        let tip = Number.parseInt(tipA.options[tipA.selectedIndex].value).toFixed(2); // declaring a varible of tip and using the parseInt to convert string to an integer
        let people = Number.parseInt(document.getElementById("people").value); // declaring a varible of people with an ID ("people")

        let tipInDollars = amount * (tip / 100); // declaring a varible of tipInDollar to calculate the amount * tip / 100
        let subTotal = parseFloat(amount + tipInDollars); // the subtotal with be parsefloat * amount + tip
        let total = subTotal / people; // total will equal subtotal / number of people splitting the money

        document.querySelector(".info-tip").innerHTML = `Tip: ${parseFloat( // Using the DOM element with a class ID "tip-info"
        ).toFixed(2)}`;
        document.querySelector(".info-total").innerHTML = `Total: ${total} ${ // Using the DOM element with class ID total-info
            people > 1 ? "each" : ""
        }`;
        document.querySelector(".info").style = "display: block";
    });
});