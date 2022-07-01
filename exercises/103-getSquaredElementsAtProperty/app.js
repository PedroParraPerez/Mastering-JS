var obj = {
    key: [2, 1, 5]
};

function getSquaredElementsAtProperty(obj, key) {
    // your code here
    let arr = []
    for (keys in obj) {
        if (keys == key) {
            let valueKey = obj[keys]
            if (Array.isArray(valueKey))
                for (value of valueKey) {
                    let valueExp2 = Math.pow(value, 2)
                    arr.push(valueExp2)
                }
        }
    }
    return arr
}

var output = getSquaredElementsAtProperty(obj, 'key');
console.log(output); // --> [4, 1, 25]