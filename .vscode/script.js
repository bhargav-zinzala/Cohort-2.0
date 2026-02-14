// DOM - Document Object Model

//DOM has 4 Pillars 
    // Selection of an Element
    // Changing HTML
    // Changing CSS
    // Event Listeners

// var h1 = document.querySelector('h1');

// h1.innerHTML = 'Bhargav Zinzala';

// h1.style.color = 'red';

// console.log(h1);


// const abcd = document.getElementById('abcd');
// abcd.innerHTML = 'Hello Bhailoggggg';
// abcd.style.backgroundColor = '#222';


// const h1 = document.querySelector('h1');
// const btn = document.querySelector('button');

// btn.addEventListener('click',function(){
//     h1.innerHTML = 'GOOD NIGHT',
//     h1.style.color = 'red',
//     h1.style.fontSize = '30px'

// })


var h1 = document.querySelector('h1');
var inc = document.querySelector('#inc');
var dec = document.querySelector('#dec');

var a = 0;

inc.addEventListener('click',function(){
    a++;
    h1.innerHTML = a;
});

dec.addEventListener('click',function(){
    a--;
    h1.innerHTML = a;
});