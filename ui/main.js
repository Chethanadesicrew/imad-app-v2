console.log('Loaded!');

//change the text of the main-text div
var element = document.getElementedById('main-text');

element.innerHTML = 'New value';

// Move the image
var marginLeft = 0;
function moveRight () {
    marginLeft = marginLeft + 'px';
    img.style.marginLeft = marginLeft + 'px';
}
img.oneclick = function () {
   var interval = setInterval(moveRight, 50);
};