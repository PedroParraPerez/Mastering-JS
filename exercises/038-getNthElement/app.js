function getNthElement(array, n) {
    if (array.length == 0) {
        return undefined
    }

    console.log(array[n])
    return array[n]
}
let arr = [1, 2, 3]

getNthElement(arr, 1);