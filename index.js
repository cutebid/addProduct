const harmburger = document.querySelector(".harmburger");
let menuOpen = false;
let nav = document.querySelectorAll(".aside");

harmburger.addEventListener("click", () => {
  if (!menuOpen) {
    harmburger.classList.add("open");
    menuOpen = true;
    nav.forEach((navs) => {
      navs.classList.toggle("active-left");
       navs.style.backgroundColor = "lightgreen";
    });

  } else {
    harmburger.classList.remove("open");
    menuOpen = false;
    nav.forEach((navs) => {
      navs.classList.remove("active-left");
    });
  }
});
 