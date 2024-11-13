'use strict';
/*v1 of the modal window
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btn = document.querySelectorAll('.show-modal');
console.log(btn);
const closeBtn = document.querySelector('.close-modal');

const exitModalWindow = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

const openModalWidow = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
  //this removes the class hidden in the modal varible(diplay:none), so
  //when it`s removed it show the hidden screen.
};

for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener('click', openModalWidow);
  /////basically whenever a click happens JS will call this
  //// function(s)
}
/////basically whenever a click happens JS will call this
//// function(s)
closeBtn.addEventListener('click', exitModalWindow);
overlay.addEventListener('click', exitModalWindow);

document.addEventListener('keydown', function (e) {
  console.log(e.key);
  /*
  THE SOLUTION I CAME UP WITH
  if (e.key === 'Escape') {
   exitModalWindow();
  }
   
  //////Course solution:
  if (e.key === 'Escape' || !modal.classList.contains('hidden')) {
    exitModalWindow();
  }
});
*/

const OpenBttns = document.querySelectorAll('.show-modal');
const closeBttns = document.querySelector('.close-modal');
const modalWindow = document.querySelector('.modal');

const openModalWidow = function () {
  modalWindow.classList.remove('hidden');
};

const exitModalWindow = function () {
  modalWindow.classList.add('hidden');
};

for (let i = 0; i < OpenBttns.length; i++) {
  OpenBttns[i].addEventListener('click', openModalWidow);
}

closeBttns.addEventListener('click', exitModalWindow);
