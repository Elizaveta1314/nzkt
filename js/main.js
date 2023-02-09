const modalBtns = document.querySelectorAll('.modal-open');
const modals = document.querySelectorAll('.modal');

const body = document.body;

function openModal(elem) {
	elem.classList.add('active');
	body.classList.add('_locked')
}

function closeModal(e) {
	if (e.target.classList.contains('modal-close') || e.target.closest('.modal-close') || e.target.classList.contains('modal-bg')) {
		e.target.closest('.modal').classList.remove('active');
		body.classList.remove('_locked')
	}
}

modalBtns.forEach(btn => {
	btn.addEventListener('click', (e) => {
		let data = e.target.dataset.modalOpen;

		modals.forEach(modal => {
			if (modal.dataset.modal == data || modal.dataset.modal == e.target.closest('.modal-open').dataset.modalOpen) {
				openModal(modal)
			}
		})
	})
})

modals.forEach(modal => {
	modal.addEventListener('click', e => closeModal(e))
})

window.addEventListener('keydown', e => {
	modals.forEach(modal => {
		if (e.key === "Escape" && modal.classList.contains('active')) {
			modal.classList.remove('active');
			body.classList.remove('_locked');
		}
	})
})

// menu
let menuBtn = document.querySelector('.menu__mobile');
let menu = document.querySelector('.list_mobile');
const closeElem = document.querySelector('.menu__close');

closeElem.addEventListener('click', () => {
  menu.classList.remove('active_m');
});
menuBtn.addEventListener('click', function(){
	menu.classList.toggle('active_m');
});

// табы
const headerItem = document.querySelectorAll('.tabs__item'),
      mainContent = document.querySelectorAll('.switches');
let btnContainer = document.getElementsByClassName("tabs__list");
let btns = document.getElementsByClassName("tabs__item");

for (let item of headerItem) {
    item.addEventListener('click', function() {
        for (let element of mainContent) {
            element.classList.add('active-t');
        }
        const content = document.querySelector('#' + item.dataset.tab);
        content.classList.remove('active-t');
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