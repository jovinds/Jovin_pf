let lastScrollTop = 0;
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", function () {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    navbar.style.top = "-200px";
  } else {
    navbar.style.top = "0";
  }
  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

const images = ["images/face-recog.jpg", "images/face-recog2.jpg"];

let currentImageIndex = 0;

function changeImage() {
  currentImageIndex = (currentImageIndex + 1) % images.length;
  document.getElementById("projectImg").src = images[currentImageIndex];
}

setInterval(changeImage, 2000);
