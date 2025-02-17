function findLargestNumber(obj) {
    if (obj.length === 0) {
        return null;
    }
    let largest = obj[0];
    for (let i = 1; i < obj.length; i++) {
        if (obj[i] > largest) {
            largest = obj[i];
        }
    }
    return largest;
}

const numbers = {a:3, b:5, c:7, d:2, e:8, f:-1, g:4, h:10, i:12};
const largestNumber = findLargestNumber(numbers);
console.log("The largest number is:", largestNumber);