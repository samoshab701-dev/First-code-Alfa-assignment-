
let currentIndex = 0;
let images = document.querySelectorAll(".gallery img");

function openLightbox(img) {
  document.getElementById("lightbox").style.display = "flex";
  document.getElementById("lightbox-img").src = img.src;

  images = Array.from(document.querySelectorAll(".gallery img"));
  currentIndex = images.indexOf(img);
}

function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
}

function changeImage(direction) {
  currentIndex += direction;

  if (currentIndex < 0) currentIndex = images.length - 1;
  if (currentIndex >= images.length) currentIndex = 0;

  document.getElementById("lightbox-img").src = images[currentIndex].src;
}

/* Filter Function */
function filterImages(category) {
  let allImages = document.querySelectorAll(".gallery img");

  allImages.forEach(img => {
    if (category === "all" || img.classList.contains(category)) {
      img.style.display = "block";
    } else {
      img.style.display = "none";
    }
  });
}
