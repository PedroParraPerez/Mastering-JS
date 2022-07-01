function addToBackOfNew(arr, element) {
    // Write your function here
    let newArray = new Array();
    for (value of arr) {
        newArray.push(value)
    }
    newArray.push(element)
    console.log(newArray)
    return newArray
}

var input = [1, 2];
var output = addToBackOfNew(input, 3);
console.log(input); // --> [1, 2]
console.log(output); // --> [1, 2, 3]