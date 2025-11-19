window.addEventListener("scroll", function () {
  const header = document.querySelector("header");

  if (!header) return;

  if (window.scrollY > 50) {
    header.classList.add("shrink");
  } else {
    header.classList.remove("shrink");
  }
});
