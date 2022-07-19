const servicesHeader = document.getElementById("h2-banner");
let startPosition = 10;
let endPosition = 0;
const startIncrement = .25;
let fadeInHandler = requestAnimationFrame(bannerButtonFadeIn);

function bannerButtonFadeIn(){
    servicesHeader.style.opacity = "1";
    startPosition -= startIncrement;
    servicesHeader.style.right = "" + startPosition + "%";
    fadeInHandler = requestAnimationFrame(bannerButtonFadeIn);
    if (startPosition == endPosition){
        cancelAnimationFrame(fadeInHandler);
    }

};


