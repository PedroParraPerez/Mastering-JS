var obj = {
    a: 8,
    b: 2,
    c: 'montana'
}

function removeNumbersLessThan(num, obj) {
    for (key in obj) {
        if (obj[key] < num) {
            delete obj[key]
        }
    }
    console.log(obj)
}
removeNumbersLessThan(100, obj)