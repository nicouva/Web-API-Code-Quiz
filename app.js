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
    answers: {
      a: "Padding",
      b: "innerHTML",
      c: "text-decoration",
      d: "body"
    },
    correctAnswer: "b"
  },
  {
    question: "What is BootStrap?",
    answers: {
      a: "shoelaces",
      b: "styling library",
      c: "JavaScript element",
      d: "Element Id"
    },
    correctAnswer: "b"
  },
  {
    question: "Which of these statements are true?",
    answers: {
      a: "alerts, prompts, confirms are String Concatentations. ",
      b: "CamelCase is frequently used in JavaScript",
      c: "VS Code let the users tab to code.",
      d: "Coding is fueled by magic."
    },
    correctAnswer: "b"
  },
  {
    question: "An Array is...",
    answers: {
      a: "to collect Data.",
      b: "a variable.",
      c: "to run an action.",
      d: "to run afar."
    },
    correctAnswer: "a"
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

