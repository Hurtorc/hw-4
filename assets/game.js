var quizData = [
    {
        question: "What was the first commercially successful videogame?",
        a: "Pong",
        b: "Pacman",
        c: "Computer Space",
        d: "Galaxy Game",
        correct: "a",
        //put questions here and repeat on new lines
    },
    {
        question: "In what year did the first Star Wars release?",
        a: "1980",
        b: "1983",
        c: "1977",
        d: "1979",
        correct: "c",
        //put questions here and repeat on new lines
    },
    {
        question: "What color shirts are associated Star Trek?",
        a: "Green Shirts",
        b: "Yellow Shirts",
        c: "Blue Shirts",
        d: "Red Shirts",
        correct: "d",
        //put questions here and repeat on new lines
    },
    {
        question: "What videogame has sold the most copies alf all time?",
        a: "PUBG: Battlegrounds",
        b: "Minecraft",
        c: "Grand Theft Auto V",
        d: "Overwatch",
        correct: "b",
        //put questions here and repeat on new lines
    },
];


var answerEls = document.querySelectorAll('.answer')
var quiz = document.getElementById('quiz')
var question = document.getElementById('question')
var a_text = document.getElementById('a_text')
var b_text = document.getElementById('b_text')
var c_text = document.getElementById('c_text')
var d_text = document.getElementById('d_text')
var submitBtn = document.getElementById('submit')



let currentQuiz = 0
let score = 0

loadQuiz()
// Function to replace all the HTML text with the questions
function loadQuiz() {

    deselectAnswers()

    var currentQuizdata = quizData[currentQuiz]

    question.innerText = currentQuizdata.question
    a_text.innerText = currentQuizdata.a
    b_text.innerText = currentQuizdata.b
    c_text.innerText = currentQuizdata.c
    d_text.innerText = currentQuizdata.d
}
// Deselct the answerrs on start
function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if (answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}
// Submit button for questions
submitBtn.addEventListener('click', () => {
    var answer = getSelected()
    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++
        }

        currentQuiz++

        if (currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML =
                `<h2>You answered ${score}/${quizData.length} questions correctly</h2>`
        }
    }
})
//Timer function
var timeEl = document.querySelector(".time");


var secondsLeft = 30;

function setTime() {
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timeEl.textContent = secondsLeft + " seconds left.";
        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            sendMessage();
        }

    }, 1000);
}
function sendMessage() {
    timeEl.textContent = "Times Up!";
}


setTime();