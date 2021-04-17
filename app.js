var btn = document.querySelector("#btn");
var txt = document.querySelector("#text-input");
var outputDiv = document.querySelector("#display");


var serverURL = "https://api.funtranslations.com/translate/valyrian.json";

function getTranslationURL(text) {
    return serverURL + "?" + "text=" + text;
}

function errorHandler(error) {
    console.log("error occured", error);
    alert("Try again there is an error");
}

function clickEventHandler() {
    var input = txt.value;

    fetch(getTranslationURL(input))
        .then(res => res.json())
        .then(json => {
            outputDiv.innerText = json.contents.translated;
        })
        .catch(errorHandler);
}

btn.addEventListener("click", clickEventHandler);