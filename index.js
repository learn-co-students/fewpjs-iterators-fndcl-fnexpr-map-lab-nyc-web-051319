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

// const titleCased = tutorials.map(function (sentence) {
//   let split_sentence = sentence.split(' ');
//   for (let i = 0; i < split_sentence.length; i++) {
//     split_sentence[i] = split_sentence[i].charAt(0).toUpperCase() + split_sentence[i].substring(1);
//   }
//   return split_sentence.join(' ');
// })

const titleCased = () => {
  return tutorials.map(function(sentence) {
    let split_sentence = sentence.split(' ');
    for (let i = 0; i < split_sentence.length; i++) {
      split_sentence[i] = split_sentence[i].charAt(0).toUpperCase() + split_sentence[i].substring(1);
    }
    return split_sentence.join(' ');
  })
}
