window.onload = function fadeIn() {
  let element = document.getElementById("fancy_titles_container");
  element.addEventListener("transitionend", () => {
    translateBtn();
  });
  element.style.opacity = 1;
};

const translateBtn = () => {
  let anchor = document.getElementById("continue_wrapper");
  anchor.style.transition = "400ms ease-in-out all";
  anchor.style.right = "70%";
};
