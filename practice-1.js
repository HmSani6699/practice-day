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


// practice 3
const noParameter = () => 89;
// console.log(noParameter())