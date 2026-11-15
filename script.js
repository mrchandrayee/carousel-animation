const track = document.getElementById("carousel-track");
const viewport = document.getElementById("carousel-window");
const pagination = document.getElementById("pagination");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
const originalSlides = [...track.children];
const total = originalSlides.length;
const autoplayDelay = 1000;
let activeIndex = 0;
let timer = null;
let startX = 0;
let pointerDown = false;

// Clone the first and last slides to create a seamless circular loop.
const firstClone = originalSlides[0].cloneNode(true);
const lastClone = originalSlides[total - 1].cloneNode(true);
firstClone.setAttribute("aria-hidden", "true");
lastClone.setAttribute("aria-hidden", "true");
track.insertBefore(lastClone, originalSlides[0]);
track.appendChild(firstClone);

const allSlides = [...track.children];
const bullets = originalSlides.map((_, index) => {
  const bullet = document.createElement("button");
  bullet.type = "button";
  bullet.className = "swiper-pagination-bullet";
  bullet.setAttribute("aria-label", `Go to slide ${index + 1}`);
  bullet.addEventListener("click", () => {
    activeIndex = index;
    updateCarousel();
    restartAutoplay();
  });
  pagination.appendChild(bullet);
  return bullet;
});

function slideStep() {
  const first = allSlides[0];
  const gap = parseFloat(getComputedStyle(track).gap) || 0;
  return first.getBoundingClientRect().width + gap;
}

function updateCarousel(animate = true) {
  track.style.transition = animate ? "transform .45s cubic-bezier(.22,.75,.25,1)" : "none";
  track.style.transform = `translateX(${-slideStep() * (activeIndex + 1)}px)`;
  bullets.forEach((bullet, index) => {
    const active = index === ((activeIndex % total) + total) % total;
    bullet.classList.toggle("swiper-pagination-bullet-active", active);
    bullet.setAttribute("aria-current", active ? "true" : "false");
  });
}

function moveNext() {
  activeIndex += 1;
  updateCarousel();
}
function movePrev() {
  activeIndex -= 1;
  updateCarousel();
}
track.addEventListener("transitionend", () => {
  if (activeIndex >= total) {
    activeIndex = 0;
    updateCarousel(false);
  } else if (activeIndex < 0) {
    activeIndex = total - 1;
    updateCarousel(false);
  }
});
function startAutoplay() {
  stopAutoplay();
  timer = window.setInterval(moveNext, autoplayDelay);
}
function stopAutoplay() {
  if (timer !== null) {
    window.clearInterval(timer);
    timer = null;
  }
}
function restartAutoplay() {
  startAutoplay();
}

nextButton.addEventListener("click", () => { moveNext(); restartAutoplay(); });
prevButton.addEventListener("click", () => { movePrev(); restartAutoplay(); });
viewport.addEventListener("mouseenter", stopAutoplay);
viewport.addEventListener("mouseleave", startAutoplay);
viewport.addEventListener("focusin", stopAutoplay);
viewport.addEventListener("focusout", startAutoplay);
viewport.addEventListener("pointerdown", event => {
  pointerDown = true;
  startX = event.clientX;
  stopAutoplay();
});
viewport.addEventListener("pointerup", event => {
  if (!pointerDown) return;
  pointerDown = false;
  const delta = event.clientX - startX;
  if (Math.abs(delta) > 35) {
    if (delta < 0) moveNext();
    else movePrev();
  }
  startAutoplay();
});
viewport.addEventListener("pointercancel", () => {
  pointerDown = false;
  startAutoplay();
});
window.addEventListener("resize", () => updateCarousel(false));

updateCarousel(false);
startAutoplay();
