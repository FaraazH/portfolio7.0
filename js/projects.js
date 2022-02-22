

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

let projectLogo = document.querySelectorAll('.projectLogo');
let projectLogoFull = document.querySelectorAll('.projectLogoFull');

projectLogo.forEach(logo => logo.classList.add('logoFill'));
projectLogoFull.forEach(logo => logo.classList.add('logoFillFull'));