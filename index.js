var questList = [];
var answerList = [];
var repeat = false;
var isButtonClick = false;
var isGameOver = false;
var isGameStart = false;

$(document).keypress(function(event) {
    var myKey = event.key;
    if (myKey == 'a' && repeat == false) {
        if (isGameStart == false) {
            levelStart();
        }

    }
    if (repeat != false && isButtonClick == false) {
        isButtonClick = true;
        isGameOver = false;
        levelStart();
    }

});

$(".btn").click(function() {
    if (isGameOver == false) {
        var myButton = $(this).attr('id');
        colorSounds(myButton);
        $("#" + myButton).addClass("pressed");
        setTimeout(function() {
            $("#" + myButton).removeClass("pressed");
        }, 100);
        answerList.push(myButton);
        Comparing();
    }



});

function Comparing() {

    for (var i = 0; i < answerList.length; i++) {


        if (answerList[i] != questList[i]) {

            gameOver();

        }


    }

    if (answerList.length == questList.length) {
        levelStart();
    }
}



function levelStart() {
    isGameStart = true;
    setTimeout(function() {
        answerList.length = 0;
        var a = randomColor();
        colorSounds(a);
        $("#" + a).fadeOut(500).fadeIn(500);
        questList.push(a);
        $("h1").text("level " + questList.length);

    }, 500);


}


function gameOver() {
    colorSounds("wrong");
    isGameOver = true;
    repeat = true;
    isButtonClick = false;
    questList.length = 0;
    $("h1").text("Game Over, press Any key to Restart");
    $("body").addClass("game-over");
    setTimeout(function() {
        $("body").removeClass("game-over");
    }, 200);

}


function randomColor() {
    var n = (Math.random() * 4);
    n = Math.floor(n + 1);

    switch (n) {
        case 1:
            return "green"
            break;
        case 2:
            return "red"
            break;
        case 3:
            return "yellow"
            break;
        case 4:
            return "blue"
            break;

        default:
            break;
    }


}

function colorSounds(mySounds) {

    switch (mySounds) {
        case "green":
            var audio = new Audio("sounds/green.mp3");
            audio.play();
            break;
        case "red":
            var audio = new Audio("sounds/red.mp3");
            audio.play();
            break;
        case "yellow":
            var audio = new Audio("sounds/yellow.mp3");
            audio.play();
            break;
        case "blue":
            var audio = new Audio("sounds/blue.mp3");
            audio.play();
            break;
        case "wrong":
            var audio = new Audio("sounds/wrong.mp3");
            audio.play();
            break;

        default:
            console.log(mySounds);
            break;
    }
}