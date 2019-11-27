const scrollUp = document.querySelector("#scroll-top");

scrollUp.addEventListener("click", function() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
  });