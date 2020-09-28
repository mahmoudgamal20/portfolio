/* trigger typed.js plugin */

var typed = new Typed('.head', {
    strings: ['UI/UX Designer', 'Web Designer', 'Front-End Developer'],
    typeSpeed: 80,
    backSpeed: 80,
    backDelay: 500,
    startDelay: 1000,
    smartBackspace: true,
    showCursor: true,
    cursorChar: '|',
    bindInputFocusEvents: false,
    loop: true,
});

/* trigger the aos.js scroll */

AOS.init({
    delay: 30,
    duration: 1000,
    once: true,
    easing: "ease-out-cubic"
});

/* trigger the count.js plugin */

$('.timer').countTo({
    speed: 2000
});


/* make the scrolltop */
var scrollTop = document.getElementById('scrolltop');

window.onscroll = function() {
    if (window.pageYOffset >= 400) {
        scrollTop.style.display = "block";
    } else {
        scrollTop.style.display = "none";
    }
}
scrollTop.onclick = function() {
    window.scrollTo(0, 0);
}


/* make the loading */

var myLoading = document.getElementById('loading');

function hideLoading() {
    myLoading.style.display = "none";
}

window.onload = function() {
    setTimeout(hideLoading, 3000);
}

/* make the links active onclick */

// var myLinks = document.querySelectorAll('.nav-item a');

// myLinks.onclick = function() {
//     myFunction;
// }

// function myFunction(e) {
//     e.target.className = "active";
// }


var myLinks = document.querySelectorAll('.nav-item a');
for (var i = 0; i < myLinks.length; i++) {
    myLinks[i].addEventListener('click', activateClass);
}

function activateClass(e) {
    var previous = e.target.previousElementSibling;
    var next = e.target.nextElementSibling;
    e.target.classList.add('active');
    previous.classList.remove('active');
    next.classList.remove('active');
}

/* make navbar background on scroll */

var myNav = document.querySelector('.navbar');

window.onscroll = function() {
    if (window.pageYOffset >= 500) {
        myNav.style.background = "rgba(55,85,190,.7)";
        myNav.style.marginTop = "-30px";
        myNav.style.transition = "all 0.2s ease-in-out";
    } else {
        myNav.style.background = "transparent";
        myNav.style.marginTop = "0px";
    }
}

/* make focus on input */

var myInputs = document.querySelectorAll(".form-control");
myInputs[0].addEventListener("focus", makeBorder, false);
myInputs[1].addEventListener("focus", makeBorder, false)
myInputs[2].addEventListener("focus", makeBorder, false);

function makeBorder() {
    this.style.boxShadow = "none";
    this.style.border = "1px solid #3755be";
}

/* make blur on input */

var myInputs = document.querySelectorAll(".form-control");
myInputs[0].addEventListener("blur", disableBorder, false);
myInputs[1].addEventListener("blur", disableBorder, false)
myInputs[2].addEventListener("blur", disableBorder, false);

function disableBorder() {
    this.style.boxShadow = "none";
    this.style.border = "1px solid #ced4da";
}

/* trigger the titlt.js plugin */

VanillaTilt.init(document.querySelector(".tilt-img"), {
    max: 100,
    speed: 100,
});

/* make the navbar fixed on scroll */

// window.onscroll = function() {}



// var myInput = document.getElementById("inputs"),
//     myLabel = document.getElementById("labels");
// myInput.addEventListener("click", function() {
//     this.style.background = "#f00";
// });



// var myInputs = document.getElementsByTagName('input');
// myInputs