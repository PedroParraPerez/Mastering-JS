function removeEvenValues(obj) {
    // your code here
    for (key in obj) {
        let type = typeof obj[key]
        if (type == "number" && obj[key] % 2 == 0) {

            delete obj[key]
        }
    }
    console.log(obj)
}
var obj = {
    a: 2,
    b: 3,
    c: 4,
    d: "sksdksdg"
};
removeEvenValues(obj);