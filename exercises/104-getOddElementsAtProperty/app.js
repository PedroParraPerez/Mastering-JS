var obj = {
    key: [1, 2, 3, 4, 5]
};

function getOddElementsAtProperty(obj, key) {
    // your code here
    let arr = []
    for (keys in obj) {
        let valueKeys = obj[keys];

        if (keys === key && Array.isArray(valueKeys)) {

            for (value of valueKeys) {
                value % 2 !== 0 ? arr.push(value) : ""
            }
        }
    }
    return arr
}

var output = getOddElementsAtProperty(obj, 'key');
console.log(output); // --> [1, 3, 5]