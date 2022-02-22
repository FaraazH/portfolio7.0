
////////////////////////////////////////////WINDOW

//RESIZE
let reSize = () => document.documentElement.style.setProperty("--vh", window.innerHeight * 0.01 + "px");
reSize();
window.addEventListener("resize", reSize);

//////////////////////////////////////////////GSAP
let tl = gsap.timeline();


// let intro = document.querySelector('.intro');
// let introContainer = document.querySelector('.introContainer');
// let introText = document.querySelector('.introText');
// let introAnime = document.querySelector('.introAnime');

// tl.fromTo('.introText', 1, {opacity:'0%'}, {opacity: '100%', yoyoEase: 'true', ease: Power2.easeInOut, repeat: '-1'});

// intro.addEventListener('click', () => {

//     tl.to('.introAnime', 1.4, {rotation: '360', transformOrigin: 'center', ease: Power2.easeInOut});
//     intro.classList.add('introEffect');

// });

//EVENT
window.addEventListener('load', () => { 
    allColour.forEach(natural => natural.classList.add('noColour'));
    allTouch.forEach(all => all.classList.add('noColour'));
    innerText.forEach(inner => inner.classList.add('noColour'));
    outerText.forEach(outer => outer.classList.add('noColour'));

    intervalOct.forEach(int => int.classList.add('noColour'));
    intervalFull.forEach(int => int.classList.add('noColour'));
    intervalContainer.classList.add('disappear');
    intervalButtons.classList.add('disappear');
    intervalColourButton.forEach(button => button.classList.add('disappear'));

    chromaticContainer.classList.add('disappear');
    chromaticButtons.forEach(button => button.classList.add('disappear'));
    chromaticButtonColour.forEach(button => button.classList.add('disappear'));

    chromaticDescription.classList.add('disappear');
    intervalDescription.classList.add('disappear');

    chromaticTitle.classList.add('disappear');
    intervalTitle.classList.add('disappear');

    hiLoDescription.forEach(hiLo => hiLo.classList.add('disappear'));
    hfoDescription.forEach(hfo => hfo.classList.add('disappear'));
    freqDescription.classList.remove('disappear');

    sfAscendDescription.forEach(sf => sf.classList.add('disappear'));

    pitchNav.classList.add('noColour');

    a1Pitch.classList.add('noColour');

    halfButton.classList.add('noColour');

    halfStepDescription.classList.remove('disappear');

});

/////////////////////////////////////WEB AUDIO API

function sound(value) {
    const audioContext = new AudioContext();
    const osc = audioContext.createOscillator();
    const volume = audioContext.createGain();

    //OSCILLATOR
    osc.frequency.value = value;
    osc.type = 'triangle';
    osc.start();
    osc.stop(audioContext.currentTime + 1);

    //GAIN
    volume.gain.value = 0.5;
    volume.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 0.9);

    //DESTINATION
    osc.connect(volume);
    volume.connect(audioContext.destination);
};

//////////////////////////////////////NAVIGATION

//CONTAINERS 
let pitchContainer = document.querySelector('.pitchContainer');
let intervalContainer = document.querySelector('.intervalContainer');
let chromaticContainer = document.querySelector('.chromaticContainer');
let waveContainer = document.querySelector('.waveContainer');
let containers = [pitchContainer, intervalContainer, chromaticContainer, waveContainer];

//NAV 
let chromaticNav = document.querySelector('.chromaticNav');
let intervalNav = document.querySelector('.intervalNav');
let pitchNav = document.querySelector('.pitchNav');

//BUTTONS 
let intervalButtons = document.querySelector('.intervalButtons');
let intervalColourButton = document.querySelectorAll('.intervalColourButton');
let chromaticButtons = document.querySelectorAll('.chromaticButtons');
let chromaticButtonColour = document.querySelectorAll('.chromaticButtonColour');

//TITLES
let pitchTitle = document.querySelector('.pitchTitle');
let intervalTitle = document.querySelector('.intervalTitle');
let chromaticTitle = document.querySelector('.chromaticTitle');

//DESCRIPTION
let pitchDescription = document.querySelector('.pitchDescription');
let intervalDescription = document.querySelector('.intervalDescription');
let chromaticDescription = document.querySelector('.chromaticDescription');

//DESCRIPTION INNER 
let hiLoDescription = document.querySelectorAll('.hiLoDescription');
let hiDescription = document.querySelector('.hiDescription');
let loDescription = document.querySelector('.loDescription');
let freqDescription = document.querySelector('.freqDescription')

