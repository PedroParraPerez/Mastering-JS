function removeOddValues(obj) {
    // your code here
    for (value in obj) {
        if (obj[value] % 2 !== 0) {

            delete obj[value]
        }
    }
    return obj

}
var obj = {
    a: 2,
    b: 3,
    c: 4
};
removeOddValues(obj);