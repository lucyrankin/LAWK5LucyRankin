function Calculate (num1, num2) {
  return num1 + num2
}

let yourNum1 = prompt("Enter your first number")
let yourNum2 = prompt("Enter your second number")

let summedNumbers = Calculate(Number(yourNum1),Number(yourNum2))

console.log(summedNumbers)