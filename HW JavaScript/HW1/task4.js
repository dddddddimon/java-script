{
  alert(`Скільки у тебе риби в кг?`);
  let number1 = parseInt(prompt(`Загальна кількість риб=`, `шт`));
  let number2 = parseInt(prompt(`Скільки гр важить 1 риба?=`, `гр`));

  let sum = (number1 * number2) / 1000;

  document.write(`<table border='2px'
      <tr>
      <td>Всього</td>
      <td>Вага 1 риби</td>
    </tr>
    <tr>
      <td>${number1} риб</td>
      <td>${number2} гр кожна</td>
    </tr>
        <tr><td colspan=2>Всього риби ${sum} кг</td></tr>
    </table>`);
}
