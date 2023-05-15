const randomNumber = Math.floor(Math.random() * 20) + 1;

let score = document.getElementById("score");
let actualScore = parseInt(score.innerHTML)

let highscore = []

let difference;

let buttonActivity = document.querySelector("#checkButton").disabled = false
console.log(buttonActivity)
console.log(randomNumber);
let actualNumber = document.getElementsByClassName("actual-number")[0]

let guessNumberInput = document.getElementById("guessNumber");
console.log( document.getElementsByClassName("actual-number")[0].innerHTML);

function controllGame(randomN){
    let guessN = Number(guessNumberInput.value);

    if(guessN >= 1 && guessN <= 20) {

        if(guessN == randomN){
            actualNumber.innerHTML = guessN;
            highscore.push(actualScore)
            document.getElementById("highscore").innerHTML = highscore[0]

            //CSS animation
             document.getElementById("guessNumber").style.backgroundColor="green"
             document.getElementsByTagName("html")[0].style.backgroundColor="green"
             document.getElementsByClassName("container")[0].style.backgroundColor="green"
             document.getElementsByTagName("span")[1].style.color="white"
             document.getElementsByClassName("actual-number")[0].style.backgroundColor="green"


             document.getElementsByTagName("h1")[0].innerHTML="Correct !"


            buttonActivity = document.querySelector("#checkButton").disabled = true    
        }
        else if(guessN != randomN) {
            actualScore = actualScore - 1;
            score.innerHTML = actualScore

            difference = randomN - guessN;
            console.log(difference)
            let actualDifference;


            if(difference >= 0) {
                actualDifference = difference*1;
            }

            if(difference < 0) {
                actualDifference = difference*(-1);

            }

            console.log(actualDifference)


            if(actualDifference>10 && actualDifference<=20) {
                document.getElementsByClassName("too-low")[0].innerHTML = "Too Low"
            }

            if(actualDifference>5 && actualDifference<=10) {
                document.getElementsByClassName("too-low")[0].innerHTML = "Low"
            }

            if(actualDifference>0 && actualDifference<=5) {
                document.getElementsByClassName("too-low")[0].innerHTML = "Close"
            }
        }

    }

    else alert("pls enter a number between 1 and 20");
   
}


document.getElementsByClassName("btn-check")[0].addEventListener("click", function(){
    controllGame(randomNumber);
});

document.getElementsByClassName("btn-again")[0].addEventListener("click",function(){
    location.reload()
})