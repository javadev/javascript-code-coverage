function compareStringsSort (str1, str2) {
  if (str1 === undefined || str1 === null) {
    throw new Error('str1 is null or undefined');
  }
  if (str2 === undefined || str2 === null) {
    throw new Error('str2 is null or undefined');
  }
  return str1.split('').sort().join('') === str2.split('').sort().join('');
};
function compareStringsDict (str1, str2) {
  if (str1 === undefined || str1 === null) {
    throw new Error('str1 is null or undefined');
  }
  if (str2 === undefined || str2 === null) {
    throw new Error('str2 is null or undefined');
  }
  var dict = {};
  for (var i = 0; i < str1.length; i++) {
    var str = str1[i];
    dict[str] = (dict[str] ? dict[str] + 1 : 1);
  }
  for (var i = 0; i < str2.length; i++) {
    var str = str2[i];
    if (dict[str] !== undefined) {
      dict[str] = dict[str] - 1;
    } else {
      return false;
    }
  }
  for (count in dict) {
    if (dict[count] !== 0) {
      return false;
    }
  }
  return true;
};
module.exports = {
  compareStringsSort: compareStringsSort,
  compareStringsDict: compareStringsDict,
};
