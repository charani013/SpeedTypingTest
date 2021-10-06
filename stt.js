let speedTypingTestJs = document.getElementById("speedTypingTest");

let spinnerJs = document.getElementById("spinner");

let timerJs = document.getElementById("timer");
let quoteDisplayJs = document.getElementById("quoteDisplay");
let resultJs = document.getElementById("result");

let quoteInputJs = document.getElementById("quoteInput");

let submitBtnJs = document.getElementById("submitBtn");
let resetBtnJs = document.getElementById("resetBtn");

let counterJs = 0;
let uniqueSet;

function timerClicked() {
    uniqueSet = setInterval(function() {
        counterJs = counterJs + 1;
        timerJs.textContent = counterJs;
    }, 1000);
}
timerClicked();

function onclickSj() {
    let options = {
        method: "GET"
    };

    spinnerJs.classList.remove("d-none");
    speedTypingTestJs.classList.add("d-none");
    let url = "https://apis.ccbp.in/random-quote";
    fetch(url, options)
        .then(function(resopnse) {
            return resopnse.json();
        })
        .then(function(jsonData) {
            spinnerJs.classList.add("d-none");
            speedTypingTestJs.classList.remove("d-none");
            quoteDisplayJs.textContent = jsonData.content;

        })
}
onclickSj();

function submitBtnJsClicked() {
    let quoteDisplayJsValue = quoteDisplayJs.textContent;
    let quoteInputJsValue = quoteInputJs.value;
    if (quoteInputJsValue === quoteDisplayJsValue) {
        resultJs.textContent = "You typed in " + counterJs + " Seconds";
        clearInterval(uniqueSet);
    } else {
        resultJs.textContent = "You typed incorrect sentence"
    }
}


submitBtnJs.addEventListener("click", submitBtnJsClicked)
resetBtnJs.onclick = function() {
    onclickSj();
    clearInterval(uniqueSet)
    counterJs = 0;
    timerClicked();
    resultJs.textContent = "";
    quoteInputJs.value = "";
}