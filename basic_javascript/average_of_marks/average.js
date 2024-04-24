let arr = [78,77,68,50,89,77,90];
let sum = 0;

console.log("marks of students:"+arr);

for (let temp of arr){
    sum += temp;
}
let ans = sum/arr.length;

console.log(arr.length);
console.log("average marks of the marks are :"+ans);