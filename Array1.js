const arry = [0, 1, 2, 3, 1, 3, 4, 1, 2];

const toFindDuplicates = arry => arry.filter((item, index) => arry.indexOf(item) !== index)
const duplicateElements = toFindDuplicates(arry);
console.log(duplicateElements);
