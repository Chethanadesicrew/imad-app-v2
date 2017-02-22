console.log('Loaded!');

//change the text of the main-text div
var element = document.getElementedById('main-text');

element.innerHTML = 'New value';

// Move the image
var img = document.getElementById('img');
img.oneclick = function () {
    img.style.marginleft = '100px';

};