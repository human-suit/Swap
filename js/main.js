// console.log("1");
const pageWidth = document.documentElement.scrollWidth

const setting = {
  direction: "horizontal",
  loop: true,
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".swiper-button-next",
  },
  scrollbar: {
    el: ".swiper-scrollbar",
  },
  breakpoints: {
    676: {
        loop: false,
        slidesPerView: 3,
        spaceBetween: 20,
        grid: {
            rows: 2,
            fill: 'row',
        },
    },
    900:{
        loop: false,
        slidesPerView: 4,
        spaceBetween: 40,
        grid: {
            rows: 3,
            fill: 'row',
        },
    }
  }
}

if( pageWidth > 686 ) {
  const elements = document.querySelectorAll('.swiper-slide')
  console.log(elements)
  for (let index = elements.length-1; index > 5; index--) {
    const element = elements[index]
    element.classList.add('hid')  
  }
} 

const swiper = new Swiper(".swiper-container", setting);






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
