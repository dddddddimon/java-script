function namefunc(userName) {
  document.write(`Hey ${userName}<br>`);
  document.write(`Hello ${userName}<br>`);
  document.write(`Hi ${userName}<br><br>`);
}
// namefunc("Ivan");
// namefunc("Petro");
//////////////////////////////////////////////
// let getSum = function (n1, n2) {
//   return n1 + n2;
// };
// let s = getSum(23, 9);
// let g = getSum;

// document.write(s);
// document.write(g(5, 7));
//////////////////////////////////////////////
// function language(lang) {
//   switch (lang) {
//     case "ua":
//       return "привiт";
//     case "ru":
//       return "привет";
//     case "eng":
//       return "hello";
//     default:
//       return "Not correct";
//   }
// }

// document.write(language("ua"));
// document.write(language("eng"));
// document.write(language("ru"));
//////////////////////////////////////////////
// function earnedMoney(salary, benefits, tax) {
//   let addition = (salary * benefits) / 100;
//   let res = (salary + addition) * (1 - tax / 100);
//   return res;
// }

// document.write(earnedMoney(5000, 70, 20));
//////////////////////////////////////////////
// function getAvarege(score1, score2, score3) {
//   let sum = score1 + score2 + score3;
//   return sum / 3;
// }

// let algebra = parseInt(prompt("enter Algebra"));
// let geometry = parseInt(prompt("enter Geometry"));
// let chemistry = parseInt(prompt("enter Chemistry"));

// let resScore = getAvarege(algebra, geometry, chemistry);

// document.write(`Avarage Score is ${resScore}`);
//////////////////////////////////////////////
// function getMax(num1, num2) {
//   if (num1 > num2) return num1;
//   else return num2;
// }

// function getMin(num1, num2) {
//   if (num1 < num2) return num1;
//   else return num2;
// }

// let a = parseFloat(prompt(`a=`));
// let b = parseFloat(prompt(`b=`));
// let c = parseFloat(prompt(`c=`));
// let d = parseFloat(prompt(`d=`));

// let m1 = getMax(a, b);
// let m2 = getMin(c, d);
// let m3 = getMax(a, c);

// let s = m1 + m2 + m3;

// document.write(`S= ${s}`);
//////////////////////////////////////////////

// function getRecArea(a, b) {
//   return a * b;
// }
// function getCircArea(r) {
//   return 3.14 * r * r;
// }

// let a = parseFloat(prompt(`a=`));
// let b = parseFloat(prompt(`b=`));

// let s1 = getRecArea(a, b);

// let s2 = getCircArea(b / 2) / 2;

// let s3 = getCircArea(a / 2) / 2;

// let s = s1 + s2 + s3;

// document.write(`S=${s}`);
//////////////////////////////////////////////
function getRandomScore(params) {
  return 1 + Math.floor(Math.random() * 6);
}

function getPlayerScrore(params) {
  let score1 = getRandomScore();
  let score2 = getRandomScore();
  return score1 + score2;
}

let playerScore1 = getPlayerScrore();
let playerScore2 = getPlayerScrore();

if (playerScore1 > playerScore2)
  document.write(
    `1st WIN<br><br>Player 1 = ${playerScore1},<br>Player 2 = ${playerScore2}`
  );
else {
  if (playerScore2 > playerScore1)
    document.write(
      `2nd WIN<br><br>Player 1 = ${playerScore1},<br>Player 2 = ${playerScore2}`
    );
  else
    document.write(
      `Spare<br><br>Player 1 = ${playerScore1},<br>Player 2 = ${playerScore2}`
    );
}
