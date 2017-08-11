console.log('Loaded!');
var element = document.getElementById('my-id');
element.innerHTML ='new text';

var img = document.getElementById('dino');
function moveRight(){
    marginLeft=marginLeft*10;
}
img.onclick= function() {
var inter = setInterval(moveRight, 100);
};
