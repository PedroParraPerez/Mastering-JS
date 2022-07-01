function removeStringValues(obj) {
    // your code here
    for (value in obj) {
        if (typeof obj[value] === "string") {
            delete obj[value]
        }
    }
}


var obj = {
    name: 'Sam',
    age: 20
}
removeStringValues(obj);
console.log(obj); // { age: 20 }