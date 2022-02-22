//SOUND
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
  }
  
  //NOTE CIRCLES 
  const aColour = document.querySelector('.aColour');
  const aSharpColour = document.querySelectorAll('.aSharpColour');
  const bColour = document.querySelector('.bColour');
  const cColour = document.querySelector('.cColour');
  const cSharpColour = document.querySelectorAll('.cSharpColour');
  const dColour = document.querySelector('.dColour');
  const dSharpColour = document.querySelectorAll('.dSharpColour');
  const eColour = document.querySelector('.eColour');
  const fColour = document.querySelector('.fColour');
  const fSharpColour = document.querySelectorAll('.fSharpColour');
  const gColour = document.querySelector('.gColour');
  const gSharpColour = document.querySelectorAll('.gSharpColour');
  
  //NOTE TEXT 
  const aText = document.querySelector('.aText');
  const aSharpText = document.querySelector('.aSharpText');
  const aFlatText = document.querySelector('.aFlatText');
  const bText = document.querySelector('.bText');
  const cText = document.querySelector('.cText');
  const cSharpText = document.querySelector('.cSharpText');
  const cFlatText = document.querySelector('.cFlatText');
  const dText = document.querySelector('.dText');
  const dSharpText = document.querySelector('.dSharpText');
  const dFlatText = document.querySelector('.dFlatText');
  const eText = document.querySelector('.eText');
  const fText = document.querySelector('.fText');
  const fSharpText = document.querySelector('.fSharpText');
  const fFlatText = document.querySelector('.fFlatText');
  const gText = document.querySelector('.gText');
  const gSharpText = document.querySelector('.gSharpText');
  const gFlatText = document.querySelector('.gFlatText');
  
  //NOTE TEXT ARRAY
  const noteText = [aText, aSharpText, aFlatText, bText, cText, cSharpText, cFlatText, dText, dSharpText, dFlatText, eText, fText, fSharpText, fFlatText, gText, gSharpText, gFlatText];
  noteText.forEach(note => {note.classList.add('disappear');})
  
  //NOTES TYPES
  let flatNote = document.querySelectorAll('.flatNote');
  let sharpNote = document.querySelectorAll('.sharpNote');
  let naturalNote = document.querySelectorAll('.naturalNote');
  
  //TEXT TYPES
  let flatText = document.querySelectorAll('.flatText');
  let sharpText = document.querySelectorAll('.sharpText');
  let naturalText = document.querySelectorAll('.naturalText');
  
  //SILENT TEXT
  let silentText = document.querySelector('.silent');
  
  //CIRCLE EVENTS
  let tl = gsap.timeline();
  
  tl.fromTo('.aOneFlash', .8, {fill:'salmon', opacity:'0%'}, {opacity: '100%', yoyoEase: 'true', ease: Power2.easeInOut, repeat: '-1'});
  
  aColour.addEventListener('click', (value) => {
    sound(220);
    tl.clear();
    tl.set('.aOneFlash', {opacity: '100%'});
    tl.set('.aOneFlash', {fill: '#ebd52f'});
    tl.fromTo('.aGrey', 0.5, {scale: 1, opacity: '90%', transformOrigin: 'center'}, {scale: 1.6, opacity: '0%', transformOrigin: 'center'});
    noteText.filter(note => { if(note = aText) {note.classList.remove('disappear');}});
    noteText.filter(note => { if(note !== aText) {note.classList.add('disappear');}});
  });
  
  aSharpColour.forEach(colour => colour.addEventListener('click', (value) => {
    sound(233.08);
    tl.set('.aSharpColour', {opacity: '100%'});
    tl.fromTo('.aSharpGrey', 0.5, {scale: 1, opacity: '90%', transformOrigin: 'center'}, {scale: 1.6, opacity: '0%', transformOrigin: 'center'});
    noteText.filter(note => { if(note = aSharpText) {note.classList.remove('disappear');}});
    noteText.filter(note => { if(note !== aSharpText) {note.classList.add('disappear');}});
  }));
  
  bColour.addEventListener('click', (value) => {
    sound(246.94);
    tl.set('.bColour', {opacity: '100%'});
    tl.fromTo('.bGrey', 0.5, {scale: 1, opacity: '90%', transformOrigin: 'center'}, {scale: 1.6, opacity: '0%', transformOrigin: 'center'});
    noteText.filter(note => { if(note = bText) {note.classList.remove('disappear');}});
    noteText.filter(note => { if(note !== bText) {note.classList.add('disappear');}});
  });
  
  cColour.addEventListener('click', (value) => {
    sound(261.63);
    tl.set('.cColour', {opacity: '100%'});
    tl.fromTo('.cGrey', 0.5, {scale: 1, opacity: '90%', transformOrigin: 'center'}, {scale: 1.6, opacity: '0%', transformOrigin: 'center'});
    noteText.filter(note => { if(note = cText) {note.classList.remove('disappear');}});
    noteText.filter(note => { if(note !== cText) {note.classList.add('disappear');}});
  });
  
  cSharpColour.forEach(colour => colour.addEventListener('click', (value) => {
    sound(277.18);
    tl.set('.cSharpColour', {opacity: '100%'});
    tl.fromTo('.cSharpGrey', 0.5, {scale: 1, opacity: '90%', transformOrigin: 'center'}, {scale: 1.6, opacity: '0%', transformOrigin: 'center'});
    noteText.filter(note => { if(note = cSharpText) {note.classList.remove('disappear');}});
    noteText.filter(note => { if(note !== cSharpText) {note.classList.add('disappear');}});
  }));
  
  dColour.addEventListener('click', (value) => {
    sound(293.66);
    tl.set('.dColour', {opacity: '100%'});
    tl.fromTo('.dGrey', 0.5, {scale: 1, opacity: '90%', transformOrigin: 'center'}, {scale: 1.6, opacity: '0%', transformOrigin: 'center'});
    noteText.filter(note => { if(note = dText) {note.classList.remove('disappear');}});
    noteText.filter(note => { if(note !== dText) {note.classList.add('disappear');}});
  });
  
  dSharpColour.forEach(colour => colour.addEventListener('click', (value) => {
    sound(311.13);
    tl.set('.dSharpColour', {opacity: '100%'});
    tl.fromTo('.dSharpGrey', 0.5, {scale: 1, opacity: '90%', transformOrigin: 'center'}, {scale: 1.6, opacity: '0%', transformOrigin: 'center'});
    noteText.filter(note => { if(note = dSharpText) {note.classList.remove('disappear');}});
    noteText.filter(note => { if(note !== dSharpText) {note.classList.add('disappear');}});
  }));
  
  eColour.addEventListener('click', (value) => {
    sound(329.63);
    tl.set('.eColour', {opacity: '100%'});
    tl.fromTo('.eGrey', 0.5, {scale: 1, opacity: '90%', transformOrigin: 'center'}, {scale: 1.6, opacity: '0%', transformOrigin: 'center'});
    noteText.filter(note => { if(note = eText) {note.classList.remove('disappear');}});
    noteText.filter(note => { if(note !== eText) {note.classList.add('disappear');}});
  });
  
  fColour.addEventListener('click', (value) => {
    sound(349.23);
    tl.set('.fColour', {opacity: '100%'});
    tl.fromTo('.fGrey', 0.5, {scale: 1, opacity: '90%', transformOrigin: 'center'}, {scale: 1.6, opacity: '0%', transformOrigin: 'center'});
    noteText.filter(note => { if(note = fText) {note.classList.remove('disappear');}});
    noteText.filter(note => { if(note !== fText) {note.classList.add('disappear');}});
  });
  
  fSharpColour.forEach(colour => colour.addEventListener('click', (value) => {
    sound(369.99);
    tl.set('.fSharpColour', {opacity: '100%'});
    tl.fromTo('.fSharpGrey', 0.5, {scale: 1, opacity: '90%', transformOrigin: 'center'}, {scale: 1.6, opacity: '0%', transformOrigin: 'center'});
    noteText.filter(note => { if(note = fSharpText) {note.classList.remove('disappear');}});
    noteText.filter(note => { if(note !== fSharpText) {note.classList.add('disappear');}});
  }));
  
  gColour.addEventListener('click', (value) => {
    sound(392.0);
    tl.set('.gColour', {opacity: '100%'});
    tl.fromTo('.gGrey', 0.5, {scale: 1, opacity: '90%', transformOrigin: 'center'}, {scale: 1.6, opacity: '0%', transformOrigin: 'center'});
    noteText.filter(note => { if(note = gText) {note.classList.remove('disappear');}});
    noteText.filter(note => { if(note !== gText) {note.classList.add('disappear');}});
  });
  
  gSharpColour.forEach(colour => colour.addEventListener('click', (value) => {
    sound(415.3);
    tl.set('.gSharpColour', {opacity: '100%'});
    tl.fromTo('.gSharpGrey', 0.5, {scale: 1, opacity: '90%', transformOrigin: 'center'}, {scale: 1.6, opacity: '0%', transformOrigin: 'center'});
    noteText.filter(note => { if(note = gSharpText) {note.classList.remove('disappear');}});
    noteText.filter(note => { if(note !== gSharpText) {note.classList.add('disappear');}});
  }));