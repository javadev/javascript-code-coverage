function compareStrings (str1, str2) {
  if (str1 === undefined || str1 === null) {
    throw new Error('str1 is null or undefined');
  }
  if (str2 === undefined || str2 === null) {
    throw new Error('str2 is null or undefined');
  }
  return str1.split('').sort().join('') === str2.split('').sort().join('');
}
module.exports = compareStrings;

console.log(compareStrings('NAME', 'NAME'));
console.log(compareStrings('NAEM', 'NAME'));
console.log(compareStrings('NAME1', 'NAME'));
