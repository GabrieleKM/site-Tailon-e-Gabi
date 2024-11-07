document.addEventListener("DOMContentLoaded", function() {
    const questions = [
        {
            question: "Em qual continente se localiza o Brasil?",
            answers: [
                { text: "América do Sul", correct: true },
                { text: "Ásia", correct: false },
                { text: "Europeu", correct: false },
                { text: "Oceania", correct: false }
            ]
        },
        {
            question: "Quais os pricipais oceanos do mundo?",
            answers: [
                { text: "Mar Vermelho e Antártico", correct: false },
                { text: "Atlântico, Pacífico, Índico e Ártico", correct: true },
                { text: "Pacífico, Ártico, Antártico e Índico", correct: false },
                { text: "Mar Vermelho, Índico e Atlântico", correct: false }
            ]
        },
        {
            question: "Qual o menor país do mundo?",
            answers: [
                { text: "Rússia", correct: false },
                { text: "Vaticano", correct: true },
                { text: "Japão", correct: false },
                { text: "Maldivas", correct: false }
            ]
        },
        {
            question: "Quantos páises existem no mundo hoje?",
            answers: [
                { text: "198", correct: false },
                { text: "195", correct: true },
                { text: "207", correct: false },
                { text: "98", correct: false }
            ]
        },
        {
            question: "Qual a maior montanha do mundo?",
            answers: [
                { text: "Monte Everest", correct: true },
                { text: "Monte Fuji", correct: false },
                { text: "pão de açúcar", correct: false },
                { text: "pico da neblina", correct: false }
            ]
        }
    ];

    let currentQuestionIndex = 0;
    let score = 0;

    const questionElement = document.getElementById('question');
    const answerButtonsElement = document.getElementById('answer-buttons');
    const nextButton = document.getElementById('next-button');
    const resultContainer = document.getElementById('result-container');
    const scoreElement = document.getElementById('score');
    const totalQuestionsElement = document.getElementById('total-questions');
    const restartButton = document.getElementById('restart-button');
    const quizContainer = document.getElementById('quiz-container');

    function startGame() {
        currentQuestionIndex = 0;
        score = 0;
        nextButton.style.display = 'none';
        resultContainer.style.display = 'none';
        quizContainer.style.display = 'block';
        showQuestion(questions[currentQuestionIndex]);
    }

    function showQuestion(question) {
        questionElement.innerText = question.question;
        answerButtonsElement.innerHTML = '';
        question.answers.forEach(answer => {
            const button = document.createElement('button');
            button.innerText = answer.text;
            button.classList.add('btn');
            button.addEventListener('click', () => selectAnswer(answer));
            answerButtonsElement.appendChild(button);
        });
    }

    function selectAnswer(answer) {
        if (answer.correct) {
            score++;
        }
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            showQuestion(questions[currentQuestionIndex]);
        } else {
            showResult();
        }
    }

    function showResult() {
        quizContainer.style.display = 'none';
        resultContainer.style.display = 'block';
        scoreElement.innerText = score;
        totalQuestionsElement.innerText = questions.length;
    }

    nextButton.addEventListener('click', () => {
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            showQuestion(questions[currentQuestionIndex]);
        } else {
            showResult();
        }
    });

    restartButton.addEventListener('click', startGame);

    startGame();
});