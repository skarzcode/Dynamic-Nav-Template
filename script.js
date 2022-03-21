const menuBars = document.getElementById('menu-bars');
const overlay = document.getElementById('overlay');
const nav1 = document.getElementById ('nav-1');
const nav2 = document.getElementById ('nav-2');
const nav3 = document.getElementById ('nav-3');
const nav4 = document.getElementById ('nav-4');
const nav5 = document.getElementById ('nav-5');


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



// event listeners

menuBars.addEventListener('click', toggleNav);

nav1.addEventListener('click', toggleNav);
nav2.addEventListener('click', toggleNav);
nav3.addEventListener('click', toggleNav);
nav4.addEventListener('click', toggleNav);
nav5.addEventListener('click', toggleNav);