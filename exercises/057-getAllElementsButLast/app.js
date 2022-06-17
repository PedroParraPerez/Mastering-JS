function getAllElementsButLast(array) {
    // your code here
    let newArr = []
    array.forEach((value, index) => {
        if (index < array.length - 1) {
            newArr.push(value)
        }
    });
    return newArr

}