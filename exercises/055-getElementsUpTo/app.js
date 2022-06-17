function getElementsUpTo(array, n) {
    // your code here
    let newArray = []
    array.forEach((value, index) => {
        if (index < n) {
            newArray.push(value)
        }
    })
    return newArray
}