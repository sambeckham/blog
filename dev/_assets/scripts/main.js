var pageTransition = require('./components/pageTransition.js'),
    imageFixer = require('./components/imageFixer'),
    cards = document.getElementsByClassName('card'),
    images = document.getElementsByTagName('img'),
    i;

setTimeout(function() {
    'use strict';
    document.getElementsByTagName('main')[0].classList.remove('animate-in');
}, 300);

for (i = 0; i < cards.length; i +=1) {
    new pageTransition(cards.item(i));
}

for (i = 0; i < images.length; i +=1) {
    new imageFixer(images.item(i));
}