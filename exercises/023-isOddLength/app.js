// Write your function here
const isOddLength = (param) => {
    let paramLength = param.length
    if (paramLength % 2 == 0) {
        return false
    }
    return true
}