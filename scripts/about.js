const aboutHeader = document.getElementById("h2-about");
let startPosition = 10;
let endPosition = 0;
const startIncrement = .25;
let fadeInHandler = requestAnimationFrame(bannerButtonFadeIn);

function bannerButtonFadeIn(){
    aboutHeader.style.opacity = "1";
    startPosition -= startIncrement;
    aboutHeader.style.right = "" + startPosition + "%";
    fadeInHandler = requestAnimationFrame(bannerButtonFadeIn);
    if (startPosition == endPosition){
        cancelAnimationFrame(fadeInHandler);
    }

};


