window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  const nav = document.querySelector(".nav-container");
  const butt = document.querySelector(".start-button");

  const headerHeight = header.offsetHeight;
  console.log(headerHeight);
  let scrollPosition = window.scrollY;
  console.log(scrollPosition);
  if (scrollPosition > headerHeight - 165) {
    nav.classList.add("scrolledNav");
    butt.classList.add("scrolledButton");
  } else {
    nav.classList.remove("scrolledNav");
    butt.classList.remove("scrolledButton");
  }
});
