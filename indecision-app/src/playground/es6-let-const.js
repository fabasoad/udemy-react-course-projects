var nameVar = 'Andrew';
var nameVar = 'Mike';
console.log('nameVar', nameVar);

let namelet = 'Jen';
namelet = 'Julie';
console.log('nameLet', namelet);

const nameConst = 'Frank';
console.log('nameConst', nameConst);

function getPetName() {
    var petName = 'Hal';
    return petName;
}

const petName = getPetName();
console.log(petName);

const fullName = 'Jen Med';
let firstName;

const getFirstName = x => x.split(' ')[0];

if (fullName) {
    firstName = getFirstName(fullName);
    console.log(firstName);
}

console.log(firstName);