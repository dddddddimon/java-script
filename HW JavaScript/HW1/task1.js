{
  alert(`Автоматичний вираховувач площі та периметру прямокутника`);
  let number1 = parseInt(
    prompt(`Введіть довжину довшої сторони прямокутника=`, `м`)
  );
  let number2 = parseInt(
    prompt(`Введіть довжину коротшої сторони прямокутника=`, `м`)
  );

  let sum = number1 + number2 + number1 + number2;
  let sum2 = number1 * number2;

  document.write(`<table border='2px'
      <tr>
      <td>Довша сторона</td>
      <td>Коротша сторона</td>
    </tr>
    <tr>
      <td>${number1} м</td>
      <td>${number2} м</td>
    </tr>
        <tr><td colspan=2>Периметр ${sum} м</td></tr>
        <tr><td colspan=2>Площа ${sum2} м2</td></tr>
    </table>`);
}
