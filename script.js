const menuBars = document.getElementById('menu-bars');
const overlay = document.getElementById('overlay');
const nav1 = document.getElementById ('nav-1');
const nav2 = document.getElementById ('nav-2');
const nav3 = document.getElementById ('nav-3');
const nav4 = document.getElementById ('nav-4');
const nav5 = document.getElementById ('nav-5');
const tNav1 = document.getElementById ('Tnav1');
const tNav2 = document.getElementById ('Tnav2');
const tNav3 = document.getElementById ('Tnav3');
const tNav4 = document.getElementById ('Tnav4');
const dynamicH2 = document.getElementById ('Dynamic-H2');
const dynamicP = document.getElementById ('Dynamic-P');
const tNavigation = document.querySelectorAll('.nav-circle');
const testimonialText = document.querySelector('#Testimonial-text');
const testimonialContainer = document.getElementsByClassName('Testimonial-text')[0];




function toggleNav(){
//toggle menu bars open/closed
menuBars.classList.toggle('change');
// acts as a true or false value to compare against
overlay.classList.toggle('overlay-active');
// if true add slide in class list while removing the other one. otherwise both classes will clash and animation wont work after the first time
if(overlay.classList.contains('overlay-active')){
    overlay.classList.add('overlay-slide-right')
    overlay.classList.remove('overlay-slide-left') 
    // animate in nav items
    nav1.classList.remove('slide-out-1');
    nav1.classList.add('slide-in-1');
    nav2.classList.remove('slide-out-2');
    nav2.classList.add('slide-in-2');
    nav3.classList.remove('slide-out-3');
    nav3.classList.add('slide-in-3');
    nav4.classList.remove('slide-out-4');
    nav4.classList.add('slide-in-4');
    nav5.classList.remove('slide-out-5');
    nav5.classList.add('slide-in-5');
} 
// if false add the slide out class list while removing the other one. otherwise both classes will clash and animation wont work after the first time
else {
    overlay.classList.add('overlay-slide-left') 
    overlay.classList.remove('overlay-slide-right')
    nav1.classList.remove('slide-in-1');
    nav1.classList.add('slide-out-1');
    nav2.classList.remove('slide-in-2');
    nav2.classList.add('slide-out-2');
    nav3.classList.remove('slide-in-3');
    nav3.classList.add('slide-out-3');
    nav4.classList.remove('slide-in-4');
    nav4.classList.add('slide-out-4');
    nav5.classList.remove('slide-in-5');
    nav5.classList.add('slide-out-5'); 
};

};

// Testimonial nav content
const navOne = {
    h2: "We worked great together! Now I have a killer portfolio to show off.",
    p: "ANNA WILLIAMSON",
};
const navTwo = {
    h2: "I'm amazed by the high quality portraits Jessica delivered.",
    p: "SADIE SMITH",
};
const navThree = {
    h2: "Enjoyed working with Jessica very much. Really pleased with the portraits!",
    p: "JOSH STEVENS",
};
const navFour = {
    h2: "Definetley worth every Dollar! I'm amazed by the high quality portraits",
    p: "Rodney Dave",
};

// event listener for testimonial section

    tNavigation.forEach((btn) => btn.addEventListener('click', function (e) {
        e.preventDefault;
        testimonialContainer.classList.remove("GalleryAnimation");
        void testimonialContainer.offsetWidth;
        testimonialContainer.classList.add("GalleryAnimation");
    if (btn.id == "Tnav1") {
        dynamicH2.innerHTML = navOne.h2;
        dynamicP.innerHTML = navOne.p;
    } else if (btn.id == "Tnav2") {
        dynamicH2.innerHTML = navTwo.h2;
        dynamicP.textContent = navTwo.p;
    } else if (btn.id == "Tnav3") {
        dynamicH2.innerHTML = navThree.h2;
        dynamicP.innerHTML = navThree.p;
    } else if (btn.id == "Tnav4") {
        dynamicH2.innerHTML = navFour.h2;
        dynamicP.innerHTML = navFour.p;
    }

    if (btn.id == "Tnav1") {
        colorSwitcher(tNavigation, btn)
    } else if (btn.id == "Tnav2") {
        colorSwitcher(tNavigation, btn)
    } else if (btn.id == "Tnav3") {
        colorSwitcher(tNavigation, btn)
    } else if (btn.id == "Tnav4") {
        colorSwitcher(tNavigation, btn)
    };

    function colorSwitcher(el, elHolder) {
        for (let C = 0; C < 4; C++) {
            el[C].style.backgroundColor = ""
        }
        elHolder.style.backgroundColor = "white";
    };



},false));

// scroll animation

window.addEventListener("scroll", reveal);
window.addEventListener("scroll", reveal2);
window.addEventListener("scroll", reveal3);
window.addEventListener("scroll", reveal4);
// Translate vertical animation
function reveal() {
    var reveals = document.querySelectorAll(".reveal")
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var revealTOP = reveals[i].getBoundingClientRect().top;
        var revealPoint = 150;

        if (revealTOP < windowHeight - revealPoint) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}

// Opacity animation
function reveal2() {
    var reveals2 = document.querySelectorAll(".reveal2")
    for (var i = 0; i < reveals2.length; i++) {
        var windowHeight = window.innerHeight;
        var revealTOP = reveals2[i].getBoundingClientRect().top;
        var revealPoint = 150;

        if (revealTOP < windowHeight - revealPoint) {
            reveals2[i].classList.add("active2");

        } else {
            reveals2[i].classList.remove("active2");
        }
    }
};

// Translate Horizontal animation
function reveal3() {
    var reveals3 = document.querySelectorAll(".reveal3")
    for (var i = 0; i < reveals3.length; i++) {
        var windowHeight = window.innerHeight;
        var revealTOP = reveals3[i].getBoundingClientRect().top;
        var revealPoint = 150;

        if (revealTOP < windowHeight - revealPoint) {
            reveals3[i].classList.add("active3");

        } else {
            reveals3[i].classList.remove("active3");
        }
    }
};

// Translate Horizontal animation2
function reveal4() {
    var reveals4 = document.querySelectorAll(".reveal4")
    for (var i = 0; i < reveals4.length; i++) {
        var windowHeight = window.innerHeight;
        var revealTOP = reveals4[i].getBoundingClientRect().top;
        var revealPoint = 150;

        if (revealTOP < windowHeight - revealPoint) {
            reveals4[i].classList.add("active4");

        } else {
            reveals4[i].classList.remove("active4");
        }
    }
};




// event listeners

menuBars.addEventListener('click', toggleNav);

nav1.addEventListener('click', toggleNav);
nav2.addEventListener('click', toggleNav);
nav3.addEventListener('click', toggleNav);
nav4.addEventListener('click', toggleNav);
nav5.addEventListener('click', toggleNav);