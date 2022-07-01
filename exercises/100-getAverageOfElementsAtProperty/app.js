function getAverageOfElementsAtProperty(obj, key) {
    // your code here
    var newnum = 0
    for (keys in obj) {
        if (keys === key) {
            if (Array.isArray(obj[keys]) === true) {
                let num = 0
                for (value of obj[keys]) {
                    if (typeof value === 'number') {
                        num += value


                    }

                }

                newnum = num / obj[keys].length
            }
        }
    }

    return newnum
}

var obj = {
    key: [1, 2, 3]
};
var output = getAverageOfElementsAtProperty(obj, 'key');
console.log(output); // --> 2  