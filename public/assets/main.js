const BLUR_SPEED = 50;
const BLUR_MAX = 10;

function updateBlur() {
  document.body.style.backdropFilter = `blur(${Math.min(
    window.scrollY / BLUR_SPEED,
    10
  )}px)`;
}

window.addEventListener("scroll", updateBlur);
updateBlur();

AOS.init();