let hfoDescription = document.querySelectorAll('.hfoDescription');
let halfStepDescription = document.querySelector('.halfStepDescription');
let fullStepDescription = document.querySelector('.fullStepDescription');
let octaveDescription = document.querySelector('.octaveDescription');

let sfDescription = document.querySelector('.sfDescription');
let sDescription = document.querySelector('.sDescription');
let fDescription = document.querySelector('.fDescription');
let sfAscendDescription = document.querySelectorAll('.sfAscendDescription');

pitchNav.addEventListener('click', () => {

    tl.clear();

    pitchContainer.classList.remove('disappear');
    waveContainer.classList.remove('disappear');
    intervalContainer.classList.add('disappear');
    chromaticContainer.classList.add('disappear');

    intervalButtons.classList.add('disappear');
    intervalColourButton.forEach(button => button.classList.add('disappear'));
    chromaticButtons.forEach(buttons => buttons.classList.add('disappear'));
    chromaticButtonColour.forEach(buttons => buttons.classList.add('disappear'));

    pitchDescription.classList.remove('disappear');
    intervalDescription.classList.add('disappear');
    chromaticDescription.classList.add('disappear');

    pitchTitle.classList.remove('disappear');
    intervalTitle.classList.add('disappear');
    chromaticTitle.classList.add('disappear');
    
    pitchNav.classList.add('noColour');
    intervalNav.classList.remove('noColour');
    chromaticNav.classList.remove('noColour');

});

intervalNav.addEventListener('click', () => {

    tl.clear();

    intervalContainer.classList.remove('disappear');
    chromaticContainer.classList.add('disappear');
    pitchContainer.classList.add('disappear');
    waveContainer.classList.add('disappear');

    intervalButtons.classList.remove('disappear');
    intervalColourButton.forEach(button => button.classList.remove('disappear'));
    chromaticButtons.forEach(buttons => buttons.classList.add('disappear'));
    chromaticButtonColour.forEach(buttons => buttons.classList.add('disappear'));

    pitchDescription.classList.add('disappear');
    intervalDescription.classList.remove('disappear');
    chromaticDescription.classList.add('disappear');

    pitchTitle.classList.add('disappear');
    intervalTitle.classList.remove('disappear');
    chromaticTitle.classList.add('disappear');

    pitchNav.classList.remove('noColour');
    intervalNav.classList.add('noColour');
    chromaticNav.classList.remove('noColour');

    tl.fromTo('.halfCircle', 1, {opacity: '0%'}, {repeat: -1, opacity: '100%', repeatDelay: 0.6, stagger: 0.6});
    tl.fromTo('.fullCircleAnime', 1, {opacity: '100%'}, {opacity: '0%', yoyoEase: true, repeat: -1, ease: Power2.easeInOut});
    tl.fromTo('.octCircleAnime', 1, {opacity: '100%'}, {opacity: '0%', yoyoEase: true, repeat: -1, ease: Power2.easeInOut});

});

chromaticNav.addEventListener('click', () => {
    tl.clear();


    chromaticContainer.classList.remove('disappear');
    intervalContainer.classList.add('disappear');
    pitchContainer.classList.add('disappear');
    waveContainer.classList.add('disappear');

    chromaticButtons.forEach(buttons => buttons.classList.remove('disappear'));
    intervalButtons.classList.add('disappear');
    intervalColourButton.forEach(button => button.classList.add('disappear'));
    chromaticButtonColour.forEach(buttons => buttons.classList.remove('disappear'));

    pitchDescription.classList.add('disappear');
    intervalDescription.classList.add('disappear');
    chromaticDescription.classList.remove('disappear');

    pitchTitle.classList.add('disappear');
    intervalTitle.classList.add('disappear');
    chromaticTitle.classList.remove('disappear');

    pitchNav.classList.remove('noColour');
    intervalNav.classList.remove('noColour');
    chromaticNav.classList.add('noColour');
});

///////////////////////////////////////////PITCH

//NOTES
const a2Pitch = document.querySelector('.a2Pitch');
const a1Pitch = document.querySelector('.a1Pitch');

//WAVES
const waveHi = document.querySelector('.waveHi');
const waveLo = document.querySelector('.waveLo');
let share = document.getElementsByClassName('share');

//LOTTIE
Array.prototype.forEach.call(share, wave => {
  let anim = bodymovin.loadAnimation({
  container: wave,
  path: `/content/chromatic/chromatic combination/content/${wave.dataset.file}.json`,
  renderer: 'svg',
  loop: true,
  autoplay: true
  });
});

