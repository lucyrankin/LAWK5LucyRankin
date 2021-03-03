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