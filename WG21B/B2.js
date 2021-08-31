function solve(input) {
    const numberDays = +input
    let counter = 0;
    if (numberDays <= 0 || numberDays > Math.pow(10, 18)) {
        return counter = "-1"
    }
    if (numberDays === 1) {
        return counter = "2"
    }
    if (numberDays === 2) {
        return counter = "-1"
    }
    if (numberDays % 2 === 0) {
        even(numberDays)
    } else {
        odd(numberDays)
    }

    function odd(numb) {
        counter++
        if (numb > 3) {
            return counter = "-1"
        }
        while (counter) {
            if (counter != 1) {
                if (numb % counter === 0) {
                    console.log(counter)
                }
            }
            counter++
            if (counter / numb === 2) {
                counter -= 2
                break;
            }
        }
    }

    function even(numb) {
        counter += numb / 2
        if ((numb / 2) === 1) {
            return counter
        }
        if (numb / 2 === 2) {
            return counter = "-1"
        }
        if ((numb / 2) % 2 === 0) {
            return even(numb / 2)
        } else {
            if ((numb / 2) === 5) {
                return counter
            }
            if ((numb / 2) > 3) {
                return counter = "-1"
            }
            counter += numb / 2
            return counter
        }

    }

    return `${counter}`
}

const fs = require('fs')
const input = fs.readFileSync(0, 'utf-8')
console.log(solve(input))