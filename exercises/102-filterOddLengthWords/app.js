function filterOddLengthWords(words) {
    // your code here
    let arr = []
    for (word of words) {
        if (typeof word === "string" && word.length % 2 !== 0) {
            arr.push(word)
        }
    }
    return arr
}

var output = filterOddLengthWords(['there', 'it', 'is', 'now']);
console.log(output); // --> ['there', "now']