function compareStringsSort (str1, str2) {
  if (str1 === undefined || str1 === null) {
    throw new Error('str1 is null or undefined');
  }
  if (str2 === undefined || str2 === null) {
    throw new Error('str2 is null or undefined');
  }
  return str1.split('').sort().join('') === str2.split('').sort().join('');
}
function compareStringsDict (str1, str2) {
  if (str1 === undefined || str1 === null) {
    throw new Error('str1 is null or undefined');
  }
  if (str2 === undefined || str2 === null) {
    throw new Error('str2 is null or undefined');
  }
  var dict = {};
  for (var i = 0; i < str1.length; i++) {
    var chr1 = str1[i];
    dict[chr1] = (dict[chr1] ? dict[chr1] + 1 : 1);
  }
  for (i = 0; i < str2.length; i++) {
    var chr2 = str2[i];
    if (dict[chr2] !== undefined) {
      dict[chr2] = dict[chr2] - 1;
    } else {
      return false;
    }
  }
  for (var count in dict) {
    if (dict[count] !== 0) {
      return false;
    }
  }
  return true;
}
module.exports = {
  compareStringsSort: compareStringsSort,
  compareStringsDict: compareStringsDict,
};
