var timerEl = document.getElementById('countdown');
var scoreEl = document.getElementById('score')
var questionEl = document.getElementsByClassName("answer-btn")
var questionsArr= document.getElementsByClassName('question-card');
var highScores=[];
let currentScore = 0;
let questionNum = 0;

const AWARD_POINTS = 100;


var timeLeft = 5;
if (timeLeft === 0){
  for(i=0; i < questionsArr; i++){
    questionsArr[i].style.display = "none";
  }
};

function countdown() {
  // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
  var timeInterval = setInterval(function()  {
    if (timeLeft > 0 ) {
      timerEl.textContent = "00:" + timeLeft--;
    }
    else
    {
      clearInterval(timeInterval);
      timerEl.textContent = "00:00";
    }
  }, 
  1000);
};

function startQuiz(){
  questionsArr[0].style.display = "block";

  if (document.body.addEventListener){
    document.body.addEventListener('click',eventHandler,{once:true});
  }
  
  function eventHandler(e){
    e = e || window.event;
    var target = e.target || e.srcElement;
    if (target.className.match(/answer-btn/))
    {
      //an element with the answer-btn Class was clicked
      checkAnswer(target);
    }
  }
};


// if (document.body.addEventListener){
//   document.body.addEventListener('click',eventHandler,{once:true});
// }

// function eventHandler(e){
//   e = e || window.event;
//   var target = e.target || e.srcElement;
//   if (target.className.match(/answer-btn/))
//   {
//     //an element with the answer-btn Class was clicked
//     checkAnswer(target);
//   }
// }

//check the selection for a correct answer, change background color, and update score/timer
function checkAnswer(button) {
  console.log(button)
  if(button.className.match(/correct/)){
    console.log('correct');
    currentScore+= AWARD_POINTS;
    scoreEl.textContent = 'Score: ' + currentScore;
    button.classList.add('revealCorrect');
    questionNum++;
  }
  else{
    console.log('incorrect');
    button.classList.add('revealIncorrect');
    questionNum++;
    timeLeft -=5;
  }
  console.log(currentScore)
}


// function removeQuestion(question){
//   question--;
//   questionsArr[question].style.display = "none";
// }


// use an interval to display questions
var QuestionInterval = setInterval(hideShow, 3000);

function hideShow(){

  if (document.body.addEventListener){
    document.body.addEventListener('click',eventHandler,{once:true});
  }
  
  function eventHandler(e){
    e = e || window.event;
    var target = e.target || e.srcElement;
    if (target.className.match(/answer-btn/))
    {
      //an element with the answer-btn Class was clicked
      checkAnswer(target);
    }
  }


  //esure there is time remaining
  if (timeLeft === 0){
    questionsArr[questionNum].style.display = "none";
    clearInterval(QuestionInterval);
    //endQuiz();
  }
  //ensure only current question os displayed
  if (questionNum >= 1 && questionNum <= 3){
    questionsArr[questionNum-1].style.display = "none";
  }
  if (questionNum < 3){
    questionsArr[questionNum].style.display = "block";
  }
  //clear current interval when all questions have been answered
  else {
    clearInterval(QuestionInterval);
    timeLeft = 0;
    //endQuiz();
  }

};


function endQuiz(){
  // ask for initials and display score, submit and save to local memory
  // display option to clear local memory or go back and play again

};


countdown();
startQuiz();
// myFunction();