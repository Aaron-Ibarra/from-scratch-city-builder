/* Imports */

/* Get DOM Elements */
const heroEl = document.getElementById('hero');
const arenaEl = document.getElementById('arena');
const villainEl = document.getElementById('villain');

const heroSelect = document.getElementById('hero-dropdown');
const arenaSelect = document.getElementById('arena-dropdown');
const villainSelect = document.getElementById('villain-dropdown');

/* State */
let heroCounter = 0;
let arenaCounter = 0;
let villainCounter = 0;

/* Events */
heroSelect.addEventListener('change', (e) => {
    const value = e.target.value;
    heroCounter++;
    //heroEl.style.backgroundImage = `url('')`;
});

arenaSelect.addEventListener('change', (e) => {
    const value = e.target.value;
    arenaCounter++;
    //arenaEl.style.backgroundImage = `url('')`;
});

villainSelect.addEventListener('change', (e) => {
    const value = e.target.value;
    villainCounter++;
    //villainEl.style.backgroundImage = `url('')`;
    console.log(value);
    console.log(villainCounter);
});

/* Display Functions */
// (don't forget to call any display functions you want to run on page load!)
