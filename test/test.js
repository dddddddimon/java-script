let autoPrice = parseFloat(prompt("Auto Price"));
let userMoney = parseFloat(prompt("User Money"));

if (userMoney >= autoPrice) {
  document.write("ok");
  const change = userMoney - autoPrice;
  if (change >= 5000) document.write(`купи дрон`);
} else {
  document.write(`нехватает ${autoPrice - userMoney}`);
}
