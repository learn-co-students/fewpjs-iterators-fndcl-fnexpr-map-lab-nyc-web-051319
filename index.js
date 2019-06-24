const tutorials = [
  'what does the this keyword mean?',
  'What is the Contutorialuctor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];


// const titleCased = () => {
//   let cappedArr = tutorials.map(function(tutorial) {
//     let words = tutorial.split(' ')
//     let cappedWords = words.map(function (word) {
//       return word[0].toUpperCase() + word.slice(1)
//     })
//     return cappedWords.join(' ')
//   })
//   return cappedArr
// }

const titleCased = () => {
  return tutorials.map(str => capped(str))
}

function capped (str) {
  let words = str.split(' ')
  let capped = words.map(word => word[0].toUpperCase() + word.slice(1))
  return capped.join(' ')
}
