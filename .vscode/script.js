let cursor = document.querySelector('#cursor');

document.body.addEventListener('mousemove',function(dets){
    cursor.style.left = dets.x + 'px';
    cursor.style.top = dets.y + 'px';    
});