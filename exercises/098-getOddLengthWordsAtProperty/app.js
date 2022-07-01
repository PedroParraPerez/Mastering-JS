const getOddLengthWordsAtProperty = (obj, key) => {
    let arr = []
    for (keys in obj) {
        if (keys === key) {
            if (Array.isArray(obj[keys]) === true) {
                for (value of obj[keys]) {
                    if (value.length % 2 !== 0) {
                        arr.push(value)
                    }
                }
            }
        }
    }
    return arr
}

var obj = {
    key: ['It', 'has', 'some', 'words']
};
var output = getOddLengthWordsAtProperty(obj, 'key');
console.log(output);
var output = getOddLengthWordsAtProperty(obj, 'key');
console.log(output);