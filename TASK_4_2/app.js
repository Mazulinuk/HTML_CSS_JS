// Генерація випадкового числа від 1 до 100
const randomNumber = Math.floor(Math.random() * 100) + 1;

// Перевірка введеного користувачем числа
function checkNumber() {
  const userNumber = document.getElementById('user-number').value;
  const resultMessage = document.getElementById('result-message');
  
  if (userNumber >= randomNumber) {
    resultMessage.innerHTML = `Ваше число ${userNumber} більше або дорівнює випадковому числу ${randomNumber}. Ви програли.`;
  } else {
    resultMessage.innerHTML = `Ваше число ${userNumber} менше за випадкове число ${randomNumber}. Ви перемогли!`;
  }
}

// Додавання обробника події на кнопку "Перевірити"
const checkButton = document.getElementById('check-button');
checkButton.addEventListener('click', checkNumber);