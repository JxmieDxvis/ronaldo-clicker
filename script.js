
let score = 0;
let gps = 0;
let clickPower = 1;

function updateScore() {
  document.getElementById("score").innerText = "Goals Scored: " + Math.floor(score);
  saveProgress();
}

function clickRonaldo() {
  score += clickPower;
  updateScore();
}

document.getElementById("ronaldo").addEventListener("click", clickRonaldo);

function buyUpgrade(type) {
  if (type === "fans" && score >= 25) {
    score -= 25;
    gps += 1;
  } else if (type === "boots" && score >= 50) {
    score -= 50;
    clickPower *= 2;
  } else if (type === "goldenBoots" && score >= 150) {
    score -= 150;
    clickPower += 5;
  } else if (type === "teamSupport" && score >= 300) {
    score -= 300;
    gps += 10;
  }
  updateScore();
}

function toggleStore() {
  const store = document.getElementById("store");
  store.classList.toggle("hidden");
}

// Save/load progress
function saveProgress() {
  localStorage.setItem("ronaldo_clicker_save", JSON.stringify({
    score, gps, clickPower
  }));
}

function loadProgress() {
  const save = localStorage.getItem("ronaldo_clicker_save");
  if (save) {
    const data = JSON.parse(save);
    score = data.score || 0;
    gps = data.gps || 0;
    clickPower = data.clickPower || 1;
    updateScore();
  }
}

// Passive GPS income
setInterval(() => {
  score += gps;
  updateScore();
}, 1000);

window.onload = loadProgress;
