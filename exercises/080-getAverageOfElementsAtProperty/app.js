// Write your function here
const getAverageOfElementsAtProperty = (obj, key) => {
    let arrlength = obj[key].length
    let arr = obj[key]
    if (arrlength !== 0) {
        let count = 0
        for (value of arr) {
            count += value

        }
        let final = count / arrlength
        return final
    } else {
        return 0
    }
}
var obj = {
    key: []
};
var output = getAverageOfElementsAtProperty(obj, 'key');
console.log(output);