let companies = ["microsoft","google","apple","IBM"];

console.log(companies);

let val = companies.shift();

console.log("first element is delated : "+val);

console.log(companies);

companies.splice(1,1,"TCS");

console.log("replace the apple with TCS");

console.log(companies);

companies.push("Amazon");

console.log("element add at the last");

console.log(companies);