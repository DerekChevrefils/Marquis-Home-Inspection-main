const bannerButton = document.getElementById("banner-button");
const bannerText = document.getElementById("banner-text");
let startPosition = 10;
let endPosition = 0;
const startIncrement = .25;
let fadeInHandler = requestAnimationFrame(bannerButtonFadeIn);

function bannerButtonFadeIn(){
    bannerButton.style.opacity = "1";
    bannerText.style.opacity = "1";
    startPosition -= startIncrement;
    bannerButton.style.right = "" + startPosition + "%";
    bannerText.style.right = "" + startPosition + "%";
    fadeInHandler = requestAnimationFrame(bannerButtonFadeIn);
    if (startPosition == endPosition){
        cancelAnimationFrame(fadeInHandler);
    }

};


