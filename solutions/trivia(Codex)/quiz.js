const quiz = [
  {
    question: "Що таке HTML?",
    choices: ["Hyper Text Markup Language", "High Tech Machine Learning", "Hot Tamale Mustard Lime"],
    correctAnswer: "Hyper Text Markup Language",
    fact: "HTML - це мова розмітки гіпертексту, яка використовується для створення веб-сторінок.",
  },
  {
    question: "Що таке CSS?",
    choices:["Cascading Style Sheets", "Computer Science Society", "Crazy Sushi Samba"],
    correctAnswer: "Cascading Style Sheets",
    fact: "CSS - це мова стилізації, яка використовується для прикраси веб-сторінок.",
  },
  {
    question: "Що таке JavaScript?",
    choices: ["JavaScript", "JavaChip Frappuccino", "Jazz Saxophone Trio"],
    correctAnswer: "JavaScript",
    fact: "JavaScript - це мова програмування, яка використовується для створення динамічних веб-сторінок.",
  },
  {
    question: "Що таке DOM?",
    choices: ["Document Object Model", "Dancing Octopus Mascot", "Digital Optical Microscope"],
    correctAnswer: "Document Object Model",
    fact: "DOM - це модель об'єктів документа, яка представляє веб-сторінку як дерево об'єктів.",
  },
  {
    question: "Що таке AJAX?",
    choices: ["Asynchronous JavaScript and XML", "Alligator Juggling Adventure Xperience", "Automated Jetpack Assembly Xperiment"],
    correctAnswer: "Asynchronous JavaScript and XML",
    fact: "AJAX - це технологія, яка дозволяє взаємодіяти з сервером без перезавантаження сторінки.",
  },
  {
    question: "Що таке API?",
    choices: ["Application Programming Interface", "Angry Panda Invasion", "Automated Pizza Inspector"],
    correctAnswer: "Application Programming Interface",
    fact: "API - це інтерфейс, який дозволяє програмі звертатися до функцій та даних іншої програми або сервісу.",
  },
  {
    question: "Що таке Git?",
    choices: ["Git", "Gigantic Italian Truffle", "Global Internet Tracker"],
    correctAnswer: "Git",
    fact: "Git - це розподілена система керування версіями, яка дозволяє зберігати та керувати історією змін коду.",
  },
  {
    question: "Що таке NPM?",
    choices: ["Node Package Manager", "Ninja Pirate Marathon", "Noisy Popcorn Machine"],
    correctAnswer: "Node Package Manager",
    fact: "NPM - це пакетний менеджер для Node.js, який дозволяє інсталювати, оновлювати та керувати залежностями пакетів.",
  },
  {
    question: "Що таке React?",
    choices: ["React", "Retro Arcade Game", "Ridiculous Acrobatic Goat"],
    correctAnswer: "React",
    fact: "React - це бібліотека JavaScript для створення інтерфейсів користувача, яка використовується на багатьох веб-сайтах та додатках.",
  },
  {
    question: "Що таке Node.js?",
    choices: ["Node.js", "Nostalgic Disco Jukebox", "Newly Discovered Jellyfish Species"],
    correctAnswer: "Node.js",
    fact: "Node.js - це середовище виконання JavaScript на стороні сервера, яке дозволяє створювати веб-додатки з використанням JavaScript.",
  },
];

const questionElement = document.getElementById("question");
const choicesElement = document.getElementById("choices");
const progressElement = document.getElementById("progress");
const resultElement = document.getElementById("result");
const factElement = document.getElementById("fact");

let currentQuestionIndex = 0;
let score = 0;

function showQuestion() {
  const question = quiz[currentQuestionIndex];
  questionElement.innerText = question.question;
  choicesElement.innerHTML = "";
  for (let i = 0; i < question.choices.length; i++) {
    const choice = question.choices[i];
    const button = document.createElement("button");
    button.innerText = choice;
    button.classList.add("choice");
    button.addEventListener("click", handleAnswer);
    choicesElement.appendChild(button);
  }
  progressElement.innerText = `Питання ${currentQuestionIndex + 1} з ${quiz.length}`;
}

function handleAnswer(event) {
  const selectedButton = event.target;
  const answer = selectedButton.innerText;
  const question = quiz[currentQuestionIndex];
  if (answer === question.correctAnswer) {
    selectedButton.classList.add("correct");
    score++;
    resultElement.innerText = "Відповідь правильна!";
    factElement.innerText = question.fact;
  } else {
    selectedButton.classList.add("incorrect");
    resultElement.innerText = "Відповідь неправильна.";
  }
  const buttons = choicesElement.querySelectorAll("button");
  buttons.forEach((button) => {
    if (button.innerText === question.correctAnswer) {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  currentQuestionIndex++;
  if (currentQuestionIndex < quiz.length) {
    setTimeout(showQuestion, 1000);
  } else {
    setTimeout(showScore, 1000);
  }
}

function showScore() {
  questionElement.innerText = `Ваш рахунок: ${score} з ${quiz.length}`;
  choicesElement.innerHTML = "";
  progressElement.innerText = "";
  resultElement.innerText = "";
  factElement.innerText = "";
}

showQuestion();
