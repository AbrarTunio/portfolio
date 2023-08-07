var navLinks = document.querySelectorAll(".nav-link");
let paragraphs = document.querySelectorAll(".paragraph");
let headingOnes = document.querySelectorAll(".heading-one");
let headingTwos = document.querySelectorAll(".heading-two");
let generalOnes = document.querySelectorAll(".general-one");
let generalTwos = document.querySelectorAll(".general-two");
let generalThrees = document.querySelectorAll(".general-three");

let toggleButton = document.querySelector("#toggle");

if (toggleButton.classList.contains("notset")) {
  toggleButton.className = "white";
  toggleButton.innerText = "light";
  function paragraph(text) {
    text.classList.add("d-paragraph-tc");
    text.classList.remove("w-paragraph-tc");
  }

  navLinks.forEach((link) => {
    paragraph(link);
    link.addEventListener("mouseenter", () => {
      link.classList.add("w-general-bc-one");
      link.classList.add("w-heading-tc-one");
    });
    link.addEventListener("mouseleave", () => {
      link.classList.remove("w-general-bc-one");
      link.style.color = "";
    });
  });

  paragraphs.forEach((link) => {
    paragraph(link);
  });
  /***************** 
     link and paragraph block ends here
     ****************
    */
  headingOnes.forEach((heading) => {
    heading.classList.add("d-heading-tc-one");
    heading.classList.remove("w-heading-tc-one");
  });

  headingTwos.forEach((heading) => {
    heading.classList.add("d-heading-tc-two");
    heading.classList.remove("w-heading-tc-two");
  });

  generalOnes.forEach((bgcolor) => {
    bgcolor.classList.add("d-general-bc-one");
    bgcolor.classList.remove("w-general-bc-one");
  });

  generalTwos.forEach((bgcolor) => {
    bgcolor.classList.add("d-general-bc-two");
    bgcolor.classList.remove("w-general-bc-two");
  });

  generalThrees.forEach((bgcolor) => {
    bgcolor.classList.add("d-general-bc-three");
    bgcolor.classList.remove("w-general-bc-three");
  });
}

toggleButton.addEventListener("click", (e) => {
  if (e.target.classList[0] == "dark") {
    e.target.className = "white";
    toggleButton.innerText = "light";
    toggleButton.style.backgroundColor = "";
    toggleButton.style.color = "";
    function paragraph(text) {
      text.classList.add("d-paragraph-tc");
      text.classList.remove("w-paragraph-tc");
    }

    navLinks.forEach((link) => {
      paragraph(link);
      link.addEventListener("mouseenter", () => {
        link.classList.add("w-general-bc-one");
        link.classList.add("w-heading-tc-one");
      });
      link.addEventListener("mouseleave", () => {
        link.classList.remove("w-general-bc-one");
        link.style.color = "";
      });
    });

    paragraphs.forEach((link) => {
      paragraph(link);
    });
    /***************** 
       link and paragraph block ends here
       ****************
      */
    headingOnes.forEach((heading) => {
      heading.classList.add("d-heading-tc-one");
      heading.classList.remove("w-heading-tc-one");
    });

    headingTwos.forEach((heading) => {
      heading.classList.add("d-heading-tc-two");
      heading.classList.remove("w-heading-tc-two");
    });

    generalOnes.forEach((bgcolor) => {
      bgcolor.classList.add("d-general-bc-one");
      bgcolor.classList.remove("w-general-bc-one");
    });

    generalTwos.forEach((bgcolor) => {
      bgcolor.classList.add("d-general-bc-two");
      bgcolor.classList.remove("w-general-bc-two");
    });

    generalThrees.forEach((bgcolor) => {
      bgcolor.classList.add("d-general-bc-three");
      bgcolor.classList.remove("w-general-bc-three");
    });
  } else if (e.target.classList[0] == "white") {
    e.target.className = "dark";
    toggleButton.innerText = "dark";
    toggleButton.style.backgroundColor = "black";
    toggleButton.style.color = "white";

    function paragraph(text) {
      text.classList.add("w-paragraph-tc");
      text.classList.remove("d-paragraph-tc");
    }

    navLinks.forEach((link) => {
      paragraph(link);
      link.addEventListener("mouseenter", () => {
        link.classList.add("d-general-bc-one");
        link.style.color = "white";
      });
      link.addEventListener("mouseleave", () => {
        link.classList.remove("d-general-bc-one");
        link.style.color = "";
      });
    });

    paragraphs.forEach((link) => {
      paragraph(link);
    });
    /***************** 
       link and paragraph block ends here
       ****************
      */
    headingOnes.forEach((heading) => {
      heading.classList.add("w-heading-tc-one");
      heading.classList.remove("d-heading-tc-one");
    });

    headingTwos.forEach((heading) => {
      heading.classList.add("w-heading-tc-two");
      heading.classList.remove("d-heading-tc-two");
    });

    generalOnes.forEach((bgcolor) => {
      bgcolor.classList.add("w-general-bc-one");
      bgcolor.classList.remove("d-general-bc-one");
    });

    generalTwos.forEach((bgcolor) => {
      bgcolor.classList.add("w-general-bc-two");
      bgcolor.classList.remove("d-general-bc-two");
    });

    generalThrees.forEach((bgcolor) => {
      bgcolor.classList.add("w-general-bc-three");
      bgcolor.classList.remove("d-general-bc-three");
    });
  }
});

// for White Theme
