// Write your function here

const getIndexOf = (character, str) => {



    // Split string by whitespace character
    const splitString = str.split("");

    return splitString.indexOf(character);

}







var output = getIndexOf('I', 'I am a hacker');
console.log(output); // --> 2