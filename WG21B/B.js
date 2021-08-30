function solve(input) {
    const numberDays = +input
    let counter = 0;
    if(numberDays === 1){
        return counter = "2"
    }
    if(numberDays === 0){
        return counter = "-1"
    }
    if (numberDays % 2 === 0) {
        even(numberDays)
    } else {
        odd(numberDays)
    }

    function odd(numb){
        counter = `${numb}\n`
        counter += `${Math.ceil(numb/2)*2}`
    }

    function even(numb) {
        counter += numb / 2
        if(numb/2 === 1){
            return counter
        }
        if ((numb / 2) % 2 === 0) {
            return even(numb / 2)
        } else {
            counter += numb / 2
            return counter
        }

    }

    return `${counter}`
}

const fs = require('fs')
const input = fs.readFileSync(0, 'utf-8')
console.log(solve(input))