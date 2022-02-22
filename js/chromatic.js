let container = document.querySelector('.animationGraphic');

let animation = bodymovin.loadAnimation({
    container: container, 
    path: '/content/chromatic/animation.json', 
    renderer: 'svg', 
    loop: true, 
    autoplay: true,
  });

const appTrigger = document.querySelector('.appTrigger');
const appContainer = document.querySelector('.appContainer');

appTrigger.addEventListener('click', () => {

  appContainer.classList.add('appAppear');

});


let tl = gsap.timeline();

tl.fromTo('.appTriggerText', 1, {opacity:'0%'}, {opacity: '100%', yoyoEase: 'true', ease: Power2.easeInOut, repeat: '-1'});
