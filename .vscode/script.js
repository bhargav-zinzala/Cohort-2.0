let list = document.querySelectorAll('.list');

list.forEach(function(elem){
    elem.childNodes[3].addEventListener('click',function(){
        if(elem.childNodes[3].innerHTML == 'Add Friend'){
            elem.childNodes[3].innerHTML = 'Remove Friend';
        }
        else{
            elem.childNodes[3].innerHTML = 'Add Friend';
        }
    });
});