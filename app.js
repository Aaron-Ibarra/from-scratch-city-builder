/* Imports */

/* Get DOM Elements */
const heroEl = document.getElementById('hero');
const heroSelect = document.getElementById('hero-dropdown');
/* State */

/* Events */
heroSelect.addEventListener('change', (e) => {
    const value = e.target.value;
});
/* Display Functions */
heroEl.style.backgroundImage = `url('https://placekitten.com/200/300')`;
// (don't forget to call any display functions you want to run on page load!)
