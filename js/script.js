new Swiper(".myswiper", {
  pagination: {
    el: ".swiper-pagination",

    clickable: true,
  },

  autoplay: {
    delay: 3000,
  },

  autoHeight: true,

  slidesPerView: 1,

  loop: true,
});
// ! использую снипети jquery начала строки начинается с "jq"

function ibg() {
  let ibg = document.querySelectorAll(".ibg");
  for (var i = 0; i < ibg.length; i++) {
    if (ibg[i].querySelector("img")) {
      ibg[i].style.backgroundImage =
        "url(" + ibg[i].querySelector("img").getAttribute("src") + ")";
    }
  }
}

ibg();

let headeralla = document.querySelectorAll(".header__a");
headeralla.forEach(function (item) {
  item.addEventListener("click", function allHeader(event) {
    event.preventDefault();
    burgermenu.classList.remove("active");
    document.querySelector(".header").classList.remove("active");
  });
});

// burger Menu
let burgermenu = document.querySelector(".burger-menu");
burgermenu.addEventListener("click", function burgerMenu(event) {
  event.preventDefault();
  burgermenu.classList.toggle("active");
  document.querySelector(".header").classList.toggle("active");
  document.getElementsByTagName("body")[0].classList.toggle("lock");
});

let scroll = document.querySelectorAll(".header__a");

scroll.forEach((item) => {
  item.addEventListener("click", function Scroll(event) {
    event.preventDefault();
    let id = event.target.getAttribute("href");

    setTimeout(() => {
      document.querySelector(id).scrollIntoView({
        block: "center",
        behavior: "smooth",
      });
    }, 300);
  });
});




