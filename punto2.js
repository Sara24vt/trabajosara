const totalPeople = 10;
const minAge = 1;
const maxAge = 120;
const adultAge = 18;
const seniorAge = 60;

let ages = [];
let minors = 0;
let adults = 0;
let seniors = 0;
let lowestAge = maxAge;
let highestAge = minAge;
let sumAges = 0;

for (let i = 0; i < totalPeople; i++) {
    let age = parseInt(prompt(`Ingrese la edad de la persona ${i + 1}:`));

    while (isNaN(age) || age < minAge || age > maxAge) {
        age = parseInt(prompt(`Edad inválida. Ingrese la edad de la persona ${i + 1} (entre ${minAge} y ${maxAge}):`));
    }

    ages.push(age);

    if (age < adultAge) {
        minors++;
    } else if (age >= adultAge && age < seniorAge) {
        adults++;
    } else {
        seniors++;
    }

    if (age < lowestAge) {
        lowestAge = age;
    }

    if (age > highestAge) {
        highestAge = age;
    }

    sumAges += age;
}

const averageAge = sumAges / totalPeople;

console.log(`Personas menores de edad: ${minors}`);
console.log(`Personas mayores de edad: ${adults}`);
console.log(`Adultos mayores: ${seniors}`);
console.log(`Edad más baja: ${lowestAge}`);
console.log(`Edad más alta: ${highestAge}`);
console.log(`Promedio de edades: ${averageAge}`);