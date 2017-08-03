console.log('Loaded!');

// change the text of the main text div
var element=document.getElementById('main-text');

element.innerHTML='click on image';

// move an image
var img=document.getElementById('madi');
img.onclick=function(){
    img.style=marginileft='100px';
};