let btns = Array.from(document.querySelectorAll(".btn"));
let screen = document.getElementById("screen");

btns.map(function (e) {
    e.addEventListener("click", function () {
        if (e.innerText == "=") {
            screen.innerText = eval(screen.innerText);
        } else if (e.innerText == "Clear") {
            screen.innerText = "";
        }
        else {
            screen.innerText += e.innerHTML;
        }
    })
})