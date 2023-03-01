

function hasOddNumber(arr) {
    return arr.some(function(val) {
        return val % 2 !== 0;
    })
}

function hasAZero(num) {
    return num.toString().split('').some(function(val) {
        return val == 0;
    })
}

function hasOnlyOddNumbers(arr) {
    return arr.every(function(val) {
        return val % 2 !== 0;
    })
}

function hasNoDuplicates(arr) {
    return arr.every(function() {
        return arr.indexOf(val) === arr.lastIndexOf(val);
    })
}

let arr2 = [
    {title: "Instructor", first: 'Elie', last:"Schoppik"},
    {title: "Instructor", first: 'Tim', last:"Garcia", isCatOwner: true},
    {title: "Instructor", first: 'Matt', last:"Lane"},
    {title: "Instructor", first: 'Colt', last:"Steele", isCatOwner: true}
  ]

function hasCertainKey(arr2, key) {
    return arr2.every(function(val) {
        return key in val;
    })
}

function hasCertainValue(arr2, key, value) {
    return arr2.every(function(val) {
        return val[key] === value;
    })
}