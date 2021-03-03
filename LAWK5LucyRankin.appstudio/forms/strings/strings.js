let quoteString = "Failure is simply the opportunity to begin again this time more intelligently."
let upperCaseString = quoteString.toUpperCase()

console.log(`Upper case string is ${upperCaseString}`)

let authorString = " - Henry Ford."
let completeString = quoteString + authorString

if (completeString.includes("Henry")) {
  let found = "Henry was in the quote string"

console.log(found)

} else {

let found = "Henry was NOT in the quote string"
  console.log(found)
}

let secondQuote = "Talent is cheaper than table salt. What separates the talented individual from the successful one is a lot of hard work. - Stephen King"
let lowerCaseString = secondQuote.toLowerCase()

console.log(`Lower case string is: ${lowerCaseString}.`)

let chosenNumber = prompt("Please choose a number.")
let biggerNumber = Number(chosenNumber) + 10

console.log(`The number ${chosenNumber} + 10 is ${biggerNumber}.`)