function squarePerimeterAndArea() {
  alert(`Автоматичний вираховувач площі та периметру прямокутника`);
  let number1 = parseInt(
    prompt(`Введіть довжину довшої сторони прямокутника`, `м`)
  );
  let number2 = parseInt(
    prompt(`Введіть довжину коротшої сторони прямокутника`, `м`)
  );

  let sum = number1 + number2 + number1 + number2;
  let sum2 = number1 * number2;

  alert(`Результат пiдрахунку:
  Довша сторона - ${number1} м;
  Коротша сторона - ${number2} м;
  Периметр - ${sum} м;
  Площа - ${sum2} м2`);
}
