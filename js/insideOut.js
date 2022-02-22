//WAVES
const rooftopGraphic = document.querySelector('.rooftopGraphic');
const staticGraphic = document.querySelector('.staticGraphic');
const waveGraphic = document.querySelector('.waveGraphic');
let share = document.getElementsByClassName('share');

//LOTTIE
Array.prototype.forEach.call(share, animGraphic => {
  let anim = bodymovin.loadAnimation({
  container: animGraphic,
  path: `/content/insideOut/${animGraphic.dataset.file}.json`,
  renderer: 'svg',
  loop: true,
  autoplay: true
  });
});