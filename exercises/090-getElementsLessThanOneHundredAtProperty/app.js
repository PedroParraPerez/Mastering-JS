// Write your function here
const getElementsLessThan100AtProperty = (obj, key) => {

    let newarr = []
    for (key in obj) {
        if (Array.isArray(obj[key]) === true) {
            let arr = obj[key]
            for (value of arr) {
                if (value < 100) {
                    newarr.push(value)

                }
            }
            return newarr
        } else {
            return []

        }
    }
    return []
}
var obj = {
    key: [1000, 20, 50, 500]
};
var output = getElementsLessThan100AtProperty(obj, 'key');
console.log(output); // --> [20, 50]