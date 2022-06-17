function countCharacter(str, char) {
    // your code here
    let arr = []
    let i = 0
    while (i < str.length) {
        arr.push(str[i])
        i++
    }
    count = 0;
    arr.forEach((value, index) => {
        if (value === char) {
            count++
        }
    });


    console.log(count)
    return count
}
var output = countCharacter('I am a hacker',
    'a');
// console.log(output); // --> 3