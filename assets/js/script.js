//VARIABLES
//start timer on click start, count down to zero by 1 second, start timer at 75seconds
var timer = document.querySelector(".timer-count");
var secondsLeft = 120;

//hide all other sections until click start
//unhide q&a on click
var intialView = document.getElementById("initial-page");
var startButton = document.querySelector(".start-btn");

//loop through questions until game over
//hide all other sections until game over then go to endgame screen
//if correct add 5 to scoresdisplay correct, go to next question, if incorrect subtract 5 seconds, display wrong
var qAndA = document.getElementById("q&a");
var question = document.querySelector(".question");
var answers = document.querySelector(".answers");
var answerButton1 = document.querySelector(".answer1")
var answerButton2 = document.querySelector(".answer2")
var answerButton3 = document.querySelector(".answer3")
var answerButton4 = document.querySelector(".answer4")
var wrongRight = document.getElementById("wrong-right");
//?question how to put question and answers into an array?

//hide all other sections until submit, then go to highscores
var final = document.getElementById("final");
//tally userscore here
var userScore = document.querySelector(".userscore");
var userInitials = document.querySelector("#initials-input");
//stores user and score in local storage, move to top 3 if in top 3
//? Question - how to list highscores in order?
var submitButton = document.querySelector(".submit");
//user and highscore must be objects to store to local store

//hide all other screens until go back, then start over
var tally = document.getElementById("tally");
var highScores = document.querySelector(".highscores");
var highScoresList = document.querySelector(".list-of-scores-top");
var goBackButton = document.querySelector(".goback-btn");
//clear highscores on clear select, remove from local storage
var clearButton = document.querySelector(".clear");

//q&A List
var questionsList = [
    {
        questions: "Commonly used data types DO NOT inlude:",
        answersList: ["alerts", "boolean", "strings", "numbers"],
        correctAnswer: "alerts"
    },
    {
        questions: "The condition in an if/else statement is enclosed within ______.",
        answersList: ["curly brackets", "quotes", "square brackets", "parentheses"],
        correctAnswer: "curly brackets"
    },
    {
        questions: "Arrays in JavaScript can be used to store _______.",
        answersList: ["other arrays", "booleans", "numbers and strings", "all of the above"],
        correctAnswer: "all of the above"
    },
    {
        questions: "A very useful tool used during development and debugging for printing content to the debugger is:",
        answersList: ["console.log", "terminal/bash", "for loops", "JavaScripts"],
        correctAnswer: "console.log"
    },
    {
        questions: "String values must be enclosed within ______ when being assigned to variables.",
        answersList: ["commas", "quotes", "curly brackets", "parentheses"],
        correctAnswer: "quotes"
    }
];

var currentQuestion = 0; //increment by 1 once someone answers a question

//initial page view
qAndA.style.display = "none";
final.style.display = "none";
tally.style.display = "none";


//FUNCTIONS


//Start 
function Start() {
    qAndA.style.display = "block";
    intialView.style.display = "none";
    wrongRight.style.display = "none";
    secondsLeft = 60;
    score = 0;
    currentQuestion = 0;
    Quiz();
    setTime();
}

//start click event
startButton.addEventListener("click", Start);

//Quiz 
function Quiz() {
    highScores.style.display = "none";
    console.log(currentQuestion);
    question.textContent = questionsList[currentQuestion].questions;
    answerButton1.textContent = questionsList[currentQuestion].answersList[0];
    answerButton2.textContent = questionsList[currentQuestion].answersList[1];
    answerButton3.textContent = questionsList[currentQuestion].answersList[2];
    answerButton4.textContent = questionsList[currentQuestion].answersList[3];

}

//Quiz answer click event
var buttonContainer = document.querySelector(".question-answers");
buttonContainer.addEventListener("click", function (event) {
    var element = event.target.textContent;
    var button = event.target;
    if (button.matches("button")) {
        if (element === questionsList[currentQuestion].correctAnswer) {
            console.log(element);
            console.log(questionsList[currentQuestion].correctAnswer);
            wrongRight.style.display = "block";
            wrongRight.textContent = "Correct!";
            score += 5;
        } else {
            wrongRight.style.display = "block";
            wrongRight.textContent = "Wrong!";
            secondsLeft -= 5;
        }
        currentQuestion++;
        if (currentQuestion < questionsList.length) {

            Quiz();
        } else {
            score = score + secondsLeft;
            secondsLeft = 0;
            setTime();
            endQuiz();
        }
    }
});

//endgame function
function endQuiz() {
    final.style.display = "block";
    qAndA.style.display = "none";
    intialView.style.display = "none";
    tally.display = "none";
    highScores.style.display = "block";
    timer.textContent = 0;
    userScore.textContent = score;
    console.log(userInitials.textContent);
}

//submit score click event
submitButton.addEventListener("click", function () {
    final.style.display = "none";
    qAndA.style.display = "none";
    intialView.style.display = "none";
    tally.style.display = "block";
    // store userInitials
    //localStorage.setItem("userInitials", JSON.stringify(userInitials))
    // store userScore
    //localStorage.setItem("userScore", JSON.stringify(userScore))
    // sort and display highscores - highscore sort function
    //highScoresList.children[0].textContent = JSON.parse(localStorage.getItem("userInitials" + " - " + "userScore"));
    var highScoresListElement = document.createElement("li");
    highScoresListElement.textContent = (userInitials.value + " - " + userScore.textContent);
    highScoresList.appendChild(highScoresListElement);
    var yHighScoresy = localStorage.setItem("userScore.textContent", JSON.stringify(userScore.textContent));
    console.log(yHighScoresy);
    var xHighScoresx = JSON.parse(localStorage.getItem("userScore.textContent", userScore.textContent));
    console.log(xHighScoresx);
    //create a single arrary and store it to local storage and pull from objects inside of array 

});


//timer 
function setTime() {
    // Sets interval in variable
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timer.textContent = secondsLeft;

        if (secondsLeft <= 0) {
            // Stops execution of action at set interval
            clearInterval(timerInterval);
            // Calls function to create and append image
            endQuiz();
        }

    }, 1000);
}

//highscore link event 
highScores.addEventListener("click", function () {
    qAndA.style.display = "none";
    final.style.display = "none";
    intialView.style.display = "none";
    tally.style.display = "block";
});
//remove highscore link event during gameplay?


//High scores go back click event *
goBackButton.addEventListener("click", function () {
    //Start();
    qAndA.style.display = "none";
    final.style.display = "none";
    tally.style.display = "none";
    intialView.style.display = "block";
});


//clear highscores click event *
clearButton.addEventListener("click", function () {
    highScoresList.textContent = ""
    console.log(highScoresList.textContent)

});

//highscore sort function