//PITCH EVENTS
a2Pitch.addEventListener('click', () => {
    sound(440);

    tl.clear();
    tl.set('.a1Pitch', {opacity: '0%'})
    tl.set('.a2Pitch', {opacity: '100%'});
    tl.fromTo('.a2Colour', 0.5, {scale: 1, opacity: '90%', transformOrigin: 'center'}, {scale: 1.6, opacity: '0%', transformOrigin: 'center'});

    waveLo.classList.add('noColour');
    waveHi.classList.remove('noColour');

    hiDescription.classList.remove('disappear');
    loDescription.classList.add('disappear');
    freqDescription.classList.add('disappear');
});

a1Pitch.addEventListener('click', () => {
    sound(220);

    tl.clear();
    tl.set('.a1Pitch', {opacity: '100%'});
    tl.set('.a2Pitch', {opacity: '0%'});
    tl.fromTo('.a1Colour', 0.5, {scale: 1, opacity: '90%', transformOrigin: 'center'}, {scale: 1.6, opacity: '0%', transformOrigin: 'center'});
 
    waveHi.classList.add('noColour');
    waveLo.classList.remove('noColour');

    hiDescription.classList.add('disappear');
    loDescription.classList.remove('disappear');
    freqDescription.classList.add('disappear');
});

///////////////////////////////////////INTERVALS

//HALF CIRCLES
const aHalfCircle = document.querySelector('.aHalfCircle');
const aSharpHalfCircle = document.querySelector('.aSharpHalfCircle');
const bHalfCircle = document.querySelector('.bHalfCircle');
const cHalfCircle = document.querySelector('.cHalfCircle');
const cSharpHalfCircle = document.querySelector('.cSharpHalfCircle');
const dHalfCircle = document.querySelector('.dHalfCircle');
const dSharpHalfCircle = document.querySelector('.dSharpHalfCircle');
const eHalfCircle = document.querySelector('.eHalfCircle');
const halfCircles = document.querySelectorAll('.halfCircle');

//FULL CIRCLES 
const aFullCircle = document.querySelector('.aFullCircle');
const aSharpFullCircle = document.querySelector('.aSharpFullCircle');
const bFullCircle = document.querySelector('.bFullCircle');
const cFullCircle = document.querySelector('.cFullCircle');
const cSharpFullCircle = document.querySelector('.cSharpFullCircle');
const dFullCircle = document.querySelector('.dFullCircle');
const dSharpFullCircle = document.querySelector('.dSharpFullCircle');
const eFullCircle = document.querySelector('.eFullCircle');

//OCT CIRCLES 
const a1OctCircle = document.querySelector('.a1OctCircle');
const bOctCircle = document.querySelector('.bOctCircle');
const cOctCircle = document.querySelector('.cOctCircle');
const dOctCircle = document.querySelector('.dOctCircle');
const eOctCircle = document.querySelector('.eOctCircle');
const fOctCircle = document.querySelector('.fOctCircle');
const gOctCircle = document.querySelector('.gOctCircle');
const a2OctCircle = document.querySelector('.a2OctCircle');

//HALF TEXT
const aHalfText = document.querySelector('.aHalfText');
const aSharpHalfText = document.querySelector('.aSharpHalfText');
const bHalfText = document.querySelector('.bHalfText');
const cHalfText = document.querySelector('.cHalfText');
const cSharpHalfText = document.querySelector('.cSharpHalfText');
const dHalfText = document.querySelector('.dHalfText');
const dSharpHalfText = document.querySelector('.dSharpHalfText');
const eHalfText = document.querySelector('.eHalfText');

//FULL TEXT
const aFullText = document.querySelector('.aFullText');
const aSharpFullText = document.querySelector('.aSharpFullText');
const bFullText = document.querySelector('.bFullText');
const cFullText = document.querySelector('.cFullText');
const cSharpFullText = document.querySelector('.cSharpFullText');
const dFullText = document.querySelector('.dFullText');
const dSharpFullText = document.querySelector('.dSharpFullText');
const eFullText = document.querySelector('.eFullText');

//OCT TEXT
const a1TextCircle = document.querySelector('.a1TextCircle');
const bTextCircle = document.querySelector('.bTextCircle');
const cTextCircle = document.querySelector('.cTextCircle');
const dTextCircle = document.querySelector('.dTextCircle');
const eTextCircle = document.querySelector('.eTextCircle');
const fTextCircle = document.querySelector('.fTextCircle');
const gTextCircle = document.querySelector('.gTextCircle');
const a2TextCircle = document.querySelector('.a2TextCircle');

//ALL
const intervalHalf = document.querySelectorAll('.intervalHalf');
const intervalFull = document.querySelectorAll('.intervalFull');
const intervalOct = document.querySelectorAll('.intervalOct');
const intervalAll = [intervalHalf, intervalFull, intervalOct];

