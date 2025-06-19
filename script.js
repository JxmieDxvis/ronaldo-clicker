
let score = 0;
let gps = 0;
let clickPower = 1;

document.getElementById("ronaldo").addEventListener("click", () => {
  score += clickPower;
  updateScore();
});

function updateScore() {
  document.getElementById("score").innerText = "Goals Scored: " + score;
}

function buyUpgrade(type) {
  if (type === "fans" && score >= 25) {
    score -= 25;
    gps += 1;
  } else if (type === "boots" && score >= 50) {
    score -= 50;
    clickPower *= 2;
  }
  updateScore();
}

setInterval(() => {
  score += gps;
  updateScore();
}, 1000);
