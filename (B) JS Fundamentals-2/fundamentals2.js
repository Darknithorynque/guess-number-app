//Using use strict is usefull for developers. It provides detect errors easily
"use strict";


/* 
//Function Declaration and Expression


const age = birthYear(19)

//Declarative Function and you see it is declarative
function birthYear(birthYear){

    return 2023 - birthYear;
}

console.log(age)


//Expression Function that's mean you need function before call.

const birthYear2 = function(birthYear2){
    return 2023 - birthYear2;
}

const age2 = birthYear2(21)

console.log(age , age2)

*/




/* 

//ARROW FUNCTION ( not error :d )

const favThreeColor = (colorOne, colorTwo, colorThird) => {

    return `My favorite 3 colors are ${colorOne}, ${colorTwo} and ${colorThird}`

}

const myFavColors = favThreeColor("red","purple","blue")

console.log(myFavColors)

*/





//CALL FUNCTION INSIDE OTHER FUNCTION

/* 


function makeItDouble(input1){
    
    return input1*2;
}

function someOfDouble(firstOne,secondOne){
    const x = makeItDouble(firstOne)
    const y = makeItDouble(secondOne)

    return `${firstOne} and ${secondOne} has doubled now (${x +" and "+y})`
}

const callBigger = someOfDouble(2,4)
console.log(callBigger)
*/







//CHALLENGE 1

/** 

const calcAvg = (score1, score2, score3 ) => {return (score1+ score2+score3)/3;} 

const whoIsWinner = function(dolphins, koalas, oranges) {

    const teams = [dolphins,koalas,oranges];
    let  count = 0;
    let winner;
    let result

    if(dolphins > koalas && dolphins > oranges && (dolphins !== koalas || oranges) ){
        winner =`Winner is dolphins(${dolphins}) team`
    }
    else if(koalas > dolphins && koalas > oranges && (koalas !== dolphins || oranges)){
        winner =`Winner is koalas(${koalas}) team`
    }
    else if(oranges > dolphins && oranges > koalas && (oranges !== koalas || dolphins)){
        winner =` Winner is oranges(${oranges}) team`
    }
    else {
        winner = "noone winner"; }

    return winner;  
}


const scoreDolphins = calcAvg(80,90,100)
const scoreKoalas = calcAvg(90,90,90)
const scoreOranges = calcAvg(300,80,70)

const winner = whoIsWinner(scoreDolphins,scoreKoalas,scoreOranges);

console.log(winner) */






//ARRAYS
/** 

//there are 2 way to create array

const myArray = [1,2,3,4];
const myArray2 = new Array(1,2,3,4)

// you can use an array inside an other array
const arrayInsideArray = ["arda",23,myArray]

console.log(myArray[0], myArray2[0])

console.log(arrayInsideArray[2][2])


//ADD ELEMENTS
// push function has 2 effect; first is add value to array, second is show lenght of array
const a = myArray.push("lol")
const b = myArray2.push()
console.log(a , b)


//REMOVE ELEMENTS (those are not show lenght)
const popped = myArray.pop() //remove last
const shifted = arrayInsideArray.shift() //remove first
const popped2 = myArray2.pop(2)

console.log(myArray, myArray2)
console.log(shifted +"\n"+ arrayInsideArray)

//also other methods for array are indexOf, includes etc. you know already 

*/


//CHALLENGE 2
/** 

const calcTip = (bill) => {

    let tip;

    if(bill >=50 && bill <= 350){
        tip = bill*0.15
    }
    else tip = bill*0.2;

    return tip;
}

const bills = [150,600,50,25]
const tip = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2]), calcTip(bills[3])]

console.log(tip)
*/






//OBJECTS
/** 
const exmpObject = {
    nameKey: "arda",
    numberKey: 123,
    arrayKey : [2,5,7],
    icecreamKey: "vanilia"
}


//you can call with 2 way an object 
// dot vs bracket

let dotWay, bracketWay;

dotWay = exmpObject.arrayKey[2]
bracketWay = exmpObject["nameKey"]

console.log(dotWay , bracketWay)
console.log(exmpObject["arrayKey"][0])

exmpObject["numberKey"] = 55
console.log(exmpObject)


//understand key
const undestandKeyName = prompt("Choose what you want to know about our object name, number, array, ice-cream ?")
const key1 = "Key"
console.log(exmpObject[undestandKeyName+key1])
*/




//OBJECT METHODS

/** 

const myBag = {

    firstName: "B",
    smoke:"malborra",
    cash: 255,
    haveDriverLicense: true,
    idCard : {
        idNo: 333444111,
        birthdate: 2001
    },

    //Can define function in object
    calcAge: function(){
       // return 2023 - myBag.idCard.birthdate;
       console.log(this)
       return 2023 - this.idCard.birthdate;
    },

    getSummary: function(){

        return `${this.firstName} is ${this.calcAge()}-years old, his favorite smoke is ${this.smoke}`+
        ` and ${this.haveDriverLicense ? "he has driver license" : "he has not driver license"} `
    }

}

console.log(myBag.calcAge())
console.log(myBag["calcAge"]())
console.log(this)
console.log(myBag.getSummary())

*/


//CHALLENGE 4 , OBJECTS

/**
const bmiCalc = {
    mark: {
        fName : "Mark",
        weight: 106,
        height: 1.78,
    },
    stephen: {
        fName : "Stephen",
        weight: 85,
        height: 1.82,
    },
    birkan: {
        fName : "Birkan",
        weight: 104,
        height: 1.85,
    },
    calcBmi: function(x){
        this[x].bmi = (this[x].weight/(this[x].height**2)).toFixed(2);
        return `${this[x].fName}'s bmi calculation result is ${this[x].bmi}`;
    },

    compare: function(){

        this.birkan.bmi > this.mark.bmi ? console.log("birkan bmi is higher") : console.log("yep")
    }
}

let x = prompt("enter a name")

console.log(bmiCalc.calcBmi(x) , bmiCalc.compare())

 */




//LOOPS (continue and break)

/** 

const myArray = [
    144,
    "mahmut",
    true,
    [1,2,3],
    "rock"
]

//that means only string
for(let i = 0 ; i<myArray.length; i++){

    if(typeof myArray[i] !== "string") continue;

    console.log(myArray[i])
}

*/

/** 
 //CHALLENGE
const bills = [120, 155, 60, 450, 600, 220, 20, 34, 49, 9];
const tipAndTotal = []

const calcTip = (bill) =>{

    let tip, total;

    bill>=50 && bill<=300 ? tip = bill*0.15 : tip = bill/5;

    total = bill + tip;
    console.log(total, bill, tip)

    return (tip.toFixed(2)+"TL "+total.toFixed(2)+"TL");

}


for (let i = 0; i < 10; i++) {

    let result = calcTip(bills[i])
    console.log(result)

    tipAndTotal.push(result);
}

console.log(tipAndTotal)

*/



const printForecast = function(arr=[]){


    let print,printArray=[];

    for(var i = 0; i<arr.length; i++){
        print = `${arr[i]} in ${i+1} days`
        printArray.push(print)
    }
    return printArray;
}


const exmpArray = [12,13,14,15,16,17];


let a = printForecast(exmpArray)


console.log(a)