//INTERVAL BUTTONS
const halfButton = document.querySelector('.halfButton');
const fullButton = document.querySelector('.fullButton');
const octButton = document.querySelector('.octButton');

//INTERVAL EVENTS

halfButton.addEventListener('click', () => {

    intervalHalf.forEach(int => int.classList.remove('noColour'));
    intervalFull.forEach(int => int.classList.add('noColour'));
    intervalOct.forEach(int => int.classList.add('noColour'));

    halfStepDescription.classList.remove('disappear');
    fullStepDescription.classList.add('disappear');
    octaveDescription.classList.add('disappear');

    halfButton.classList.add('noColour');
    fullButton.classList.remove('noColour');
    octButton.classList.remove('noColour');

    tl.clear();
    tl.set('.halfButtonCircle', {opacity: '100%'});
    tl.fromTo('.halfCircle', 1, {opacity: '0%'}, {repeat: -1, opacity: '100%', repeatDelay: 0.6, stagger: 0.6});
});

fullButton.addEventListener('click', () => {

    intervalFull.forEach(int => int.classList.remove('noColour'));
    intervalHalf.forEach(int => int.classList.add('noColour'));
    intervalOct.forEach(int => int.classList.add('noColour'));

    halfStepDescription.classList.add('disappear');
    fullStepDescription.classList.remove('disappear');
    octaveDescription.classList.add('disappear');

    halfButton.classList.remove('noColour');
    fullButton.classList.add('noColour');
    octButton.classList.remove('noColour');

    tl.clear();
    tl.set('.halfButtonCircle', {opacity:'100%'});
    tl.fromTo('.fullCircleAnime', 1, {opacity: '100%'}, {opacity: '0%', yoyoEase: true, repeat: -1, ease: Power2.easeInOut});
});

octButton.addEventListener('click', () => {

    intervalOct.forEach(int => int.classList.remove('noColour'));
    intervalFull.forEach(int => int.classList.add('noColour'));
    intervalHalf.forEach(int => int.classList.add('noColour'));

    halfStepDescription.classList.add('disappear');
    fullStepDescription.classList.add('disappear');
    octaveDescription.classList.remove('disappear');

    halfButton.classList.remove('noColour');
    fullButton.classList.remove('noColour');
    octButton.classList.add('noColour');

    tl.clear();
    tl.set('.halfButtonCircle', {opacity:'100%'});
    tl.fromTo('.octCircleAnime', 1, {opacity: '100%'}, {opacity: '0%', yoyoEase: true, repeat: -1, ease: Power2.easeInOut});
});

///////////////////////////////////////CHROMATIC

//COLOUR CIRCLES 
const aColour = document.querySelector('.aColour');
const aSharpColour = document.querySelector('.aSharpColour');
const bFlatColour = document.querySelector('.bFlatColour');
const bColour = document.querySelector('.bColour');
const cColour = document.querySelector('.cColour');
const cSharpColour = document.querySelector('.cSharpColour');
const dFlatColour = document.querySelector('.dFlatColour');
const dColour = document.querySelector('.dColour');
const dSharpColour = document.querySelector('.dSharpColour');
const eFlatColour = document.querySelector('.eFlatColour');
const eColour = document.querySelector('.eColour');
const fColour = document.querySelector('.fColour');
const fSharpColour = document.querySelector('.fSharpColour');
const gFlatColour = document.querySelector('.gFlatColour');
const gColour = document.querySelector('.gColour');
const gSharpColour = document.querySelector('.gSharpColour');
const aFlatColour = document.querySelector('.aFlatColour');

//COLOUR COMBOS
const aComboColour = document.querySelectorAll('.aComboColour');
const cComboColour = document.querySelectorAll('.cComboColour');
const dComboColour = document.querySelectorAll('.dComboColour');
const fComboColour = document.querySelectorAll('.fComboColour');
const gComboColour = document.querySelectorAll('.gComboColour');

//COLOUR ARRAYS
const allColour = [aColour, aSharpColour, bFlatColour, bColour, cColour, cSharpColour, dFlatColour, dColour, dSharpColour, eFlatColour, eColour, fColour, fSharpColour, gFlatColour, gColour, gSharpColour, aFlatColour]
const naturalColour = [aColour, bColour, cColour, dColour, eColour, fColour, gColour];
const sharpColour = [aSharpColour, cSharpColour, dSharpColour, fSharpColour, gSharpColour];
const flatColour = [bFlatColour, dFlatColour, eFlatColour, gFlatColour, aFlatColour];

