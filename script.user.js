// ==UserScript==
// @name         Show cardsphere on scryfall
// @namespace    https://github.com/BenDutton
// @version      0.1
// @description  try to take over the world!
// @author       github.com/BenDutton
// @match        https://scryfall.com/card/*
// @updateURL    https://github.com/BenDutton/UserScript-Scryfall-Cardsphere/raw/master/script.user.js
// @downloadURL  https://github.com/BenDutton/UserScript-Scryfall-Cardsphere/raw/master/script.user.js
// @run-at       document-end
// @grant        none
// ==/UserScript==

function doSomething() {
    'use strict';
    let linkyBoxes = document.getElementsByClassName("toolbox-links")[1];
    let element = document.createElement('li');
    let safeName = document.getElementsByClassName("card-text-card-name")[0].textContent.trim().replaceAll(' ', '+')
    element.innerHTML = `<a id="linky-boxie" class="button-n" rel="nofollow" href="https://www.cardsphere.com/search?q=${safeName}"><i>Go to Cardsphere</i></a>`
    linkyBoxes.appendChild(element);
    let linkyBox2KillMe = document.getElementById("linky-boxie")
    linkyBox2KillMe.style.borderColor = "#1abc9c"
    linkyBox2KillMe.style.color = "#1abc9c"
    console.log('done')
}

let done = false;
function waitCycle() {
    if (done)
        return;
    else if (document.getElementsByClassName("toolbox-links").length > 0) {
        console.log(document.getElementsByClassName("toolbox-links"))
        doSomething();
        done = true;
    } else {
        setTimeout(waitCycle, 100);
        return;
    }
}

waitCycle();
