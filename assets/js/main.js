const toggle = document.querySelector(".toggle");
const navbar = document.querySelector(".mobile-header nav");

let isClicked = false;

// listen to event
toggle &&
  toggle.addEventListener("click", function () {
    if (isClicked === false) {
      navbar.style.display = "flex";
      toggle.innerHTML = '<i class="fa-solid fa-xmark"></i>';
      isClicked = true;
    } else {
      navbar.style.display = "none";
      toggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
      isClicked = false;
    }
  });
