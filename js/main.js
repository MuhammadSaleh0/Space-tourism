const burger = document.getElementsByClassName('burger');
const nav = document.getElementById('nav');
const section = document.querySelector('section');

document.addEventListener('click', function (e) {
   if (e.target.className === 'burger' || e.target.className === 'close') {
      nav.classList.toggle('mobile-active');
   }
});

section.addEventListener('click', () => {
   nav.classList.remove('mobile-active');
});

const btns = document.querySelectorAll('.nav button');
const imgs = document.querySelectorAll('.img-slider img');
const infos = document.querySelectorAll('.info .card');

btns.forEach((btn) => {
   btn.addEventListener('click', () => {
      btns.forEach((btn) => {
         if (btn.parentElement.classList.contains('destination')) {
            btn.classList.remove('active');
         } else if (btn.parentElement.classList.contains('crew')) {
            btn.classList.remove('active-crew');
         } else if (btn.parentElement.classList.contains('technology')) {
            btn.classList.remove('active-tech');
         }
      });
      if (btn.parentElement.classList.contains('destination')) {
         btn.classList.add('active');
      } else if (btn.parentElement.classList.contains('crew')) {
         btn.classList.add('active-crew');
      } else if (btn.parentElement.classList.contains('technology')) {
         btn.classList.add('active-tech');
      }

      imgs.forEach((img) => {
         img.classList.remove('visible');
         if (img.getAttribute('alt') === btn.dataset.class) {
            img.classList.add('visible');
         }
      });

      infos.forEach((info) => {
         info.classList.remove('visible');
         if (info.classList.contains(btn.dataset.class)) {
            info.classList.add('visible');
         }
      });
   });
});

const imgsTechnology = document.querySelectorAll('#technology img');
