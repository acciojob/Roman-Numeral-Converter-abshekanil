function convertToRoman(num) {
    const romanSymbols = {
        1000: ['M'],
        900: ['CM'],
        500: ['D'],
        400: ['CD'],
        100: ['C'],
        90: ['XC'],
        50: ['L'],
        40: ['XL'],
        10: ['X'],
        9: ['IX'],
        5: ['V'],
        4: ['IV'],
        1: ['I']
    };

    const orderedValues = Object.keys(romanSymbols).sort((a, b) => b - a);

    let result = '';

    orderedValues.forEach(value => {
        value = parseInt(value);
        while (num >= value) {
            result += romanSymbols[value][0];
            num -= value;
        }
    });

    return result;
}

// Test the function 
console.log(convertToRoman(36));
