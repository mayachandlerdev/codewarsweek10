// You are given an input string.

// For each symbol in the string if it's the first character occurence, replace it with a '1', else replace it with the amount of times you've already seen it...

function numericals(input) {
    let obj = {};
    let result = "";
    for (let i = 0; i < input.length; i += 1) {
        let current = input[i];
        if (obj[current]) {
            obj[current] += 1;
        } else {
            obj[current] = 1;
        }

        result += obj[current];
    }

    return result;
}