var number = parseInt('2e20')
console.log(number)
console.log(typeof number)

var number2 = parseFloat('2.2aasdf20')
console.log(number2)
console.log(typeof number2)

var confirmOutput = confirm('Are you sure, bro?')
if (confirmOutput == true) {
    console.log('Yay!')
} else {
    console.log('boooo!')
}