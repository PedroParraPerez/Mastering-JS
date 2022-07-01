// Write your function here
const getNthElementOfProperty = (obj, key, index) => {

    let element
    for (keys in obj) {
        if (keys === key) {
            if (Array.isArray(obj[keys]) === true) {
                element = obj[keys][index]

            } else {

                return undefined

            }
        }

    }
    return element
}

var obj = {
    key: [1, 2, 6],
    "key": [1, 122, 6]
};
var output = getNthElementOfProperty(obj, 'key', 1);
console.log(output); // --> 2