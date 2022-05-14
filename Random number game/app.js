// UI elements
const game = document.querySelector('#game'),
      input = document.querySelector('#input'),
      submit = document.querySelector('#guess-value'),
      message = document.querySelector('.message'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num');

// Main game
 // game values

 let min = 0,
    max = 10,
    winningNum= Math.round(Math.random(10)*10);
    guessesLeft = 3;

 // Assign UI min and max numbers
 minNum.textContent= min;
 maxNum.textContent= max; 

 // Listen for guess
 submit.addEventListener('click', mainFunction);
 

 //set a message
 function setMessage(msg, color){
     input.style.borderColor = color;
     message.style.color = color;
     message.textContent=msg;
 }

 //submit fucntion
 function mainFunction(){
    let guess = parseInt(input.value);
    // console.log(guess);
    if(isNaN(guess) || guess < min || guess > max){
       setMessage(`Enter a number between ${min} and ${max}`, 'red' )
    }else if(guess===winningNum){
        // Game won
       input.disabled= true;
       setMessage(`Congratulations, You WON!!!! The answer ${winningNum}`,'green')
       submit.value="Retry";
       submit.addEventListener('click', retryFunction)
   }else{
       // wrong ans
       setMessage(`${guess} is incorrect`, 'blue');
       guessesLeft -= 1;

   if (guessesLeft===0){
       //GAme over
       input.disabled=true;
       setMessage(`${guess} is incorrect, Game OVER!! The answer is ${winningNum}`,'RED')
       submit.value='Retry';
       guessesLeft=0;
       // submit.removeEventListener();
       submit.addEventListener('click', retryFunction)
   }else{
        // game continue
        setMessage(`${guess} is incorrect, You have ${guessesLeft} try left`,'red');
        // tries finish
   }}
   input.value="";

}
 
 //retry function
 function retryFunction(){
    submit.value="Submit";
    setMessage('','');
    input.value = '';
    guessesLeft = 3;
    winningNum= Math.round(Math.random(10)*10);

    input.disabled = false;
    submit.removeEventListener('click' ,retryFunction);
    // submit.addEventListener('click', mainFunction);
}