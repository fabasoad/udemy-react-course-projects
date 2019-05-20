const add = (a, b) => {
    // console.log(arguments);
    return a + b;
};

// console.log(add(55, 1, 1001));

const user = {
    name: 'Yevhen',
    cities: ['Kyiv','Odesa','Tokyo', 'Kobe'],
    printPlacesLived() {
        const cityMessages = this.cities.map(city => this.name + ' has lived in ' + city);

        cityMessages.forEach(city => {
            console.log(city);
        });
    }
};

user.printPlacesLived();

const multiplier = {
    multiplyBy: 2,
    numbers: [1, 2, 3],
    multiply() {
        return this.numbers.map(n => n * this.multiplyBy);
    }
};

console.log(multiplier.multiply());