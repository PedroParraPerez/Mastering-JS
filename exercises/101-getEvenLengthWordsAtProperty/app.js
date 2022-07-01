var obj = {
    "key": ['a', 'long', 'game', 1231]
};

function getEvenLengthWordsAtProperty(obj, key) {
    let arr = []
    for (keys in obj) {
        if (keys === key) {
            if (Array.isArray(obj[keys]) === true) {
                for (value of obj[keys]) {

                    if (value.length % 2 == 0 && typeof value === "string") {

                        arr.push(value)
                    }
                }
            }
        }
    }
    return arr
}

var output = getEvenLengthWordsAtProperty(obj, 'key');
console.log(output); // --> ['long', 'game']