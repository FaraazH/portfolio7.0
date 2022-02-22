

//WINDOW RESIZE
let reSize = () => document.documentElement.style.setProperty("--vh", window.innerHeight * 0.01 + "px");
reSize();
window.addEventListener("resize", reSize);


//NAVIGATION
let active = 0;

for (let i = 0; i < document.links.length; i++) {
    if(document.links[i].href === document.URL) {
        active = i;
    }
}

let aboutLogo = document.querySelectorAll('.aboutLogo');
document.links[active].className = aboutLogo.forEach(about => about.classList.add('logoFill'));


//ANIMATION
let container = document.querySelector('.animation');

let animation = bodymovin.loadAnimation({
    container: container, 
    path: '/content/about/names.json', 
    renderer: 'svg', 
    loop: true, 
    autoplay: true,
  });

