const arr = [2, 3, 4, 7, 6, 8];
const dictionary = {
    the: 22038615,
    be: 12545825,
    and: 10741073,
    of: 10343885,
    a: 10144200,
    in: 6996437,
    to: 6332195
};

// function personCount(person) {
//     let map = new Map();
//     person.forEach(person => {
//         map[person.firstName] = (map.get() === 0) ? 0 : +1;
//     });
//     return map;
// }

function getMin(n) {
    const array = Array.from(n);
    let min;
    array.forEach(element => {
        if (min === undefined || element < min) {
            min = element;
        }
    });
    return min;
}

function getMax(n) {
    let max;
    let counter = 0;
    for (let i = 0; i < n.length; i++) {
        counter++;
        if (max === undefined || max < n[i]) {
            max = n[i];
        }
    }
    console.log(`n: ${n.length}, counter: ${counter}`);
    return max;
}

function isEvenOrOdd(n) {
    return n & 1 ? 'odd' : 'even';
}

function getWordFrequency(dictionary, word) {
    if (!dictionary[word]) {
        return 'No Word found';
    }
    return dictionary[word];
}


function bubbleSort(n) {
    for (let outer = 0; outer < n.length; ++outer) {
        let outerElement = n[outer];

        for (let inner = outer + 1; inner < n.length; inner++) {
            let innerElement = n[inner];

            if (outerElement > innerElement) {
                //Swap
                n[outer] = innerElement;
                n[inner] = outerElement;
                //update references
                outerElement = n[outer];
                innerElement = n[inner];
            }
        }
    }
    return n
}

const countFirstNames = (person) => {
    let firstNames = new Map();
    person.forEach(person => {
        firstNames.set(person.firstName, (firstNames.get(person.firstName) || 0) + 1)
    })
    return firstNames
}

const person = [{
        firstName: 'Akaki'
    },
    {
        firstName: 'Akaki'
    },
    {
        firstName: 'Akaki'
    },
    {
        firstName: 'Eka'
    },
    {
        firstName: 'Tamuna'
    }
];
console.log(countFirstNames(person))