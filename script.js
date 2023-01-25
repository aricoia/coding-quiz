var start = document.getElementById("start-btn");
var questContainer = document.getElementById("question-container");
var next = document.getElementById("next-btn");
var showQ = document.getElementById("question-div");
var heading = document.getElementById("h2");
var finish = document.getElementById("finish-btn");
var form = document.getElementById("form");
var timer;
var sec;
var timerText = document.getElementById("timer-text");
let count = 0;

form.style.visibility = "hidden";
start.addEventListener("click", startGame);

function startGame() {
  start.style.visibility = "hidden";
  
  startTimer();
  // showQuestion();
  nextQuestion();
}

function startTimer() {
  var sec = 90;
  timer = setInterval(function () {
    timerText.innerHTML = " 00:" + sec;
    sec--;
    if (sec < 0) {
      clearInterval(timer);
    }
  }, 1000);
  
}

var questions = [
  {
    question: ["What was JavaScripts first name?"],
    answers: ["CoffeeScript", "Mocha", "Espresso", "Script"],
    correctAnswer: "Mocha",
  },
  {
    question: ["Is '0'===0 "],
    answers: ["Yes", "No", "No it is just =", "No it is =="],
    correctAnswer: "No it is ==",
  },
  {
    question: ["What should you always end a line with?"],
    answers: [",", ".", ";", ":"],
    correctAnswer: ";",
  },
];

function selectAnswer(event) {
console.log(event);
if (event.target.textContent === questions[count].correctAnswer) {
  count++;
  nextQuestion();
}
}


function nextQuestion() {
  showQ.textContent = questions[count].question[0];
  var button1 = document.getElementById("btn-1");
  var button2 = document.getElementById("btn-2");
  var button3 = document.getElementById("btn-3");
  var button4 = document.getElementById("btn-4");
  button1.textContent = questions[count].answers[0];
  button2.textContent = questions[count].answers[1];
  button3.textContent = questions[count].answers[2];
  button4.textContent = questions[count].answers[3];
  button1.addEventListener("click", selectAnswer);
  button2.addEventListener("click", selectAnswer);
  button3.addEventListener("click", selectAnswer);
  button4.addEventListener("click", selectAnswer);
}

function finishQuiz() {
  clearInterval(timer);
  next.style.visibility = "hidden";
  questContainer.style.visibility = "hidden";
  form.style.visibility = "visible";
  timerText.innerHTML = "Score: " + timer;

}

finish.addEventListener("click", finishQuiz);

next.addEventListener("click", function () {
  count++;
  nextQuestion();
});
