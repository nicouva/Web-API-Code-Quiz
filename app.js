const quizContainer = document.getElementById('quiz')
const resultsContainer = document.getElementById('results')
const submit = document.getElementById('submit')
const questionText = document.getElementById('question')
const answers = document.getElementsByClassName('answers')
const score = 0
const timer = 30
let currentQuestNumber = 0

const quizQuestions = [
  {
    question: "Who invented JavaScript?",
    choices: ["Douglas Crockford", "Mark Zuckerburg", "Brendan Eich", "Boutros-Boutros Ghali"],
    correctAnswer: "Brendan Eich"
  },
  {
    question: "Which one of these is JavaScript?",
    answers: ["Padding", "innerHTML", "text-decoration", "body"],
    correctAnswer: "innerHTML"
  },
  {
    question: "What is BootStrap?",
    answers: ["shoelaces", "styling library", "JavaScript element", "Element Id"],
    correctAnswer: "styling library"
  },
  {
    question: "Which of these statements are true?",
    answers: ["alerts, prompts, confirms are String Concatentations. ", "CamelCase is frequently used in JavaScript", "VS Code let the users tab to code.", "Coding is fueled by magic."],
    correctAnswer: "CamelCase is frequently used in JavaScript"
  },
  {
    question: "An Array is...",
    answers: ["to collect Data.", "a variable.", "to run an action.", "to run afar."],
    correctAnswer: "to collect Data."
  }
]

function displayQuestion() {
  let currentQuestion = quizQuestions[currentQuestNumber]
  document.getElementById('question').textContent = currentQuestion.question
  for (i = 0; i < answers.length; i++) {
    answers[i].textContent = currentQuestion.choices[i]
    answers[i].addEventListener('click', function (e) {
      console.log(currentQuestion.choices[i])
      console.log(currentQuestion.correctAnswer)
      if (e.target.textContent === currentQuestion.correctAnswer) {
        console.log('Correct Answer')
      } else { console.log('Wrong Answer') }
      currentQuestNumber += 1
      displayQuestion
    })
  }
}
displayQuestion()

function time() {
  let sec = 30;
  time = setInterval(function () {
    document.getElementById('safeTimerDisplay').innerHTML = '00:' + sec;
    sec--;
    if (sec < 0) {
      clearInterval(timer);
    }
  }, 1000);
}
time()