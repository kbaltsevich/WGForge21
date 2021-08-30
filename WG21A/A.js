function solve(input) {
    const set = new Set(input.split(',').map(item => +item))
    const arrNumbers = [...set]
        .filter(item => item != ',')
        .sort((a, b) => a - b);
    let tempArr = []
    let arrExit = []
    arrNumbers.forEach((item, index) => {
        if (item + 1 === arrNumbers[index + 1] || item - 1 === arrNumbers[index - 1]) {
            if (arrNumbers[index + 1] - item === 1) {
                return tempArr.push(item)
            } else {
                tempArr.push(item)
                if (tempArr.length > 2) {
                    arrExit.push(`${tempArr[0]}-${tempArr[tempArr.length - 1]}`)
                    tempArr = []
                    return arrExit
                } else {
                    arrExit = arrExit.concat(tempArr)
                    tempArr = []
                    return arrExit
                }
            }
        } else {
            return arrExit.push(item)
        }
    })
    return arrExit.join(',')
}
const fs = require('fs')
const input = fs.readFileSync(0, 'utf-8')
console.log(solve(input))