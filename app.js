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
const voiceVillainInput = document.getElementById('voicevillain-input');
const voiceVillainBtn = document.getElementById('voicevillain-btn');
const voiceVillainDisDiv = document.getElementById('voicevillain-display');

const heroTally = document.getElementById('hero-tally');
const arenaTally = document.getElementById('arena-tally');
const villainTally = document.getElementById('villain-tally');

/* State */
let heroCounter = 0;
let arenaCounter = 0;
let villainCounter = 0;
let voicelines = [];
let voicevillains = [];

/* Events */

setImages();

heroSelect.addEventListener('change', (e) => {
    voicelineDisDiv.textContent = '';
    voicelines = [];
    displayVoicelines();

    const value = e.target.value;
    heroCounter++;
    heroEl.style.backgroundImage = `url('./assets/${value}.png')`;
    displayTallies();
});

arenaSelect.addEventListener('change', (e) => {
    const value = e.target.value;
    arenaCounter++;
    arenaEl.style.backgroundImage = `url('./assets/${value}.png')`;
    displayTallies();
});

villainSelect.addEventListener('change', (e) => {
    voiceVillainDisDiv.textContent = '';
    voicevillains = [];
    displayVoiceVillains();

    const value = e.target.value;
    villainCounter++;
    villainEl.style.backgroundImage = `url('./assets/${value}.png')`;
    displayTallies();
});

voicelineBtn.addEventListener('click', () => {
    const value = voicelineInput.value;
    voicelines.push(value);
    voicelineInput.value = '';
    displayVoicelines();
});

voiceVillainBtn.addEventListener('click', () => {
    const value = voiceVillainInput.value;
    voicevillains.push(value);
    voiceVillainInput.value = '';
    displayVoiceVillains();
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

function displayVoiceVillains() {
    voiceVillainDisDiv.textContent = '';
    for (let voicevillain of voicevillains) {
        const p = document.createElement('p');
        p.textContent = voicevillain;
        voiceVillainDisDiv.append(p);
    }
}

function displayTallies() {
    heroTally.textContent = heroCounter;
    arenaTally.textContent = arenaCounter;
    villainTally.textContent = villainCounter;
}

function setImages() {
    heroEl.style.backgroundImage = `url('./assets/batman.png')`;
    arenaEl.style.backgroundImage = `url('./assets/arkham-city.png')`;
    villainEl.style.backgroundImage = `url('./assets/joker.png')`;
}
