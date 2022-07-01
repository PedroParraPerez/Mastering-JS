function getLengthOfLongestElement(arr) {
    // your code here
    let size = 0
    let arrLength = arr.length
    for (let i = 0; i < arrLength - 1; i++) {

        let firstvaluelength = arr[i].length
        let secondvaluelength = arr[i + 1].length
        if (firstvaluelength < secondvaluelength) {
            size = secondvaluelength
        } else {
            size = firstvaluelength
        }
    }
    return size
}

var output = getLengthOfLongestElement(['one', 'two', 'three']);
console.log(output); // --> 5