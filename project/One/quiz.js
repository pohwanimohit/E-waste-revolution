const questions = [
    { question: "E-waste should always be disposed of in regular trash bins.", answer: false },
    { question: "Recycling e-waste helps reduce environmental pollution.", answer: true },
    { question: "Batteries and old mobile phones can be recycled.", answer: true },
    { question: "E-waste contains toxic chemicals that can harm the environment.", answer: true },
    { question: "Throwing electronics in the trash is the best disposal method.", answer: false },
    { question: "E-waste recycling helps conserve natural resources.", answer: true },
    { question: "Old computers cannot be refurbished or reused.", answer: false },
    { question: "Improper disposal of e-waste can cause soil and water pollution.", answer: true },
    { question: "Recycling one million laptops can save energy equivalent to 3,500 homes' electricity in a year.", answer: true },
    { question: "It is illegal to dispose of e-waste in regular garbage in some countries.", answer: true }
];

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
    if (currentQuestionIndex < questions.length) {
        document.getElementById("question").textContent = questions[currentQuestionIndex].question;
    } else {
        document.getElementById("question").textContent = `Quiz Over! Your Final Score: ${score}/10`;
        document.querySelector(".buttons").style.display = "none";
        document.getElementById("restart").style.display = "inline-block";
    }
}

function checkAnswer(userAnswer) {
    if (currentQuestionIndex < questions.length) {
        if (userAnswer === questions[currentQuestionIndex].answer) {
            score++;
            document.getElementById("score").textContent = score;
        }
        currentQuestionIndex++;
        loadQuestion();
    }
}

function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    document.getElementById("score").textContent = score;
    document.querySelector(".buttons").style.display = "block";
    document.getElementById("restart").style.display = "none";
    loadQuestion();
}

window.onload = loadQuestion;
