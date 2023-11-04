const questions = [
    {
        question : "Which is the largest animal in the world?",
        answer: [
            { text : "Shark" , correct : false},
            { text : "Blue whale" , correct : true},
            { text : "Elephant" , correct : false},
            { text : "Giraffe" , correct : false},
        ]

    },
    {
        question : "Which is the largest planet in the solar system?",
        answer: [
            { text : "Saturn" , correct : false},
            { text : "Mars" , correct : false},
            { text : "Jupiter" , correct : true},
            { text : "Venus" , correct : false},
        ]

    },
    {
        question : "Which is the largest continent in the world?",
        answer: [
            { text : "Africa" , correct : false},
            { text : "Asia" , correct : true},
            { text : "Europe" , correct : false},
            { text : "North America" , correct : false},
        ]
    },
    {
        question : "Which is the smallest continent in the world?",
        answer: [
            { text : "Africa" , correct : false},
            { text : "Australia" , correct : true},
            { text : "South America" , correct : false},
            { text : "North America" , correct : false},
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttoons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;
function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetstate();
    let currentQuestionIndex = questions[currentQuestionIndex];
    let question = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestionIndex.
    question;

    currentQuestionIndex.answers.forEach(answer => {
        const buttoon = document.createElement("button");
        button.innerHTML= answer.text;
        buttoon.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }

        buttoon.addEventListener("click",selectAnswer);   
    });
}

function resetstate(){
    nextButton,style.display = "none"
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

startQuiz();









