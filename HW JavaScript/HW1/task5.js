{
  alert(`По скільки гр цукерок дістанеться кожній дитині?`);
  let number1 = parseInt(prompt(`Скыльки всього кг цукерок?=`, `кг`));
  let number2 = parseInt(prompt(`Скільки всього дітваків?=`, `дітей`));

  let sum = (number1 * 1000) / number2;

  document.write(`<table border='2px'
      <tr>
      <td>Всього</td>
      <td>Всього </td>
    </tr>
    <tr>
      <td>${number1} кг цукерок</td>
      <td>${number2} дітваків</td>
    </tr>
        <tr><td colspan=2>По ${sum} гр цукерок на дітвака</td></tr>
    </table>`);
}