//TOUCH CIRCLES
const aTouch = document.querySelector('.aTouch');
const aSharpTouch = document.querySelector('.aSharpTouch');
const bFlatTouch = document.querySelector('.bFlatTouch');
const bTouch = document.querySelector('.bTouch');
const cTouch = document.querySelector('.cTouch');
const cSharpTouch = document.querySelector('.cSharpTouch');
const dFlatTouch = document.querySelector('.dFlatTouch');
const dTouch = document.querySelector('.dTouch');
const dSharpTouch = document.querySelector('.dSharpTouch');
const eFlatTouch = document.querySelector('.eFlatTouch');
const eTouch = document.querySelector('.eTouch');
const fTouch = document.querySelector('.fTouch');
const fSharpTouch = document.querySelector('.fSharpTouch');
const gFlatTouch = document.querySelector('.gFlatTouch');
const gTouch = document.querySelector('.gTouch');
const gSharpTouch = document.querySelector('.gSharpTouch');
const aFlatTouch = document.querySelector('.aFlatTouch');

//TOUCH COMBOS
const aComboTouch = document.querySelectorAll('.aComboTouch');
const cComboTouch = document.querySelectorAll('.cComboTouch');
const dComboTouch = document.querySelectorAll('.dComboTouch');
const fComboTouch = document.querySelectorAll('.fComboTouch');
const gComboTouch = document.querySelectorAll('.gComboTouch');

//TOUCH ARRAYS
const allTouch = [aTouch, aSharpTouch, bFlatTouch, bTouch, cTouch, cSharpTouch, dFlatTouch, dTouch, dSharpTouch, eFlatTouch, eTouch, fTouch, fSharpTouch, gFlatTouch, gTouch, gSharpTouch, aFlatTouch]
const naturalTouch = [aTouch, bTouch, cTouch, dTouch, eTouch, fTouch, gTouch];
const sharpTouch = [aSharpTouch, cSharpTouch, dSharpTouch, fSharpTouch, gSharpTouch];
const flatTouch = [bFlatTouch, dFlatTouch, eFlatTouch, gFlatTouch, aFlatTouch];

//INNER TEXT 
const aInner = document.querySelector('.aInner');
const aSharpInner = document.querySelector('.aSharpInner');
const bFlatInner = document.querySelector('.bFlatInner');
const bInner = document.querySelector('.bInner');
const cInner = document.querySelector('.cInner');
const cSharpInner = document.querySelector('.cSharpInner');
const dFlatInner = document.querySelector('.dFlatInner');
const dInner = document.querySelector('.dInner');
const dSharpInner = document.querySelector('.dSharpInner');
const eFlatInner = document.querySelector('.eFlatInner');
const eInner = document.querySelector('.eInner');
const fInner = document.querySelector('.fInner');
const fSharpInner = document.querySelector('.fSharpInner');
const gFlatInner = document.querySelector('.gFlatInner');
const gInner = document.querySelector('.gInner');
const gSharpInner = document.querySelector('.gSharpInner');
const aFlatInner = document.querySelector('.aFlatInner');

//INNER TEXT ARRAY
const innerText = [aInner, aSharpInner, bFlatInner, bInner, cInner, cSharpInner, dFlatInner, dInner, dSharpInner, eFlatInner, eInner, fInner, fSharpInner, gFlatInner, gInner, gSharpInner, aFlatInner];

//INNER TEXT TYPES
let flatInner = document.querySelectorAll('.flatInner');
let sharpInner = document.querySelectorAll('.sharpInner');
let naturalInner = document.querySelectorAll('.naturalInner');

//OUTER TEXT 
const aOuter = document.querySelector('.aOuter');
const aSharpOuter = document.querySelector('.aSharpOuter');
const bFlatOuter = document.querySelector('.bFlatOuter');
const bOuter = document.querySelector('.bOuter');
const cOuter = document.querySelector('.cOuter');
const cSharpOuter = document.querySelector('.cSharpOuter');
const dFlatOuter = document.querySelector('.dFlatOuter');
const dOuter = document.querySelector('.dOuter');
const dSharpOuter = document.querySelector('.dSharpOuter');
const eFlatOuter = document.querySelector('.eFlatOuter');
const eOuter = document.querySelector('.eOuter');
const fOuter = document.querySelector('.fOuter');
const fSharpOuter = document.querySelector('.fSharpOuter');
const gFlatOuter = document.querySelector('.gFlatOuter');
const gOuter = document.querySelector('.gOuter');
const gSharpOuter = document.querySelector('.gSharpOuter');
const aFlatOuter = document.querySelector('.aFlatOuter');
let aFlash = document.querySelector('.aFlash');

