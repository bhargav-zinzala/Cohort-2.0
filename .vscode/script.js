let btn = document.querySelector('button');
let h1 = document.querySelector('h1');
let inner = document.querySelector('.inner');

let a = 0;

btn.addEventListener('click',()=>{
    btn.style.pointerEvents = 'none';

    let num = 50 + Math.floor(Math.random()*50);
    
    console.log('Your file will be downloaded in',num/10,'seconds');
    
    let int = setInterval(() => {
        a++;
        h1.innerHTML = a+'%';
        inner.style.width = a + '%';
    }, num);

    setTimeout(()=>{
        clearInterval(int);
        btn.style.opacity = 0.5;
        btn.innerHTML = 'Downloaded';
    }, num*100);
});