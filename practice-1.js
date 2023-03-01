const student = {
    name: 'Adiba',
    age: 19,
    aducation: false,
    subjects: ['bangla', 'arbi', 'english'],
    father: {
        name: 'anuar',
        age: 45,
        address: 'ilomdi'
    },
    fullName(lastName) {
        return (this.name + lastName)
    }
}
const result = student.fullName(' akter')
// console.log(result)


// practice 2

const template = `
${student.name}
${student.father.name}
${student.subjects[1]}
`;
// console.log(template)


// practice 3_1
const noParameter = () => 89;
// console.log(noParameter())


// practice 3_2
const oneParameter = num => num / 17
// console.log(oneParameter(40))

// practice 3_3
const twoParameter = (num1, num2) => (num1 + num2) / 2;
// console.log(twoParameter(5, 5))

// practice 3_4
const multiLine = (num1, num2) => {
    const first = num1 + 7;
    const second = num2 + 7;
    const total = first + second
    return total
}
// console.log(multiLine(10, 10))

// practice 4
const number = [10, 20, 30, 40, 50, 60, 70, 80, 90];
const result1 = number.map(num => num / 7);
// console.log(result1);

// practice 5
const madrasa = {
    name: 'pakunda',
    address: 'pakunda bammar bari',
    AllStudent: 250,
    staf: 18
}


const { name, address, AllStudent, staf } = madrasa;
// console.log(name);
// console.log(address);
// console.log(AllStudent);
// console.log(staf);

const array = [1, 2, 3, 4, 5];
const [, balance] = array;
// console.log(balance)
// console.log(array)