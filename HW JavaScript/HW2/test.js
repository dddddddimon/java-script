function moodselection() {
  let mood = parseInt(prompt(`Введіть цифру відповідно до Вашого настрою.`));
  if (mood == 1) document.getElementById("emojiplace").innerHTML = " 🥳 ";
  else if (mood == 2) document.getElementById("emojiplace").innerHTML = " 🥺 ";
  else if (mood == 3) document.getElementById("emojiplace").innerHTML = " 😡 ";
}

function randomnumbertask() {
  let value = parseInt(prompt(`комп загадав цифру від 1 до 5`));
  if (value >= 1 && value <= 5)
    document.getElementById("congratulations").innerHTML = "урраааа";
}
