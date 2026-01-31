// ===== CARROSSEL DUPLO COM AUTOPLAY =====
const track = document.querySelector(".carousel-track");
const slides = document.querySelectorAll(".slide-duplo");
const prevBtn = document.querySelector(".carousel-btn.prev");
const nextBtn = document.querySelector(".carousel-btn.next");

let index = 0;
let interval;

function updateCarousel() {
  track.style.transform = `translateX(-${index * 100}%)`;
}

function nextSlide() {
  index = (index + 1) % slides.length;
  updateCarousel();
}

function prevSlide() {
  index = (index - 1 + slides.length) % slides.length;
  updateCarousel();
}

nextBtn.onclick = () => {
  nextSlide();
  resetAutoPlay();
};

prevBtn.onclick = () => {
  prevSlide();
  resetAutoPlay();
};

function startAutoPlay() {
  interval = setInterval(nextSlide, 5000); // ⏱️ 5 segundos
}

function resetAutoPlay() {
  clearInterval(interval);
  startAutoPlay();
}

startAutoPlay();

// ===== LIGHTBOX =====
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.querySelector(".lightbox .close");

document.querySelectorAll(".slide-duplo img").forEach(img => {
  img.onclick = () => {
    lightboxImg.src = img.dataset.full;
    lightbox.style.display = "flex";
  };
});

closeBtn.onclick = () => {
  lightbox.style.display = "none";
};

lightbox.onclick = (e) => {
  if (e.target === lightbox) {
    lightbox.style.display = "none";
  }
};

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    lightbox.style.display = "none";
  }
});

