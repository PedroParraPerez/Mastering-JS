// Write your function here
const keep = (arr, element) => {
    let newarr = []
    for (value of arr) {
        if (value === element) {
            newarr.push(element)
        }
    }
    return newarr

}

var output = keep([1, 2, 3, 2, 1], 2)
console.log(output);
// -- > [2, 2]