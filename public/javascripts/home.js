let crsl = $('.carousel').carousel({
    interval: 4000
})
// type writer

let i = 0;
let j = 0;
let name = 'James Tak'; /* The text */
let title = 'Software Engineer'; /* The text */
let speed = 100; /* The speed/duration of the effect in milliseconds */

function typeWriter(id, text) {
    if (i < text.length) {
        document.getElementById(id).innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter.bind(null, id, text), speed);
    } else {
        writeSecond("title", title);
    }
}


function writeSecond(id, text) {
    if (j < text.length) {
        document.getElementById(id).innerHTML += text.charAt(j);
        j++;
        setTimeout(writeSecond.bind(null, id, text), speed);
    }
}

typeWriter("name", name);