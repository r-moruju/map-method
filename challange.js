let students = [
    {
        name: 'John',
        subjects: ['maths', 'english', 'cad'],
        teacher: {maths: 'Harry', english: 'Joan', cad: 'Paul'},
        results: {maths: 90, english: 75, cad: 87},
    },
    {
        name: 'Emily',
        subjects: ['science', 'english', 'art'],
        teacher: {science: 'Iris', english: 'Joan', art: 'Simon'},
        results: {science: 93, english: 73, art: 95},
    },
    {
        name: 'Adam',
        subjects: ['science', 'maths', 'art'],
        teacher: {science: 'Iris', maths: 'Harry', art: 'Simon'},
        results: {science: 93, english: 88, maths: 97, art: 95},
    },
    {
        name: 'Fran',
        subjects: ['science', 'english', 'art'],
        teacher: {science: 'Iris', english: 'Joan', art: 'Simon'},
        results: {science: 93, english: 87, art: 95},
    }
];

const biggest = students.reduce((acc, curr) => {
    let [name, max] = [curr.name, curr.results.english]
    if(max > acc.max) {
        acc.max = max;
        acc.name = name
    }
    return acc;
}, {name: '', max: 0})

console.log(biggest);

const smallest = students.reduce((acc, curr) => {
    let [name, min] = [curr.name, curr.results.english]
    if(min < acc.min) {
        acc.min = min;
        acc.name = name
    }
    return acc;
}, {name: '', min: 100})

console.log(smallest);