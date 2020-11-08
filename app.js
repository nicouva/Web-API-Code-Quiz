const quizContainer = document.getElementById('quiz')
const resultsContainer = document.getElementById('results')
const submit = document.getElementById('submit')
const questionText = document.getElementById('question')
const answers = document.getElementsByClassName('answers')
const startButton = document.getElementById('start-btn')
const score = 0
let currentQuestNumber = 0

const quizQuestions = [
  {
    question: "Who invented JavaScript?",
    choices: ["Douglas Crockford", "Mark Zuckerburg", "Brendan Eich", "Boutros-Boutros Ghali"],
    correctAnswer: "Brendan Eich"
  },
  {
    question: "Which one of these is JavaScript?",
    choices: ["Padding", "innerHTML", "text-decoration", "body"],
    correctAnswer: "innerHTML"
  },
  {
    question: "What is BootStrap?",
    choices: ["shoelaces", "styling library", "JavaScript element", "Element Id"],
    correctAnswer: "styling library"
  },
  {
    question: "Which of these statements are true?",
    choices: ["alerts, prompts, confirms are String Concatentations. ", "CamelCase is frequently used in JavaScript", "VS Code let the users tab to code.", "Coding is fueled by magic."],
    correctAnswer: "CamelCase is frequently used in JavaScript"
  },
  {
    question: "An Array is...",
    choices: ["to collect Data.", "a variable.", "to run an action.", "to run afar."],
    correctAnswer: "to collect Data."
  }
  {
    question: "Which of the following function of String object combines the text of two?",
    choices: ["add()", "merge()", "append()"],
    correctAnswer: "concat()"
  }
  {
    question: "Under which tags do you write JavaScript under?",
    choices: ["div", "style", "input type"],
    correctAnswer: "script"
  }
  {
    question: "What's the symbol to assign value to a variable?",
    choices: ["#", "%", "+"],
    correctAnswer: "="
  }
  {
    question: "Please describe 'parseInt'.",
    choices: ["to listen for an event to be actioned", "to create a string of text", "to determine whether a variable is true or false"],
    correctAnswer: "to convert string into numbers."
  }
  {
    question: "How do you call myFunction?",
    choices: ["function myFunction", "Come here, myFunction!", "()"],
    correctAnswer: "myFunction()"
  }
]

startButton.addEventListener('click', time)


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
      displayQuestion()
    })
  }
}


function time() {
  let sec = 30;
  let timer = setInterval(function () {
    document.getElementById('safeTimerDisplay').innerHTML = '00:' + sec;
    sec--;
    if (sec < 0) {
      clearInterval(timer)
    }
  }, 1000);
  displayQuestion()
}


