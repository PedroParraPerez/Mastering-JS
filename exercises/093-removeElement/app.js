// Write your function here
const removeElement = (arr, item) => {


    const newarr = arr.filter(e => e !== item);
    return newarr
}


var output = removeElement([1, 2, 3, 2, 1], 2);
console.log(output); // --> [1, 3, 1]