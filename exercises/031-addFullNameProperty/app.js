function addFullNameProperty(obj) {
    let arrFullName = []
    for (value in obj) {
        arrFullName.push(obj[value])

    }
    let aux = arrFullName.join()
    let finalName = aux.replace(",", " ")
    let fullName = {
        "firstName": arrFullName[0],
        "lastName": arrFullName[1],
        "fullName": finalName
    }

    return fullName
}
const obj = {
    "firstname": "Pedro",
    "lasName": "Parra"
}
addFullNameProperty(obj)