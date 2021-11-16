var timerEl = document.getElementById('countdown');
var scoreEl = document.getElementById('score');
var questionsCol= document.getElementsByClassName('question-card');
var formEl = document.getElementById('user-form')
var highScores=[];
let currentScore = 0;
let questionNum = 0;

const AWARD_POINTS = 100;


var timeLeft = 60;

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
      endQuiz();
    }
  }, 
  1000);
};



function startQuiz(){
  countdown();
  questionsCol[0].style.display = "block";

  if (document.body.addEventListener){
    //listen for click event
    document.body.addEventListener('click',eventHandler);
  }
  //match click event to one of the answer buttons
  function eventHandler(e){
    e = e || window.event;
    var target = e.target || e.srcElement;
    if (target.className.match(/answer-btn/))
    {
      //an element with the answer-btn Class was clicked
      setTimeout(hideShow, 1500);
      // disable buttons after a choice is made to prevent changing or repeating answers
      var answersArr =questionsCol[questionNum].getElementsByClassName("answer-btn")
      disableBtn(answersArr)
      checkAnswer(target);
      questionNum++; // iterate to new question

      // call endQuiz if all questions have been answered
      if (questionNum == questionsCol.length){
        setTimeout(endQuiz, 1500);
      }
    }
  }
};



//check the selection for a correct answer, change background color, and update score/timer
function checkAnswer(button) {
  if(button.className.match(/correct/)){
    currentScore+= AWARD_POINTS;
    scoreEl.textContent = 'Score: ' + currentScore;
    button.classList.add('revealCorrect');
  }
  else{
    button.classList.add('revealIncorrect');
    timeLeft -=5;
  }
};

// iterate through buttons within question card and disable them
function disableBtn(answers){
  for (i=0; i < answers.length; i++){
    answers[i].setAttribute("disabled","true");
  }
};

//display current question and hide previous
function hideShow() {
  let prevQuestion = questionNum - 1;
  questionsCol[prevQuestion].style.display = "none";
  questionsCol[questionNum].style.display = "block";
};

// reduce time to 0, clear questions from display and show uswer form
function endQuiz(){
  timeLeft = 0;
  for(i=0; i < questionsCol.length; i++){
    questionsCol[i].style.display = "none";
  }
  formEl.style.display = "flex";
};

    startQuiz();


