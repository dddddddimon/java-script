function howMuchFishDoYouHave() {
  alert(`Скільки у тебе риби в кг?`);
  let number1 = parseInt(prompt(`Загальна кількість риб`, `шт`));
  let number2 = parseInt(prompt(`Скільки гр важить 1 риба?`, `гр`));

  let sum = (number1 * number2) / 1000;

  alert(`Результати:
  Всього риб - ${number1} шт;
  Вага 1 риби - ${number2} гр;
  Всього риби ${sum} кг`);
}
