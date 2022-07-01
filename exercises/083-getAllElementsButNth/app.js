function getAllElementsButNth(array, n) {
    // Write your function here

    const newArray = array.filter((item, index) => index !== n)
    return newArray
}
var output = getAllElementsButNth(['a', 'b', 'c'], 1);
console.log(output); // --> ['a', 'c']