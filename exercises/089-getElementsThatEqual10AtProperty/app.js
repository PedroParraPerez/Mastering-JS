// Write your function here
const getElementsThatEqual10AtProperty = (obj, key) => {
    let newarr = []
    for (key in obj) {
        if (Array.isArray(obj[key]) === true) {
            let arr = obj[key]
            for (value of arr) {
                if (value === 10) {
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
    key: [1000, 10, 50, 10],
    key2: "sff"

};
var output = getElementsThatEqual10AtProperty(obj, 'asd');
console.log(output); // --> [10, 10]