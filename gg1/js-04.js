var arr1 = [
    10, 11, 21, 33, 34, 28, 49, 20, 81, 16, 100
]

console.log(arr1);
arr1.push(44);
console.log(arr1);

arr1.unshift(76);
console.log(arr1);

var v1 = arr1.pop()
console.log(v1, arr1);

var v2 = arr1.shift()
console.log(v2, arr1);

var arr2 = arr1.filter((el) => el % 2 === 0);
console.log(arr2);

var num = arr1.find((num) => num === 33);

var oggetti = arr1.map((num) => {
    return { nome: 'non so', eta: num} 
});
console.log(oggetti);

console.log(arr1.sort((n1, n2) => n1 - n2));

console.log(
    arr1
        .filter((num) => num % 2 === 0)
        .sort((n1, n2) => n1 - n2)
        .map((num) => {
            return {
                nome: 'Mario',
                eta: num,
            }
        })
);

// equivalente non funzionale del filter()
var arr3 = [];
for(var i = 0; i < arr1.length; i++) {
    if (arr1[i] % 2 === 0) {
        arr3.push(arr1[i]);
    }
}
console.log(arr3);

function isEven(num) {
    if (num % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

function isEven(num) {
    return (num % 2 === 0);
}

var arr4 = arr1.filter(function(x) {
    return isEven(x)
});

var arr5 = arr1.filter(isEven);