let delayXs = document.querySelectorAll(".delay-x");
let delayYs = document.querySelectorAll(".delay-y");
let delayImg = document.querySelector(".delay-img");

timer = 1000;
delayXs.forEach((element) => {
  timer = timer + 500;
  setTimeout(() => {
    element.classList.add("show-x");
  }, timer);
});

setTimeout(() => {
  delayImg.classList.add("show-img");
}, 800);

timer = 3800;
delayYs.forEach((element) => {
  timer = timer + 500;
  setTimeout(() => {
    element.classList.add("show-y");
  }, timer);
});
