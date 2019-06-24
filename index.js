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

var titleCased = function() {
  return tutorials.map(line => line.split(' ').map(word => word[0].toUpperCase() + word.substr(1, word.length)).join(' '))
}



// str.split(' ').map(w => w[0].toUpperCase() + w.substr(1).toLowerCase()).join(' ');
//
// function square(number) {
//   return number * number;
// }

// const titleCased = () => {
//   return tutorials
// }

// let students = ["harry", "ron", "hermione", "ginevra"];
//let rollCall = students.map(student => student + " the wizard")
