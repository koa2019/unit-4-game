//Declare & initialize variables
const randNumMin = 9;
const randNumMax = 120;
const gemMin = 1;
const gemMax = 12;

// var win = 0;
// var loss = 0;
var numWins = 0;
var numLoss = 0;
var total = 0;
var num1 = 0;
var num2 = 0;
var randGemNum = 0;
var gemVal = 0;
var gemArr = [];
var gemImage;
var randomNumber = 0;



$(document).ready(function () {

    displayGame();

    function displayGame() {

        getRandNum(randNumMin, randNumMax);
        $("#win").append(numWins);
        $("#loss").append(numLoss);
        $("#totalScore").append(total);
        assignGemVal();
    }

    function assignGemVal() {
        // We are going to generate 4 gems, each has a different "random" value for when it is clicked
        for (var x = 0; x < 4; x++) {
            gemImage = $("<img>");
            randGemNum = getRandGemNum(gemMin, gemMax);
            gemImage.attr('data-gem-value', randGemNum);
            gemImage.attr('src', "./assets/images/gem_green-200x200.jpg")
            $("#gems").append(gemImage);

            gemImage.on('click', function () {
                console.log("You clicked a gem");
                gemVal = $(this).attr('data-gem-value');
                console.log(gemVal);
            })
        }
    }


    function getRandGemNum(gemMin, gemMax) {
        return Math.floor(Math.random() * (gemMax - gemMin) + 1) + gemMin;
    }

    function getRandNum(randNumMin, RandNumMax) {
        randomNumber = Math.floor(Math.random() * (RandNumMax - randNumMin) + 1) + randNumMin;
        $("#randomNumber").append(randomNumber);
    }

    function getNumWins() {
        numWins++;
    }

    function getNumLoss() {
        numLoss++;
    }



});  //closes $(document).ready