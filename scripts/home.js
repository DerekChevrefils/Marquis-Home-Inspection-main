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

const scrollOffset = 100;
 
const scrollElement = document.querySelector(".js-scroll");
 
const elementInView = (el, offset = 0) => {
  const elementTop = el.getBoundingClientRect().top;
 
  return (
    elementTop <= 
    ((window.innerHeight || document.documentElement.clientHeight) - offset)
  );
};
 
const displayScrollElement = () => {
  scrollElement.classList.add('scrolled');
}
 
const hideScrollElement = () => {
  scrollElement.classList.remove('scrolled');
}
 
const handleScrollAnimation = () => {
  if (elementInView(scrollElement, scrollOffset)) {
      displayScrollElement();
  } else {
    hideScrollElement();
  }
}
 
window.addEventListener('scroll', () => {
  handleScrollAnimation();
})

