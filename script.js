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


// fizz bazz
// Skaita no 0 - 50
// Ja skaitlis bez atlikuma dalās ar 2, tad izvada Fizz.
// Ja skaitlis bez atlikuma dalās ar 3, tad izvada Bazz.
// Ja skaitlsi bez atlikuma dalās ar 2 un 3, tad izvada Fizz Bazz.
// Ja ne ar vienu, tad izvada slaitli

for (var i = 0; i <= 50; i++) {
    if (i % 2 == 0 && i % 3 == 0) {
        console.log('Fizz Bazz')
    } else if (i % 2 == 0) {
        console.log('Fizz')
    } else if (i % 3 == 0) {
        console.log('Bazz')
    } else {
        console.log(i);
    }
}

var cars = ['vaz', 'zaz', 'maz', 'gaz'];
for (var foo of cars) {
    console.log(foo);
}
