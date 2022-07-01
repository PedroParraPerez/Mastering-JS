// Write your function here
const select = (arr, obj) => {
    let newObj = new Object()
    for (key in obj) {
        for (value of arr) {
            if (key == value) {
                newObj[key] = obj[key]
            }

        }
    }
    console.log(newObj)
    return newObj

}
var arr = ['a', 'c', 'e'];
var obj = {
    a: 1,
    b: 2,
    c: 3,
    d: 4
};
var output = select(arr, obj);
console.log(output); // --> { a: 1, c: 3 }