//OUTER TEXT ARRAY
const outerText = [aOuter, aSharpOuter, bFlatOuter, bOuter, cOuter, cSharpOuter, dFlatOuter, dOuter, dSharpOuter, eFlatOuter, eOuter, fOuter, fSharpOuter, gFlatOuter, gOuter, gSharpOuter, aFlatOuter];

//OUTER TEXT TYPES
let flatOuter = document.querySelectorAll('.flatOuter');
let sharpOuter = document.querySelectorAll('.sharpOuter');
let naturalOuter = document.querySelectorAll('.naturalOuter');

//CHROMATIC BUTTONS 
let flatButton = document.querySelector('.flatButton');
let naturalButton = document.querySelector('.naturalButton');
let sharpButton = document.querySelector('.sharpButton');
let flatButtonColour = document.querySelector('.flatButtonColour');
let chromaticButton = document.querySelectorAll('.chromaticButton');

let innerCircle = document.querySelector('.innerCircle');

//BUTTON EVENTS
sharpButton.addEventListener('click', () => {

    aFlash.classList.add('noColour');

    sharpOuter.forEach(sharp => sharp.classList.toggle('noColour'));
    sharpColour.forEach(sharp => sharp.classList.toggle('noColour'));
    sharpButton.classList.toggle('noColour');
    flatButton.classList.remove('noColour');

    flatOuter.forEach(flat => flat.classList.add('noColour'));
    flatColour.forEach(flat => flat.classList.add('noColour'));

    innerText.forEach(inner => inner.classList.add('noColour'));

    allTouch.forEach(all => all.classList.add('noColour'));

    sfDescription.classList.add('disappear');
    sDescription.classList.toggle('disappear');
    fDescription.classList.add('disappear');
});

flatButton.addEventListener('click', () => {


    aFlash.classList.add('noColour');

    flatOuter.forEach(flat => flat.classList.toggle('noColour'));
    flatColour.forEach(flat => flat.classList.toggle('noColour'));
    flatButton.classList.toggle('noColour');
    sharpButton.classList.remove('noColour');

    sharpOuter.forEach(sharp => sharp.classList.add('noColour'));
    sharpColour.forEach(sharp => sharp.classList.add('noColour'));

    innerText.forEach(inner => inner.classList.add('noColour'));

    allTouch.forEach(all => all.classList.add('noColour'));

    sfDescription.classList.add('disappear');
    sDescription.classList.add('disappear');
    fDescription.classList.toggle('disappear');
});

naturalButton.addEventListener('click', () => {

    aFlash.classList.add('noColour');
    
    naturalOuter.forEach(natural => natural.classList.toggle('noColour'));
    naturalColour.forEach(natural => natural.classList.toggle('noColour'));
    naturalButton.classList.toggle('noColour');

    innerText.forEach(inner => inner.classList.add('noColour'));

    allTouch.forEach(all => all.classList.add('noColour'));
});

//CIRCLE EVENTS
aColour.addEventListener('click', (value) => {
    sound(220);
    tl.clear();
    tl.set('.aFlash', {opacity: '0%'});
    tl.fromTo('.aGrey', 0.5, {scale: 1, opacity: '90%', transformOrigin: 'center'}, {scale: 1.6, opacity: '0%', transformOrigin: 'center'});

    innerText.filter(note => { 
        if (note == aInner) {
        note.classList.remove('noColour');
        } else {
        note.classList.add('noColour');
        }
    });

    outerText.forEach(outer => {outer.classList.add('noColour')});
    allColour.forEach(all => { all.classList.add('noColour');})
    allTouch.forEach(all => all.classList.remove('noColour'));
    chromaticButton.forEach(button => button.classList.remove('noColour'));
    sDescription.classList.add('disappear');
    fDescription.classList.add('disappear');
    sfDescription.classList.remove('disappear');
});

aComboColour.forEach(colour => colour.addEventListener('click', (value) => {
    sound(233.08);
    tl.clear();
    tl.set('.aFlash', {opacity: '0%'});
    tl.fromTo('.aSharpGrey', 0.5, {scale: 1, opacity: '90%', transformOrigin: 'center'}, {scale: 1.6, opacity: '0%', transformOrigin: 'center'});

    innerText.filter(note => { 
        if (note == aSharpInner) {
        note.classList.remove('noColour');
        } else {
        note.classList.add('noColour');
        }
    });

    outerText.forEach(outer => outer.classList.add('noColour'));
    allColour.forEach(all => { all.classList.add('noColour');})
    allTouch.forEach(all => all.classList.remove('noColour'));
    chromaticButton.forEach(button => button.classList.remove('noColour'));
    sDescription.classList.add('disappear');
    fDescription.classList.add('disappear');
    sfDescription.classList.remove('disappear');

}));

