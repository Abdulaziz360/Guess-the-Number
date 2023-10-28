let random=parseInt(Math.random()*100+1)
console.log(random)
const input_value=document.querySelector('#guessField')

// for submit val

const submit=document.querySelector('#subt')

// result section

const result_section=document.querySelector('.resultParas')

const prev_guesses=document.querySelector('.guesses')

const remaining_guess=document.querySelector('.lastResult')

const result_info=document.querySelector('.lowOrHi')

// start new

const start=document.querySelector('.btn')

let newGuess=1
let playGame=true
let p=document.createElement('p')
if(playGame){
submit.addEventListener('click',function(e){
    e.preventDefault()
    const guess=parseInt(input_value.value)
    validateGuess(guess)
    console.log(`${input_value.value}`)
    // prev_guesses.innerHTML+=`${guess}`
})
}
function validateGuess(guess){

    if(isNaN(guess)){
        alert('please enter valid value')
    }
    else if(guess<1){
        alert('please enter value b/w 1 && 100')
    }
    else if(guess>100){
        alert('please enter value b/w 1 && 100')
    }
  else{

        if(newGuess==2 && guess==random) {
        displayGuess(guess)
        displayMessage(`You guessed it:${random}`)
        endGame()
        }
        else if(newGuess==2) {
        displayGuess(guess)
        displayMessage(`game over the random num was:${random}`)
        endGame()
        }
        else{
            displayGuess(guess)
            checkGuess(guess)
        }
  }

}
function checkGuess(guess){
    if(guess==random){
        input_value.setAttribute('disabled','')
        displayMessage(`you guessed it:${random}`)
       endGame()
    }
    else if(guess>random){
        // input_value.setAttribute('disabled','')
        displayMessage(`Number is too large :${guess}`)

    }
    else if(guess<random){
        // input_value.setAttribute('disabled','')
        displayMessage(`Number is too low:${guess}`)

    }
}
function displayGuess(guess){
   input_value.value=''
   prev_guesses.innerHTML+=`${guess},`
   newGuess++
   remaining_guess.innerHTML=`${11-newGuess}`
//    result_info.innerHTML`<h3>`
}
function displayMessage(message){
 result_info.innerHTML=`<h3>${message}</h3>`

}

function endGame(){
    input_value.setAttribute('disabled','')
    p.innerHTML=`<h7 id="newGame" style="cursor: pointer;background-color: rgb(20, 20, 20);
    border: 1px solid rgb(63, 62, 62);
    border-radius:4px;
    padding:7px;
    margin-left:80px;
    color: white;">
    Start new game</h7>`
    start.appendChild(p)
    playGame=false
    // playGame=false
    newGame()
}
function newGame(){
    const new_game=document.querySelector('#newGame')
    new_game.addEventListener('click',function(e){
        random=parseInt(Math.random()*100+1)
        console.log(random)
    input_value.removeAttribute('disabled')
    // input_value.value=''
    prev_guesses.innerHTML=``
    newGuess=1
    remaining_guess.innerHTML=`${11-newGuess}`
    start.removeChild(p)
    result_info.innerHTML=''
    playGame=true
})

}












