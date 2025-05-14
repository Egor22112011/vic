const questions = [
    {question: "Что такое HTML?",
        answers: ["Язык разметки", "Язык программирования", "База данных"],
        correctAnswer: 0
    },
    
    {question: "Что такое CSS?",
        answers: ["Стили", "Скрипты", "Функции"],
        correctAnswer: 0
    },

    {question: "Какой оператор используется для увеличения значения переменной на 1?",
        answers:["++", "--", "+++"],
        correctAnswer:0
    },

    {question: "Какой символ используется для определения конца строки в языке программирования C++?",
        answers:["/n", "/div", "/body"],
        correctAnswer:0
    },

    {question: "Какой оператор используется для умножения двух чисел? ",
        answers:["+", "/", "*"],
        correctAnswer:2
    },

    {question: "Какие символы используются для обозначения переменных в языке программирования Python? ",
        answers:["x,a,e", "x,y,z", "y,p,s"],
        correctAnswer:1
    },

    {question: "Какой тег изпользуется для заголовка?",
        answers:["<p>", "<div>", "<h1>"],
        correctAnswer:2
    },

    {question: "Какой файл используется для написания стилей?",
        answers:["script.js", "style.css", "index.html"],
        correctAnswer:1
    },

    {question: "Какое слово используется для написания переменной?",
        answers:["let", "div", "img"],
        correctAnswer:0
    },

    {question: "Какое слово используют для написания функции?",
        answers:["const", "function", "for"],
        correctAnswer:1
    },

    
];


let currentQuestion = 0;
let score = 0;
const questionElement = document.getElementById("question");
const answersElement = document.getElementById("answers");
const submitButton = document.getElementById("submit");
const resultElement = document.getElementById("result");

function loadQuestion() {
    const question = questions[currentQuestion];
    questionElement.textContent = question.question;
    answersElement.innerHTML = "";
    for(let i = 0; i < question.answers.length; i++) {
        const answer = document.createElement("button");
        answer.textContent = question.answers[i];
        answer.addEventListener("click", () => checkAnswer(i));
        answersElement.appendChild(answer);
    }
}


function checkAnswer(answerIndex) {
    const question = questions[currentQuestion];
    if (answerIndex === question.correctAnswer) {
        score++;
    }
    currentQuestion++;
    if (currentQuestion < questions.length) {
        loadQuestion();
    }else {
        showResult();
    }
}

function showResult() {
    questionElement.textContent = "";
    answersElement.innerHTML = "";
    submitButton.style.display = "none";
    resultElement.textContent = `Результат: ${score} из ${questions.length}`;
}

submitButton.addEventListener("click", () => checkAnswer());
loadQuestion();