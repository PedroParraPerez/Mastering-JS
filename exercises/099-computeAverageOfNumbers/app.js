const computeAverageOfNumbers = (arr) => {
    let arrLength = arr.length
    let totalValue = 0
    for (value of arr) {
        if (typeof value === 'number') {
            totalValue += value
        }

    }
    return totalValue / arrLength
}

var input = [1, 2, 3, 4, 5];
var output = computeAverageOfNumbers(input);
console.log(output); // --> 3