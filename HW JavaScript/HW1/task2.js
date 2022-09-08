function rentForDifferentTime() {
  alert(`Орендна плата за 1 рік, за 2 роки, за 10 років`);
  let number1 = parseInt(
    prompt(`Введіть суму орендної плати за 1 місяць`, `грн`)
  );

  let sum = number1 * 12;
  let sum2 = number1 * 24;
  let sum3 = number1 * 120;

  alert(`Результати:
  Оренда 1 міс - ${number1} грн;
  Оренда за 1 рік ${sum} грн;
  Оренда за 2 роки ${sum2} грн;
  Оренда за 10 років ${sum3} грн`);
}
