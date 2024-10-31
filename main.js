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
            question: "Quem é conhecido como o pai da IA?",
            answers: [
                { text: "Albert Einstein", correct: false },
                { text: "Alan Turing", correct: true },
                { text: "Isaac Newton", correct: false },
                { text: "Charles Babbage", correct: false }
            ]
        },
        {
            question: "Qual linguagem de programação é popular em IA?",
            answers: [
                { text: "HTML", correct: false },
                { text: "Python", correct: true },
                { text: "CSS", correct: false },
                { text: "JavaScript", correct: false }
            ]
        },
        {
            question: "O que é aprendizado de máquina?",
            answers: [
                { text: "Máquinas que aprendem com dados", correct: true },
                { text: "Máquinas que precisam de manutenção", correct: false },
                { text: "Um tipo de programação", correct: false },
                { text: "Um jogo de vídeo", correct: false }
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