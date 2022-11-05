// function getSocialSupport(minSalary, userSalary) {
//   let support;
//   if (userSalary > minSalary) support = 0;
//   else support = minSalary - userSalary;
//   return support;
// }

// let userSalary = parseFloat(prompt("user salary"));
// let minSalary = parseFloat(prompt("min salary"));
// let sup = getSocialSupport(minSalary, userSalary);
// alert(`Support = ${sup}`);

//===================================================

// function isLeapYear(year) {
//   if (year % 4 === 0) {
//     if (year % 100 === 0) {
//       if (year % 400 === 0) return true;
//       else return false;
//     } else return true;
//   } else return false;
// }

//===================================================

// function getTraditionalScore5(modernScore12) {
//   let result;
//   switch (modernScore12) {
//     case 1:
//     case 2:
//     case 3:
//       result = 2;

//       break;

//     case 4:
//     case 5:
//     case 6:
//       result = 3;
//       break;

//     case 7:
//     case 8:
//     case 9:
//       result = 4;
//       break;

//     case 10:
//     case 11:
//     case 12:
//       result = 5;
//       break;

//     default:
//       throw new Error("The Scrore Is Incorect<br>");
//   }
//   return result;
// }

// let userScore12 = parseInt(prompt("Enter 12th Score"));
// try {
//   let userScore5 = getTraditionalScore5(userScore12);
//   document.write(`Score in 5th = ${userScore5}`);
// } catch (error) {
//   document.write(error.message);
//   document.write(`Score is Wrong!`);
// }

//===================================================

// function inputIntNumber(message) {
//   return parseInt(prompt(message));
// }

// let num = inputIntNumber("num");
// let year = inputIntNumber("year of birth");

//===================================================

// function writeInpEl(title, type, initialvalue, placeholderMessage) {
//   document.write(
//     `<label>${title} <input type = '${type}' value = '${initialvalue}' placeholder='${placeholderMessage}'></label>`
//   );
// }
// writeInpEl("Year", "number", 2000, "Введіть рік народження");

//===================================================
