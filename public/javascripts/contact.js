console.log('contact.js loaded')

let contactLinks = document.getElementsByClassName('contact-link');

// type writer

var i = 0;
var header = 'Contact'; /* The text */
var speed = 100; /* The speed/duration of the effect in milliseconds */

function typeText(id, text) {
    if (i < text.length) {
        document.getElementById(id).innerHTML += text.charAt(i);
        i++;
        setTimeout(typeText.bind(null, id, text), speed);
    }
}

typeText("contact", header);