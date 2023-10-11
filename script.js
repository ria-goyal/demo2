let img=document.getElementById('image');
let button=document.getElementById('btn');
window.addEventListener('scroll',function(){
        let value=window.scrollY;
        img.style.top= value*0.5+'px';
        
    });