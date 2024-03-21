function deepClone(data) {
    return JSON.parse(JSON.stringify(data));
}

let arr1 = [1, [2, 3, 4], 5, {a:1, b:2, c:[4, 5, 6]}];
let arr2 = deepClone(arr1);
arr1[1][2] = 9;
console.log(arr2[1][2]); // 4
arr1[3].a = 100;
console.log(arr2[3].a); // 1
