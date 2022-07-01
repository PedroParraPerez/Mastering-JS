// Write your function here
const getFirstElementOfProperty = (obj, key) => {
    let element
    for (keys in obj) {
        if (keys === key) {
            if (Array.isArray(obj[keys]) === true) {
                element = obj[keys][0]

            } else {

                return undefined

            }
        }

    }
    return element
}

var obj = {
    key: [1, 2, 4],
    "key": [112, 2, 4],
};
var output = getFirstElementOfProperty(obj, 'key');
console.log(output); // --> 1