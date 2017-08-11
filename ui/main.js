console.log('Loaded!');
var element = document.getElementById('my-id');
element.innerHTML ='new text';

var img = document.getElementById('dino');
var marginLeft=0;
function moveRight(){
    marginLeft=marginLeft + 1;
    img.style.marginLeft=marginLeft + 'px';
}
img.onclick= function() {
var inter = setInterval(moveRight, 50);
};
