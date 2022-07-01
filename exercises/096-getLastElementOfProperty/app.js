// Write your function here
const getLastElementOfProperty = (obj, key) => {
    let element
    for (keys in obj) {
        if (keys === key) {
            if (Array.isArray(obj[keys]) === true) {
                let lastelement = obj[keys].length - 1

                element = obj[keys][lastelement]

            } else {

                return undefined

            }
        }

    }
    return element
}


var obj = {
    key: [1, 2, 5]
};
var output = getLastElementOfProperty(obj, 'key');
console.log(output); // --> 5