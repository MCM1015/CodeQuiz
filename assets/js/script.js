//VARIABLES
//start timer on click start, count down to zero by 1 second, start timer at 75seconds
var timer = document.querySelector(".timercount");

//hide all other sections until click start
//unhide q&a on click
var intialView = document.querySelector(".initialpage");
var startButton = document.querySelector(".start-btn");


//loop through questions until game over
//hide all other sections until game over then go to endgame screen
//if correct add 5 to scoresdisplay correct, go to next question, if incorrect subtract 5 seconds, display wrong
var qAndA = document.querySelector(".q&a");
var question = document.querySelector(".question");
var answers = document.querySelector(".answers");
var wrongRight = document.querySelectorAll(".wrong-right");
//?question how to put question and answers into an array?

//hide all other sections until submit, then go to highscores
var final = document.querySelector(".final")
//tally userscore here
var userScore = document.querySelector(".userscore")
var userInitials = document.querySelector("#initials-input")
//stores user and score in local storage, move to top 3 if in top 3
//? Question - how to list highscores in order?
var submit = document.querySelector(".submit")
var timer = document.querySelector(".")

//hide all other screens until go back, then start over
var tally = document.querySelector(".tally")
var highScoresList = document.querySelector(".list-of-scores-top3")
var goBackButton = document.querySelector(".goback-btn")
//clear highscores on clear select, remove from local storage
var clear = document.querySelector(".clear")



//initilization function
    //start click here

//start click event

//timer function
    //starts at 75 on start click event
    //counts down by 1 - for loop
    //game ends at 0
    //stays at 0 for all other screens
    //stop timer if last question answered
    //add 5 points for every second left on timer

//correct answer click event
//wrong answer click event
    //subtract 5 seconds from timer for wrong answers

//loop through q&a function
    //place timer loop in here
    //place right and wrong click events here


//submit stores initials and password click event

//display highscores function

//endgame function

//clear highscores click event

//hide and show screens

//highscore link event

