var lastScrollTop = 0;

function scrollFunction() {
  let scrollDirection = document.documentElement.scrollTop;
  //   A condition for image
  if (scrollDirection > lastScrollTop && lastScrollTop > 200) {
    document.querySelector("nav").classList.add("position-fixed");
    document.querySelector("nav").classList.remove("position-absolute");
  }
  if (scrollDirection < lastScrollTop && lastScrollTop < 20) {
    document.querySelector("nav").classList.remove("position-fixed");
    document.querySelector("nav").classList.add("position-absolute");
  }
  // A condition for cards
  lastScrollTop = scrollDirection <= 0 ? 0 : scrollDirection;
}

document.addEventListener("scroll", scrollFunction);

// var lastScrollTop1 = 0;
document.addEventListener("scroll", () => {
  let scrollValue = document.documentElement.scrollTop;
  if (scrollValue > 270) {
    let delaySectionTwos = document.querySelectorAll(".delay-section-two");
    timer = 500;
    delaySectionTwos.forEach((element) => {
      setTimeout(() => {
        element.classList.add("show-x");
      }, timer);
      timer = timer + 500;
    });
  }
});

document.addEventListener("scroll", () => {
  let scrollValue = document.documentElement.scrollTop;
  console.log(scrollValue);
  if (scrollValue > 600) {
    let delaySectionThrees = document.querySelectorAll(".delay-section-three");
    timer = 500;
    delaySectionThrees.forEach((element) => {
      setTimeout(() => {
        element.classList.add("show-x");
      }, timer);
      timer = timer + 500;
    });
  }
});
