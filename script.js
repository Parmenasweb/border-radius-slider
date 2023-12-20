'use strict';

// selecting all elements we will be working with 

let box, result, range;
box = document.querySelector('.box');
result = document.querySelector('.result');
range = document.querySelector('.range');

range.addEventListener('input', ()=> {
   result.textContent = range.value + '%';
   box.style.borderRadius = range.value + '%';
})

