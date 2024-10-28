const person = {fname:"John", lname:"Doe", age:25}; 

let txt = "";
for (let x in person) {
  txt += person[x] + " ";
}

document.getElementById("demo1").innerHTML = txt;
const numbers = [45, 4, 9, 16, 25];

let txt1 = "";
for (let x in numbers) {
  txt += numbers[x] + "<br>"; 
}

document.getElementById("demo2").innerHTML = txt1;
const numbers1 = [45, 4, 9, 16, 25];

let txt2 = "";
numbers1.forEach(myFunction);
document.getElementById("demo3").innerHTML = txt2;

function myFunction(value, index, array) {
  txt2 += value + "<br>"; 
}