'use strict';
console.log("coooooooooooooooooool")

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal =  document.getElementById("show_join")

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

 
  btnsOpenModal.addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
 

document.addEventListener('keydown', function (e) {
  // console.log(e.key);

  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

///////////////////////////////////////////////////
///implementing smooth scroling

const naviLinks=document.querySelectorAll(".navi");

const scrolling=function(element){
 
  element.preventDefault();
  const href=this.getAttribute("href");
  const offsetTop=document.querySelector(href).offsetTop;

  scroll({
    top:offsetTop,
    behavior:"smooth"

  });
}


naviLinks.forEach(function(element){
  element.addEventListener("click",scrolling);
});