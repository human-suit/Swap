// console.log("1");
const swiper = new Swiper(".swiper-container", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    // prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

function showMore() {
  const button = document.getElementById("myButton");
  if (button.textContent == "Скрыть") {
    dops("visibly", "hid");
    button.textContent = "Показать все";
    document.getElementById("imageID").src = "./source/svg/aroyDoun.svg";
  } else {
    dops("hid", "visibly");
    button.textContent = "Скрыть";
    document.getElementById("imageID").src = "./source/svg/aroyUp.svg";
  }
}

function dops(el1, el2) {
  let my_element = document.querySelectorAll("." + el1);
  // classList.remove('submit');
  console.log(my_element.length);
  for (let i = 0; i < my_element.length; i++) {
    console.log(i);
    my_element[i].classList.replace(el1, el2);
    // my_element[i].classList.add("visibly");
  }
}
