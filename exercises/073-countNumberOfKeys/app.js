function countNumberOfKeys(obj) {
    // your code here
    let count = 0
    for (value in obj) {
        ++count
    }
    return count
}
var obj = {
    a: 1,
    b: 2,
    c: 3
};
countNumberOfKeys(obj);