bColour.addEventListener('click', (value) => {
    sound(246.94);
    tl.clear();
    tl.set('.aFlash', {opacity: '0%'});
    tl.fromTo('.bGrey', 0.5, {scale: 1, opacity: '90%', transformOrigin: 'center'}, {scale: 1.6, opacity: '0%', transformOrigin: 'center'});
   
    innerText.filter(note => { 
        if (note == bInner) {
        note.classList.remove('noColour');
        } else {
        note.classList.add('noColour');
        }
    });

    outerText.forEach(outer => outer.classList.add('noColour'));
    allColour.forEach(all => { all.classList.add('noColour');})
    allTouch.forEach(all => all.classList.remove('noColour'));
    chromaticButton.forEach(button => button.classList.remove('noColour'));
    sDescription.classList.add('disappear');
    fDescription.classList.add('disappear');
    sfDescription.classList.remove('disappear');
});

cColour.addEventListener('click', (value) => {
    sound(261.63);
    tl.clear();
    tl.set('.aFlash', {opacity: '0%'});
    tl.fromTo('.cGrey', 0.5, {scale: 1, opacity: '90%', transformOrigin: 'center'}, {scale: 1.6, opacity: '0%', transformOrigin: 'center'});

    innerText.filter(note => { 
        if (note == cInner) {
        note.classList.remove('noColour');
        } else {
        note.classList.add('noColour');
        }
    });

    outerText.forEach(outer => outer.classList.add('noColour'));
    allColour.forEach(all => { all.classList.add('noColour');})
    allTouch.forEach(all => all.classList.remove('noColour'));
    chromaticButton.forEach(button => button.classList.remove('noColour'));
    sDescription.classList.add('disappear');
    fDescription.classList.add('disappear');
    sfDescription.classList.remove('disappear');
});

cComboColour.forEach(colour => colour.addEventListener('click', (value) => {
    sound(277.18);
    tl.clear();
    tl.set('.aFlash', {opacity: '0%'});
    tl.fromTo('.cSharpGrey', 0.5, {scale: 1, opacity: '90%', transformOrigin: 'center'}, {scale: 1.6, opacity: '0%', transformOrigin: 'center'});
   
       innerText.filter(note => { 
        if (note == cSharpInner) {
        note.classList.remove('noColour');
        } else {
        note.classList.add('noColour');
        }
    });

    outerText.forEach(outer => outer.classList.add('noColour'));
    allColour.forEach(all => { all.classList.add('noColour');})
    allTouch.forEach(all => all.classList.remove('noColour'));
    chromaticButton.forEach(button => button.classList.remove('noColour'));
    sDescription.classList.add('disappear');
    fDescription.classList.add('disappear');
    sfDescription.classList.remove('disappear');
}));

dColour.addEventListener('click', (value) => {
    sound(293.66);
    tl.clear();
    tl.set('.aFlash', {opacity: '0%'});
    tl.fromTo('.dGrey', 0.5, {scale: 1, opacity: '90%', transformOrigin: 'center'}, {scale: 1.6, opacity: '0%', transformOrigin: 'center'});
   
    innerText.filter(note => { 
        if (note == dInner) {
        note.classList.remove('noColour');
        } else {
        note.classList.add('noColour');
        }
    });

    outerText.forEach(outer => outer.classList.add('noColour'));
    allColour.forEach(all => { all.classList.add('noColour');})
    allTouch.forEach(all => all.classList.remove('noColour'));
    chromaticButton.forEach(button => button.classList.remove('noColour'));
    sDescription.classList.add('disappear');
    fDescription.classList.add('disappear');
    sfDescription.classList.remove('disappear');
});

dComboColour.forEach(colour => colour.addEventListener('click', (value) => {
    sound(311.13);
    tl.clear();
    tl.set('.aFlash', {opacity: '0%'});
    tl.fromTo('.dSharpGrey', 0.5, {scale: 1, opacity: '90%', transformOrigin: 'center'}, {scale: 1.6, opacity: '0%', transformOrigin: 'center'});
   
    innerText.filter(note => { 
        if (note == dSharpInner) {
        note.classList.remove('noColour');
        } else {
        note.classList.add('noColour');
        }
    });

    outerText.forEach(outer => outer.classList.add('noColour'));
    allColour.forEach(all => { all.classList.add('noColour');})
    allTouch.forEach(all => all.classList.remove('noColour'));
    chromaticButton.forEach(button => button.classList.remove('noColour'));
    sDescription.classList.add('disappear');
    fDescription.classList.add('disappear');
    sfDescription.classList.remove('disappear');
}));

