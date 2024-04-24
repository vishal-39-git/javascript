
let n1 = prompt("Enter the score");

if(n1 >= 90 && n1 <= 100){
    grade = "A";
}else if(n1 >= 70 && n1 <= 89){
    grade ="B";
}else if(n1 >= 60 && n1 <= 69){
    grade ="C";
}else if(n1 >= 50 && n1 <= 59){
   grade ="D";
}else if(n1 >= 0 && n1 <= 49){
    grade ="F";
}
console.log("according to your scores,your grade was : "+grade);
