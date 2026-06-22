const quizData = [
{
    question: "What does HTML stand for?",
    answers: [
        "Hyper Text Markup Language",
        "High Text Machine Language",
        "Hyper Tool Markup Language",
        "Home Text Markup Language"
    ],
    correct: 0
},
{
    question: "Which language is used for styling web pages?",
    answers: ["HTML", "Python", "CSS", "Java"],
    correct: 2
},
{
    question: "Which keyword declares a variable in JavaScript?",
    answers: ["var", "int", "string", "float"],
    correct: 0
}
];

let currentQuestion = 0;
let score = 0;

function loadQuestion()
{
    let q = quizData[currentQuestion];

    document.getElementById("question").innerHTML =
        q.question;

    let answersDiv =
        document.getElementById("answers");

    answersDiv.innerHTML = "";

    q.answers.forEach((answer,index)=>{
        answersDiv.innerHTML += `
        <label class="answer">
            <input type="radio"
                   name="answer"
                   value="${index}">
            ${answer}
        </label>`;
    });
}

function nextQuestion()
{
    let selected =
        document.querySelector(
            'input[name="answer"]:checked'
        );

    if(!selected)
    {
        alert("Please select an answer");
        return;
    }

    if(Number(selected.value) ===
       quizData[currentQuestion].correct)
    {
        score++;
    }

    currentQuestion++;

    if(currentQuestion < quizData.length)
    {
        loadQuestion();
    }
    else
    {
        document.querySelector(".container")
        .innerHTML = `
        <h2>Quiz Finished</h2>
        <h3>Your Score: ${score}/${quizData.length}</h3>
        `;
    }
}

loadQuestion();