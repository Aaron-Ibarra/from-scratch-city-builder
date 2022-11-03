/* Imports */

/* Get DOM Elements */
const heroEl = document.getElementById('hero');
const arenaEl = document.getElementById('arena');

const heroSelect = document.getElementById('hero-dropdown');
const arenaSelect = document.getElementById('arena-dropdown');

/* State */
let heroCounter = 0;
let arenaCounter = 0;

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

/* Display Functions */
// (don't forget to call any display functions you want to run on page load!)
