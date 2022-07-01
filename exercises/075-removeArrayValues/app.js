function removeArrayValues(obj) {
    // your code here
    for (value in obj) {
        if (Array.isArray(obj[value]) == true) {
            delete obj[value]
        }
    }
    console.log(obj)
}
var obj = {
    a: [1, 3, 4],
    b: 2,
    c: ['hi', 'there']
}
removeArrayValues(obj);