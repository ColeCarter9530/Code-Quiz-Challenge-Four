const questions = [
    {
        question: "What style of writing is the following text 'ThisIsSomeExampleText'",
        answers: [
            { text: "Rodeo Script", correct: false},
            { text: "Sheep Writing", correct: false},
            { text: "Camel Casing", correct: true},
            { text: "All of The Above", correct: false}
        ]
    },
    {
        question: "Are 'Java' and 'JavaScript' the same language?",
        answers: [
            { text: "Yes, they are the same", correct: false},
            { text: "Sometimes", correct: false},
            { text: "Java is written with JavaScript", correct: false},
            { text: "No, they are very different", correct: true}
        ]
    },
    {
        question: "How do you link your JavaScript file to your html?",
        answers: [
            { text: "Using a <link> tag", correct: false},
            { text: "Using a <h1> tag", correct: false},
            { text: "Using a <script> tag", correct: true},
            { text: "You dont have to link them", correct: false}
        ]
    },
    {
        question: "Which of the options below are the correct way to write a JavaScript function?",
        answers: [
            { text: "function thisFunction()", correct: true},
            { text: "function <thisFunction>", correct: false},
            { text: "function {thisFunction}", correct: false},
            { text: "None of the above", correct: false}
        ]
    },
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answers");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerhtml = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    })
}

function resetState() {
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild)
    }

}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classlist.add("correct");
        score++;
    } else{
        selectedBtn.classlist.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton() {
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    } else {
        showScore();
    }
}

nextButton.addEventListener("click", ()=> {
    if(currentQuestionIndex < questions.length){
        handleNextButton()
        } else {
            startQuiz();
    }
})
function timer(){
    var sec = 60;
    var timer = setInterval(function(){
        document.getElementById('timer').innerHTML=''+sec;
        sec--;
        if (sec < 0) {
            clearInterval(timer);
        }
    }, 1000);
}
timer();
startQuiz();