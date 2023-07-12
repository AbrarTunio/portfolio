let imageContainer = document.querySelector("#image-container");
let devName = document.querySelector(".name");
let portfolio = document.querySelector("#portfolio");
let hiddenAnchor = document.querySelector(".hidden-anchor");

let list = [imageContainer, devName];

function apply() {
  if (portfolio.innerText != "ENGR. ABRAR HUSSAIN") {
    portfolio.innerText = "ENGR. ABRAR HUSSAIN";
  } else {
    portfolio.innerText = "PORTFOLIO";
  }
  hiddenAnchor.classList.toggle("hidden-anchor-smooth");
}

imageContainer.addEventListener("mouseenter", () => {
  apply();
});

imageContainer.addEventListener("mouseleave", () => {
  apply();
});

devName.addEventListener("mouseenter", () => {
  apply();
});

devName.addEventListener("mouseleave", () => {
  apply();
});
