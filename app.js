/* Imports */

/* Get DOM Elements */
const heroEl = document.getElementById('hero');
const heroSelect = document.getElementById('hero-dropdown');
/* State */
let heroCounter = 0;
/* Events */
heroSelect.addEventListener('change', (e) => {
    const value = e.target.value;
    heroCounter++;
    //heroEl.style.backgroundImage = `url('')`;
    console.log(heroCounter);
});
/* Display Functions */
// (don't forget to call any display functions you want to run on page load!)
