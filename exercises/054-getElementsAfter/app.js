function getElementsAfter(array, n) {
    // your code here
    let newArray = []

    array.forEach((value, index) => {
        if (index > n) {
            newArray.push(value);

        }

    })
    return newArray


}
getElementsAfter(['a', 'b', 'c', 'd', 'e'], 2);