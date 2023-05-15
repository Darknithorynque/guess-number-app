/* 

//SECTION-1

//difference between double equals and triple equals in js , is that double euqals doesn't have 
//variable type sensitivity but triple equals want pure equality
// Triple equality operator does not type coercion, but double does.
// If you want to know really equality , use triple

look at example


let number = 123
let stringNumber ="123"

console.log(number == stringNumber) //true
console.log(number === stringNumber) //false
console.log(number === 123)  //true

//If you use 2 numerical string the result will work as numeric with minus assign but plus is different
var a ="2"
var b = "1"

console.log(a-b)
console.log(a+b)

// you can use varriable value inside string like this
console.log(`Hello this is a number ${a} `)

//const varriables must be initialized 
// const x; is not initialized

// you can use greater or equals operator like this :  const isAdult = age >=18;

*/


/*

//BMI Calculation , challenge #1

function Bmi_calc(weight,height){

    var round, fix;
    round = height/100;
    var heightForCalc = Math.pow(round,2)
    let bmi = weight/heightForCalc

    return bmi.toFixed(2);

}


let mark_height = prompt("Enter Mark's height (cm)")
let mark_weight = prompt("Enter mark weight")

let john_height = prompt("Enter john height (cm)")
let john_weight = prompt("Enter john weight")

let bmiForMark = Bmi_calc(mark_weight,mark_height)
let bmiForJohn = Bmi_calc(john_weight, john_height)

var markHigherBmi;

console.log(bmiForJohn , bmiForMark)


if(bmiForMark>bmiForJohn){
    markHigherBmi = true
    console.log(markHigherBmi)
}

if(bmiForJohn > bmiForMark){
    markHigherBmi = false
}  */



/*
#Challenge 2



let johnWeight, johnHeight, markWeight, markHeight;

function Calculation(weight, height){

   let heightRounded = height/100;
   let heightPow = Math.pow(heightRounded,2)

   let resultBMI = weight/heightPow;

    return resultBMI.toFixed(2);

}



var forMark = Calculation(95,185)
var forJohn = Calculation(76,189)

if(forJohn > forMark){

    console.log(`John's bmi(${forJohn}) is higher than Mark's(${forMark}) `)
}

if(forMark>forJohn){

    console.log(`John's bmi(${forJohn}) is not higher than Mark's(${forMark}), vice versa`)

}

else{
    console.log("equals")
}

*/




/* CHALLENGE 3 



 
function avgScore(score1,score2,score3){

    let calc = (score1+score2+score3)/3;

    return calc;

}

let teamDolphins = avgScore(90,56,105)
let teamKoalas = avgScore(88,102,99)

let compare = teamDolphins > teamKoalas;

if(compare){
    console.log(`Dolphins won`)
} else if(!compare){
    console.log("Koalas won");
} else console.log("Equality")

*/





//CONDITIONAL OPERATOR
/*
age = 19;

age >=18 ? console.log("adult") : console.log("not adult")
*/ 




/* CHALLENGE-4 */


let bill, tip;

bill = 320;

function calcTip(bill){

    
    let tipValue = (bill >= 50 && bill <= 350) ? bill*(0.15) :
    bill/5;

    return tipValue.toFixed(2)
}


tip = calcTip(bill)


console.log(`The bill value is ${bill} and tip is ${tip}. Fatura is ${Number(bill)+Number(tip)}`)

