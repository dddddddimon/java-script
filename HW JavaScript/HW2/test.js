// Гра: Обери настрiй.
function moodselection() {
  let mood = parseInt(prompt(`Введіть цифру відповідно до Вашого настрою.`));
  if (mood == 1) document.getElementById("emojiplace").innerHTML = " 🥳 ";
  else if (mood == 2) document.getElementById("emojiplace").innerHTML = " 🥺 ";
  else if (mood == 3) document.getElementById("emojiplace").innerHTML = " 😡 ";
}

// Гра: Вiдгадай число.
function randomnumbertask() {
  let random = Math.floor(Math.random() * 5) + 1;
  let user1 = parseInt(
    prompt(
      `Комп загадав число від 1 до 5. Спробуй відгадати! Пiдказка: ${random}`
    )
  );
  if (user1 != random) {
    alert("Спробуйте ще раз!");
    let user1 = parseInt(prompt(`Другий шанс вiдгадати! Пiдказка: ${random}`));
    if (user1 == random) {
      alert("Вiтаю! Ви виграли бублiк!");
    } else {
      alert("Ви програли!");
    }
  } else if (user1 == random) {
    alert("Вiтаю! Ви виграли бублiк!");
  }
}

// Гра: Постарайся потрапити в промiжок чисел.
function guessTheNumber() {
  let random = Math.floor(Math.random() * 100) + 1;
  let user1 = parseInt(prompt(`Введи свiй варiант! Пiдказка: ${random}`));
  let guessnumber = Math.abs(random - user1);
  if (guessnumber > 10) {
    alert("Ви Програли =( Спробуйте ще раз!");
  } else if (guessnumber <= 10) {
    alert(
      `Ви Перемогли! Ось як близько Ви до згенерованого числа: ${guessnumber}`
    );
  }
}

// Гра: Вiдгадай число з другом.
function user1VSuser2() {
  let random = Math.floor(Math.random() * 10) + 1;
  let user1 = parseInt(
    prompt(`Iгрок №1, введи свiй варiант! Пiдказка: ${random}`)
  );
  let user2 = parseInt(
    prompt(`Iгрок №2, введи свiй варiант! Пiдказка: ${random}`)
  );
  let user1result = Math.abs(random - user1);
  let user2result = Math.abs(random - user2);

  if (user1result > user2result) {
    alert(
      `Iгрок №2 виграв! Згенероване число: ${random}; Ваше число: ${user2}`
    );
  } else if (user1result < user2result) {
    alert(
      `Iгрок №1 виграв! Згенероване число: ${random}; Ваше число: ${user1}`
    );
  } else if (user1result == user2result) {
    alert("Нiчiя! Вітаємо переможцiв! Спробуйте ще раз =)");
  }
}

// Гра: Морський бій.
function seaButtle() {}
