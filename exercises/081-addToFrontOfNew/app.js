function addToFrontOfNew(arr, element) {
    // Write your function here
    let newArray = new Array();
    for (value of arr) {
        newArray.push(value)
    }
    newArray.unshift(element)
    console.log(newArray)
    return newArray

}
let newArr = []
var input = [1, 2];
var output = addToFrontOfNew(input, 3);
// console.log(output); // --> [3, 1, 2];
// console.log(input); // --> [1, 2], 2];
// console.log(input); // --> [1, 2]