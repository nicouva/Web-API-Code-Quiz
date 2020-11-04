const quizContainer = document.getElementById('quiz')
const resultsContainer = document.getElementById('results')
const submit = document.getElementById('submit')

const quizQuestions = [
  {
    question: "Who invented JavaScript?",
    answers: {
      a: "Douglas Crockford",
      b: "Mark Zuckerburg",
      c: "Brendan Eich",
      d: "Boutros-Boutros Ghali"
    },
    correctAnswer: "c"
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

function buildQuiz() {

}