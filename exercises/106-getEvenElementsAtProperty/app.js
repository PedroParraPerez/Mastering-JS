var obj = {
    key: [1000, 11, 50, 17]
};

function getEvenElementsAtProperty(obj, key) {
    // your code here
    let arr = []
    for (keys in obj) {
        if (keys === key) {
            let valueKeys = obj[keys]
            if (Array.isArray(valueKeys))
                for (value of valueKeys) {
                    if (value % 2 == 0) {
                        arr.push(value)
                    }
                }
        }
    }

    return arr
}
var output = getEvenElementsAtProperty(obj, 'key');
console.log(output); // --> [1000, 50]