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
console.log(result)