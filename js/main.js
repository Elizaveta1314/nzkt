// menu
let menuBtn = document.querySelector('.menu__mobile');
let menu = document.querySelector('.list_mobile');
const closeElem = document.querySelector('.menu__close');

closeElem.addEventListener('click', () => {
  menu.classList.remove('active');
});
menuBtn.addEventListener('click', function(){
	menu.classList.toggle('active');
});

// табы
const headerItem = document.querySelectorAll('.tabs__item'),
      mainContent = document.querySelectorAll('.switches');
let btnContainer = document.getElementsByClassName("tabs__list");
let btns = document.getElementsByClassName("tabs__item");

for (let item of headerItem) {
    item.addEventListener('click', function() {
        for (let element of mainContent) {
            element.classList.add('active');
        }
        const content = document.querySelector('#' + item.dataset.tab);
        content.classList.remove('active');
    });
}
// Изменение цвета кнопки
for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    let current = document.getElementsByClassName("active-btn");
    current[0].className = current[0].className.replace(" active-btn", "");
    this.className += " active-btn";
  });
}

// slider

let slideIndex = 1;
showSlides(slideIndex);

function plusSlide() {
  showSlides(slideIndex += 1);
}

function minusSlide() {
  showSlides(slideIndex -= 1);  
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("content");
  let dots = document.getElementsByClassName("circle");
  
if (n > slides.length) {
  slideIndex = 1
}

if (n < 1) {
  slideIndex = slides.length
}
for (i = 0; i < slides.length; i++) {
  slides[i].style.display = "none";
}
for (i = 0; i < dots.length; i++) {
  dots[i].className = dots[i].className.replace("deystvuyus", "");
}
slides[slideIndex - 1].style.display = "block";
dots[slideIndex - 1].className += " deystvuyus";
}