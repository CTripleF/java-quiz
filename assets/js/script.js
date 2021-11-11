var timerEl=document.getElementById('countdown');
var highScores=[];
var score = 0;

function countdown() {
  var timeLeft = 60;

  // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
  var timeInterval = setInterval(function()  {
    if (timeLeft > 0 ) {
      timerEl.textContent = "time left: " + timeLeft--;
    }
    else
    {
      clearInterval(timeInterval);
      timerEl.textContent = "";
    }
  }, 
  1000);
};

function hideshow() {
  document.getElementById('hidden-div').style.display = 'block'; 
  this.style.display = 'none';
};

function startQuiz(){
  //on button click event to start quiz
  var startBtn = document.getElementById('start-btn');
  
};

function quiz(){
  // rotate through set of questions to be answered using mutiple choice.
  // score increase on correct answer reduce timer on wrong
  // call endQuiz at timer 0 or all questions answered
};

function endQuiz(){
  // ask for initials and display score, submit and save to local memory
  // display option to clear local memory or go back and play again

};

// function myFunction() {
//   var x = document.getElementById("myDIV");
//   if (x.style.display === "none") {
//     x.style.display = "block";
//   } else {
//     x.style.display = "none";
//   }
// }

//countdown();