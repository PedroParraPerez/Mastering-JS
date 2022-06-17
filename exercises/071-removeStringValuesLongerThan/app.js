function removeStringValuesLongerThan(num, obj) {
    // your code here
    for (key in obj) {
        let type = typeof obj[key]
        if (type == "string" && obj[key].length > num) {
            delete obj[key]
        }
    }
    console.log(obj)


}
var obj = {
    name: 'Montana',
    age: 20,
    location: 'Texas'
};
removeStringValuesLongerThan(6, obj);