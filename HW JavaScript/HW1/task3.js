{
  alert(`За скільки часу прочитаєш книгу?`);
  let number1 = parseInt(prompt(`За скільки секунд читаєш сторінку?=`, `сек`));
  let number2 = parseInt(prompt(`Скільки сторінок в книжці?=`, `сторінок`));

  let sum = (number1 * number2) / 60;

  document.write(`<table border='2px'
      <tr>
      <td>Час читання 1 сторінки</td>
      <td>В книжці</td>
    </tr>
    <tr>
      <td>${number1} сек</td>
      <td>${number2} сторінок</td>
    </tr>
        <tr><td colspan=2>Час читання книги ~ ${sum} хв</td></tr>
    </table>`);
}
