/* Imports */

/* Get DOM Elements */
const heroEl = document.getElementById('hero');
const arenaEl = document.getElementById('arena');
const villainEl = document.getElementById('villain');

const heroSelect = document.getElementById('hero-dropdown');
const arenaSelect = document.getElementById('arena-dropdown');
const villainSelect = document.getElementById('villain-dropdown');

const voicelineInput = document.getElementById('voiceline-input');
const voicelineBtn = document.getElementById('voiceline-btn');
const voicelineDisDiv = document.getElementById('voiceline-display');

/* State */
let heroCounter = 0;
let arenaCounter = 0;
let villainCounter = 0;
let voicelines = [];

/* Events */
heroSelect.addEventListener('change', (e) => {
    const value = e.target.value;
    heroCounter++;
    heroEl.style.backgroundImage = `url('./assets/${value}.png')`;
});

arenaSelect.addEventListener('change', (e) => {
    const value = e.target.value;
    arenaCounter++;
    arenaEl.style.backgroundImage = `url('./assets/${value}.png')`;
});

villainSelect.addEventListener('change', (e) => {
    const value = e.target.value;
    villainCounter++;
    villainEl.style.backgroundImage = `url('./assets/${value}.png')`;
});

voicelineBtn.addEventListener('click', () => {
    const value = voicelineInput.value;
    voicelines.push(value);
    voicelineInput.value = '';
    displayVoicelines();
});

/* Display Functions */
// (don't forget to call any display functions you want to run on page load!)

function displayVoicelines() {
    voicelineDisDiv.textContent = '';
    for (let voiceline of voicelines) {
        const p = document.createElement('p');
        p.textContent = voiceline;
        voicelineDisDiv.append(p);
    }
}
