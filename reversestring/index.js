// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  const revArr = str.split('').reverse().join('')
  console.log('this:',revArr)
  return revArr
}

module.exports = reverse;
