function convertToRoman(num) {
    const obj = {
        0: ['M', 1000],
        1: ['D', 500],
        2: ['C', 100],
        3: ['L', 50],
        4: ['X', 10],
        5: ['V', 5],
        6: ['I', 1]
    };

    let result = '';

    for (let key in obj) {
        const [symbol, value] = obj[key];
        while (num >= value) {
            result += symbol;
            num -= value;
        }

        // Handle subtractive notation (e.g., IV, IX, XL, XC, etc.)
        const nextKey = (parseInt(key) + 1).toString();
        if (obj[nextKey] && num >= value - obj[nextKey][1]) {
            result += obj[nextKey][0] + symbol;
            num -= (value - obj[nextKey][1]);
        }
    }

    return result;
}

// Test the function
console.log(convertToRoman(36));