eColour.addEventListener('click', (value) => {
    sound(329.63);
    tl.clear();
    tl.set('.aFlash', {opacity: '0%'});
    tl.fromTo('.eGrey', 0.5, {scale: 1, opacity: '90%', transformOrigin: 'center'}, {scale: 1.6, opacity: '0%', transformOrigin: 'center'});
   
    innerText.filter(note => { 
        if (note == eInner) {
        note.classList.remove('noColour');
        } else {
        note.classList.add('noColour');
        }
    });

    outerText.forEach(outer => outer.classList.add('noColour'));
    allColour.forEach(all => { all.classList.add('noColour');})
    allTouch.forEach(all => all.classList.remove('noColour'));
    chromaticButton.forEach(button => button.classList.remove('noColour'));
    sDescription.classList.add('disappear');
    fDescription.classList.add('disappear');
    sfDescription.classList.remove('disappear');
});

fColour.addEventListener('click', (value) => {
    sound(349.23);
    tl.clear();
    tl.set('.aFlash', {opacity: '0%'});
    tl.fromTo('.fGrey', 0.5, {scale: 1, opacity: '90%', transformOrigin: 'center'}, {scale: 1.6, opacity: '0%', transformOrigin: 'center'});
   
    innerText.filter(note => { 
        if (note == fInner) {
        note.classList.remove('noColour');
        } else {
        note.classList.add('noColour');
        }
    });
 
    outerText.forEach(outer => outer.classList.add('noColour'));
    allColour.forEach(all => { all.classList.add('noColour');})
    allTouch.forEach(all => all.classList.remove('noColour'));
    chromaticButton.forEach(button => button.classList.remove('noColour'));
    sDescription.classList.add('disappear');
    fDescription.classList.add('disappear');
    sfDescription.classList.remove('disappear');
});

fComboColour.forEach(colour => colour.addEventListener('click', (value) => {
    sound(369.99);
    tl.clear();
    tl.set('.aFlash', {opacity: '0%'});
    tl.fromTo('.fSharpGrey', 0.5, {scale: 1, opacity: '90%', transformOrigin: 'center'}, {scale: 1.6, opacity: '0%', transformOrigin: 'center'});
   
     innerText.filter(note => { 
        if (note == fSharpInner) {
        note.classList.remove('noColour');
        } else {
        note.classList.add('noColour');
        }
    });

    outerText.forEach(outer => outer.classList.add('noColour'));
    allColour.forEach(all => { all.classList.add('noColour');})
    allTouch.forEach(all => all.classList.remove('noColour'));
    chromaticButton.forEach(button => button.classList.remove('noColour'));
    sDescription.classList.add('disappear');
    fDescription.classList.add('disappear');
    sfDescription.classList.remove('disappear');
}));

gColour.addEventListener('click', (value) => {
    sound(392.0);
    tl.clear();
    tl.set('.aFlash', {opacity: '0%'});
    tl.fromTo('.gGrey', 0.5, {scale: 1, opacity: '90%', transformOrigin: 'center'}, {scale: 1.6, opacity: '0%', transformOrigin: 'center'});
   
    innerText.filter(note => { 
        if (note == gInner) {
        note.classList.remove('noColour');
        } else {
        note.classList.add('noColour');
        }
    });

    outerText.forEach(outer => outer.classList.add('noColour'));
    allColour.forEach(all => { all.classList.add('noColour');})
    allTouch.forEach(all => all.classList.remove('noColour'));
    chromaticButton.forEach(button => button.classList.remove('noColour'));
    sDescription.classList.add('disappear');
    fDescription.classList.add('disappear');
    sfDescription.classList.remove('disappear');
});

gComboColour.forEach(colour => colour.addEventListener('click', (value) => {

    sound(415.3);
    tl.clear();
    tl.set('.aFlash', {opacity: '0%'});
    tl.fromTo('.gSharpGrey', 0.5, {scale: 1, opacity: '90%', transformOrigin: 'center'}, {scale: 1.6, opacity: '0%', transformOrigin: 'center'});

     innerText.filter(note => { 
        if (note == gSharpInner) {
        note.classList.remove('noColour');
        } else {
        note.classList.add('noColour');
        }
    });

    outerText.forEach(outer => outer.classList.add('noColour'));
    allColour.forEach(all => {all.classList.add('noColour');})
    allTouch.forEach(all => all.classList.remove('noColour'));
    chromaticButton.forEach(button => button.classList.remove('noColour'));
    sDescription.classList.add('disappear');
    fDescription.classList.add('disappear');
    sfDescription.classList.remove('disappear');
}));

