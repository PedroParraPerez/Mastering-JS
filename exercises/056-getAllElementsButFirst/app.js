var input = [1, 2, 3, 4];

function getAllElementsButFirst(array) {
    let newArr = []
    array.forEach((value, index) => {
        if (index > 0) {
            newArr.push(value)
        }
    });
    console.log(newArr)
    return newArr


}

getAllElementsButFirst(input)