{
  alert(`Орендна плата за 1 рік, за 2 роки, за 10 років`);
  let number1 = parseInt(
    prompt(`Введіть суму орендної плати за 1 місяць=`, `грн`)
  );

  let sum = number1 * 12;
  let sum2 = number1 * 24;
  let sum3 = number1 * 120;

  document.write(`<table border='2px'
      <tr>
      <td
      >Оренда 1 міс</td>

    </tr>
    <tr>
      <td>${number1} грн</td>

    </tr>
        <tr><td>Оренда за 1 рік ${sum} грн</td></tr>
        <tr><td>Оренда за 2 роки ${sum2} грн</td></tr>
        <tr><td>Оренда за 10 років ${sum3} грн</td></tr>
    </table>`);
}
