var quiz = document.getElementById('quiz')
var answerEls = document.querySelectorAll('.answer')
var questionEl = document.getElementById('question')
var a_text = document.getElementById('a_text')
var b_text = document.getElementById('b_text')
var c_text = document.getElementById('c_text')
var d_text = document.getElementById('d_text')
var submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

function loadQuiz() {
    var currentQuizdata = quizData[currentQuiz]
    questionE1.innertext = currentQuizdata.question

}