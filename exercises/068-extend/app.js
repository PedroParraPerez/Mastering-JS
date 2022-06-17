var obj1 = {
    a: 1,
    b: 2
};
var obj2 = {
    b: 4,
    c: 3
};

function extend(obj1, obj2) {
    for (value in obj2) {

        if (obj1.hasOwnProperty(value) == false) {
            obj1[value] = obj2[value]
        }

    }
    return obj1
}

extend(obj1, obj2)