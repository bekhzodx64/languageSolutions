$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
      loop:true,
      mouseDrag: true,
      autoplay: true,
      items: 1,
      animateOut: 'fadeOut',
    });
  });

//Modal Window

const open = document.querySelectorAll(".slider__button"),
      close = document.querySelectorAll(".close"),
      modal = document.querySelector(".modal"),
      layer = document.querySelector(".modal__overlay"),
      modalWindow = document.querySelector(".modal__window"),
      overflowBody = document.querySelector('body'),
      modalTitle = document.querySelector('.modal__title'),
      trialBtn = document.querySelector(".registration__button");
      

//Modal Slider

open.forEach(function(e){
  e.addEventListener('click', function(e){
    e.preventDefault();
    modal.classList.add('active');
    modalTitle.textContent = 'Записатсья в школу'
    overflowBody.classList.add('no-scroll');
    modalWindow.classList.add('active');
  })
  
})

close.forEach(function(e){
  e.addEventListener('click', function(){
    modal.classList.remove('active');
    overflowBody.classList.remove('no-scroll');
    modalWindow.classList.remove('active');
  })
})

layer.addEventListener('click', function(){
  modal.classList.remove('active');
  overflowBody.classList.remove('no-scroll')
})

modalWindow.addEventListener('click', function(e){
  e.stopPropagation();
})

//End of Modal Slider

trialBtn.addEventListener('click', function (e) {
  e.preventDefault();
  modal.classList.add('active');  
  modalWindow.classList.add('active');
  modalTitle.textContent = 'Записаться на пробный урок';
  overflowBody.classList.add('no-scroll');
})