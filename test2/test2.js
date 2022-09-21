// ранодомные числа в списке
function randomnum() {
  document.write(`<ul>`);

  for (i = 0; i < 10; i++) {
    let min = 1,
      max = 100;
    let num = min + Math.floor(Math.random() * (max - min + 1));
    document.write(`<li>${num}</li>`);
  }

  document.write(`</ul>`);
}

// 5 чисел от пользователя
function userNumAdd() {
  let sum = 0;

  for (let index = 0; index < 5; index++) {
    let UserNum = parseFloat(prompt("num = "));
    // sum = sum + UserNum
    sum += UserNum;
  }

  alert(`${sum}`);
}

// 4 ранд числа от 1 до 5 и нужно угадать
function guessNumin5() {
  let guessNum = 0;

  for (let index = 1; index <= 4; index++) {
    let min = 1,
      max = 5;
    let randomNum = min + Math.floor(Math.random() * (max - min + 1));
    let UserNum = parseInt(prompt("num = "));
    if (randomNum === UserNum) {
      guessNum++;
      alert("huess");
    } else {
      alert(`not guess. rand =` + randomNum);
    }
  }
  document.write(`total num guess = ${guessNum}`);
}

// вводим 7 чисел и подсчитываетм количество добавленных > 0
function positNumSum() {
  let PositNum = 0;

  for (i = 0; i < 7; i++) {
    let UsNum = parseFloat(prompt("num="));
    if (UsNum > 0) PositNum++;
  }
  document.write(`positive number = ${PositNum}`);
}

// вывести 10xA; 7xB; 7xC
function diffNumbs() {
  for (let i = 0; i < 10; i++) {
    document.write("A");
  }
  for (let i = 0; i < 7; i++) {
    document.write("B");
  }
  for (let i = 0; i < 7; i++) {
    document.write("C");
  }
}

//aaaaaa
//aaaaaa
//aaaaaa
//aaaaaa
//aaaaaa
function severalAs() {
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 6; j++) {
      document.write("a");
    }
    document.write("<br>");
  }
}

//a
//aa
//aaa
//aaaa
//aaaaa
//aaaaaa
function lettersA() {
  let letterA = 1;

  for (let i = 0; i < 6; i++) {
    for (let j = 0; j < letterA; j++) {
      document.write("a");
    }
    letterA++;
    document.write("<br>");
  }
}

//aabbbbbbb
//aaabbbbbb
//aaaabbbbb
//aaaaabbbb
//aaaaaabbb
//aaaaaaabb
//aaaaaaaab
function lettersAminus() {
  let letterAs = 2;
  let letterBs = 7;
  for (let i = 0; i < 7; i++) {
    for (let j = 0; j < letterAs; j++) {
      document.write("a");
    }
    letterAs++;
    for (let j = 0; j < letterBs; j++) {
      document.write("b");
    }
    letterBs--;
    document.write("<br>");
  }
}

//  bbbbbbb
//   bbbbbb
//    bbbbb
//     bbbb
//      bbb
//       bb
//        b
function spaceMinus() {
  document.write("<pre>");
  let letterAs = 2;
  let letterBs = 7;
  for (let i = 0; i < 7; i++) {
    for (let j = 0; j < letterAs; j++) {
      document.write(" ");
    }
    letterAs++;
    for (let j = 0; j < letterBs; j++) {
      document.write("b");
    }
    letterBs--;
    document.write("<br>");
  }
  document.write("</pre>");
}

// 3 4 5 6 ... 76 77 78
function numbersCount() {
  for (let i = 3; i <= 78; i++) {
    document.write(`${i} <br>`);
  }
}

// 59 58 57 56 ... 15 14 13
function numbersNegativeCount() {
  for (let i = 59; i >= 13; i--) {
    document.write(`${i} <br>`);
  }
}

// 2 5 8 11 14 ... 32
for (let i = 2; i <= 32; i += 3) {
  document.write(`${i} <br>`);
}
