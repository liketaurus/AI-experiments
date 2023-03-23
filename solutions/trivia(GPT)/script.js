const quizContainer = document.getElementById('quiz');
const questionEl = document.getElementById('question');
const btn0 = document.getElementById('btn0');
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');
const progressEl = document.getElementById('progress');

let currentQuestionIndex = 0;
let score = 0;

const questions = [
  {
    question: 'Яка столиця України?',
    answers: [
      'Київ',
      'Львів',
      'Харків',
      'Одеса'
    ],
    correctAnswer: 0,
    fact: 'Київ - це столиця України з 1991 року.'
  },
  {
    question: 'Який найбільший океан у світі?',
    answers: [
      'Тихий',
      'Атлантичний',
      'Індійський',
      'Північний Льодовитий'
    ],
    correctAnswer: 0,
    fact: 'Тихий океан - найбільший океан у світі, який займає приблизно 63 мільйони квадратних миль.'
  }
];

function showQuestion() {
  const question = questions[currentQuestionIndex];
  questionEl.textContent = question.question;
  btn0.textContent = question.answers[0];
  btn1.textContent = question.answers[1];
  btn2.textContent = question.answers[2];
  btn3.textContent = question.answers[3];
 // додаємо обробники подій click до кожної кнопки
  btn0.addEventListener('click', () => {
    checkAnswer(0);
  });
  btn1.addEventListener('click', () => {
    checkAnswer(1);
  });
  btn2.addEventListener('click', () => {
    checkAnswer(2);
  });
  btn3.addEventListener('click', () => {
    checkAnswer(3);
  });
}

function checkAnswer(answerIndex) {
  const question = questions[currentQuestionIndex];
  if (question.correctAnswer === answerIndex) {
    score++;
    const fact = question.fact;
    questionEl.textContent = 'Правильно! ' + fact;
  } else {
    questionEl.textContent = 'Неправильно.';
  }
  currentQuestionIndex++;
  showProgress();
  if (currentQuestionIndex < questions.length) {
    setTimeout(function() {
      showQuestion();
    }, 2000); // затримка на 2 секунди
  } else {
    setTimeout(function() {
      quizContainer.innerHTML = '<h1>Готово!</h1>' +
        '<p>Ви набрали ' + score + ' з ' + questions.length + ' балів.</p>';
    }, 2000); // затримка на 2 секунди
  }
}

function showProgress() {
  progressEl.textContent = 'Питання ' + (currentQuestionIndex + 1) + ' з ' + questions.length;
}

showQuestion();
