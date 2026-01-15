let level = 0;

const question = document.getElementById("question");
const result = document.getElementById("result");

question.innerText = puzzles[level].question;

function check() {
  const user = document.getElementById("answer").value;

  if (user === puzzles[level].answer) {
    result.innerText = "🔓 Unlocked!";
    level++;

    if (level < puzzles.length) {
      setTimeout(() => {
        question.innerText = puzzles[level].question;
        result.innerText = "";
        document.getElementById("answer").value = "";
      }, 1000);
    } else {
      question.innerText = "🎉 All Locks Opened!";
      document.getElementById("answer").style.display = "none";
    }
  } else {
    result.innerText = "❌ Wrong Code!";
  }
}
