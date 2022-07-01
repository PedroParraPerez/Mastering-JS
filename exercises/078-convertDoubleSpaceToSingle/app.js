function convertDoubleSpaceToSingle(str) {
    // your code here
    let stringWithOneSpaces = str.replace(/\s+/g, " ")
    return stringWithOneSpaces
}


// console.log(output); // --> "string with double spaces"
var output = convertDoubleSpaceToSingle("string  with  double  spaces");
console.log(output); // --> "string with double spaces"