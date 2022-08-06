let btns = Array.from(document.querySelectorAll(".btn"));
let screen = document.getElementById("screen");
let smallScreen = document.querySelector(".small-screen");
let previousElement;
let currentElement;
let operation;
let result;

btns.map(function (e) {
    e.addEventListener("click", function () {
        if (e.innerHTML == "+" || e.innerHTML == "-" || e.innerHTML == "*" || e.innerHTML == "/") {
            previousElement = parseInt(screen.innerHTML);
            operation = e.innerHTML;
            screen.innerHTML = "";
            smallScreen.innerText += operation;
        } else if (e.innerHTML == "=") {
            currentElement = parseInt(screen.innerHTML);
            if (operation == "+") {
                result = previousElement + currentElement;
            }
            if (operation == "-") {
                result = previousElement - currentElement;
            }
            if (operation == "*") {
                result = previousElement * currentElement;
            }
            if (operation == "/") {
                result = previousElement / currentElement;
            }
            screen.innerHTML = result;
            smallScreen.innerText = "";
        } else if (e.innerHTML == "Clear") {
            screen.innerHTML = "";
            previousElement = "";
            currentElement = ""
            operation = "";
            smallScreen.innerText = ""
        } else {
            screen.innerHTML += e.innerHTML;
            smallScreen.innerText += e.innerHTML;
        }

    })
})