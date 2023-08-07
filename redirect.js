let redirects = document.querySelectorAll(".redirect");

redirects.forEach((box) => {
  box.addEventListener("mouseenter", () => {
    box.style.color = "white";
  });

  box.addEventListener("mouseleave", () => {
    box.style.color = "";
  });

  box.addEventListener("click", () => {
    let response = window.confirm("confirm to check my LinkedIn page?");
    if (response) {
      window.location.href = "https://www.linkedin.com/in/abrartunio/";
    }
  });
});
