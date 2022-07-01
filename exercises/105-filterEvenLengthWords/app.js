function filterEvenLengthWords(words) {
    // your code here
    let arr = []
    words.forEach((item, index) => {
        if (typeof item === "string" && item.length % 2 == 0) {
            arr.push(item)
        }
    });
    return arr
}

var output = filterEvenLengthWords(['word', 'words', 'word', 'words']);
console.log(output); // --> ['word', 'word']