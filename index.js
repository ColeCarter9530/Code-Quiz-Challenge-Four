const questions = [
    {
        question1: "What style of writing is the following text: ThisIsSomeExampleText",
        answers: [
            {text: "Rodeo Script", correct: false},
            {text: "Sheep Writing", correct: false},
            {text: "Camel Casing", correct: true},
            {text: "All of The Above", correct: false}
        ]
    },
    {
        question2: "Are 'Java' and 'JavaScript' the same language?",
        answers: [
            {text: "Yes, they are the same", correct: false},
            {text: "Sometimes", correct: false},
            {text: "Java is written with JavaScript", correct: false},
            {text: "No, they are very different", correct: true}
        ]
    },
    {
        question3: "How do you link your JavaScript file to your html?",
        answers: [
            {text: "Using a <link> tag", correct: false},
            {text: "Using a <h1> tag", correct: false},
            {text: "Using a <script> tag", correct: true},
            {text: "You dont have to link them", correct: false}
        ]
    },
    {
        question4: "Which of the options below are the correct way to write a JavaScript function?",
        answers: [
            {text: "function thisFunction()", correct: true},
            {text: "function <thisFunction>", correct: false},
            {text: "function {thisFunction}", correct: false},
            {text: "None of the above", correct: false}
        ]
    },
];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}