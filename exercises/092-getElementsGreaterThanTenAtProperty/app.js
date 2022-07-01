// Write your function here

const getElementsGreaterThan10AtProperty = (obj, key) => {
    let arr = []
    for (keys in obj) {
        if (keys === key) {
            if (Array.isArray(obj[keys]) === true) {
                for (value of obj[keys]) {
                    if (value > 10) {
                        arr.push(value)

                    }
                }
            }

        }

    }



    return arr
}



var obj = {
    "key": [1, 20, 30],
    "asdasd": [21313],
    "asd": 23
};
var output = getElementsGreaterThan10AtProperty(obj, 'key');
console.log(output); // --> [20, 30]