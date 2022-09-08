function howManyCandiesPerChild() {
  alert(`По скільки гр цукерок дістанеться кожній дитині?`);
  let number1 = parseInt(prompt(`Скыльки всього кг цукерок?`, `кг`));
  let number2 = parseInt(prompt(`Скільки всього дітваків?`, `дітей`));

  let sum = (number1 * 1000) / number2;

  alert(`Результати:
  Всього - ${number1} кг цукерок;
  Всього - ${number2} дітваків;
  По ${sum} гр цукерок на дітвака`);
}
