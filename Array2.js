//Find the duplicates in a string and print them out.
// const str = "The quick brown fox jumps over the lazy dog";

const str = "The quick brown fox jumps,jumps over the lazy dog";

const toFindDuplicates = str => {
    const strArray = str.split("");
    const dupeArray = [];
    const toFindDuplicates = strArray.filter((item, index) => strArray.indexOf(item) !== index);
    dupeArray.push(strArray[i]);
    return dupeArray.join(" ");
}

console.log(toFindDuplicates(str));

