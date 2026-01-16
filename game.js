let level = 0;

const question = document.getElementById("question");
const result = document.getElementById("result");
const progressFill = document.getElementById("progress-fill");
const levelIndicator = document.getElementById("level-indicator");
const gameBox = document.getElementById("game-box");
const hintText = document.getElementById("hint-text");

updateProgress();

function updateProgress() {
  const progress = ((level + 1) / puzzles.length) * 100;
  progressFill.style.width = progress + "%";
  levelIndicator.textContent = `Level ${level + 1} of ${puzzles.length}`;
}

question.innerText = puzzles[level].question;

function check() {
  const user = document.getElementById("answer").value.trim();

  if (user === puzzles[level].answer) {
    result.innerText = "🔓 Unlocked!";
    result.style.color = "#10b981";
    result.style.animation = "bounce 0.6s ease";
    gameBox.style.animation = "glow 0.6s ease";
    hintText.style.display = "none"; // Hide hint on correct answer

    level++;

    if (level < puzzles.length) {
      setTimeout(() => {
        question.innerText = puzzles[level].question;
        result.innerText = "";
        document.getElementById("answer").value = "";
        updateProgress();
        result.style.animation = "";
        gameBox.style.animation = "";
      }, 1500);
    } else {
      setTimeout(() => {
        question.innerText = "🎉 All Locks Opened!";
        document.getElementById("answer").style.display = "none";
        document.querySelector("button").style.display = "none";
        document.getElementById("hint-btn").style.display = "none";
        result.innerText = "Congratulations! You've completed all puzzles!";
        result.style.color = "#fbbf24";
        gameBox.style.animation = "celebrate 2s ease";
      }, 1000);
    }
  } else {
    result.innerText = "❌ Wrong Code!";
    result.style.color = "#ef4444";
    result.style.animation = "shake 0.5s ease";
    gameBox.style.animation = "errorGlow 0.5s ease";

    setTimeout(() => {
      result.style.animation = "";
      gameBox.style.animation = "";
    }, 500);
  }
}

function showHint() {
  hintText.textContent = "💡 " + puzzles[level].hint;
  hintText.style.display = "block";
}

// Add keyboard support
document.getElementById("answer").addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    check();
  }
});
