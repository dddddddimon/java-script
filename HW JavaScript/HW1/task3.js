function bookReadingTime() {
  alert(`За скільки часу прочитаєш книгу?`);
  let number1 = parseInt(prompt(`За скільки секунд читаєш сторінку?`, `сек`));
  let number2 = parseInt(prompt(`Скільки сторінок в книжці?`, `сторінок`));

  let sum = (number1 * number2) / 60;

  alert(`Результати:
  Час читання 1 сторінки - ${number1} сек;
  В книжці - ${number2} сторінок;
  Час читання книги ~ ${sum} хв`);
}
