// парные числа

function ParnieChisla() {
  document.write("<ol>");
  for (let i = 0; i < 10; i++) {
    let ranNum;
    do {
      ranNum = 1 + Math.floor(Math.random() * 100);
    } while (ranNum % 2 !== 0);
    document.write(`<li>${ranNum}</li>`);
  }
  document.write("</ol>");
}

// с клавы ввести 5 чисел

// document.write("<ol>");
// for (let i = 0; i < 10; i++) {
//   let ranNum;
//   do {
//     ranNum = 1 + Math.floor(Math.random() * 100);
//   } while (ranNum % 2 !== 0);
//   document.write(`${i}-${ranNum}<br>`);
// }
// document.write("</ol>");

// for (let start = 1, end = 20; start < end; start++, end--) {
//   document.write(`<div>${start} - ${end} </div>`);
// }

// for (let i = 5; i < 15; i++) {
//   document.write(`${i} - ${i % 2 === 0 ? "парное" : "непарное"} <br>`);
// }

for (let c1 = 0; c1 <= 3; c1++) {
  if ((c1 = 3)) break;
  for (let c2 = 0; c2 <= 9; c2++) {
    if ((c2 = 0)) break;
    for (let c3 = 0; c3 <= 9; c3++) {
      if ((c3 = 0)) break;
      document.write(`${c1}${c2}${c3} <br>`);
    }
  }
}
