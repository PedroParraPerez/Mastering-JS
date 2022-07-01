// Write your function here
const countAllCharacters = (str) => {
    let strSplited = str.split("")
    let obj = new Object()
    for (value of strSplited) {
        obj[value] = null
    }
    countRepeatWords(strSplited, obj)
    return obj
}
const countRepeatWords = (arr, obj) => {


}
var output = countAllCharacters('banana');
console.log(output); // --> {b: 1, a: 3, n: 2}