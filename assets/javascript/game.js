$(document).ready(function () {

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
    // var totalScore = 0;
    // var num1 = 0;
    // var num2 = 0;
    var randGemVal = 0;
    var gemVal = 0;
    // var gemArr = [];
    var gemImage;
    var randNum = 0;




    displayGame();
    if (total === randNum) {
        getWins();
    }
    else {
        startGame();
    }


    function displayGame() {

        getRandNum(randNumMin, randNumMax);
        $("#win").append(numWins);
        $("#loss").append(numLoss);
        $("#totalScore").append(total);

    }

    function startGame() {
        // We are going to generate 4 gems, each has a different "random" value for when it is clicked
        for (var x = 0; x < 4; x++) {
            gemImage = $("<img>");  //assign all img tags to gemImage
            randGemVal = getRandGemVal(gemMin, gemMax);  //calls method & assigns value to randGemNum
            gemImage.attr('data-gem-value', randGemVal);  //create gemImage attr: datat-gem-value & assign randGemVal
            gemImage.attr('src', "./assets/images/gem_green-200x200.jpg")
            $("#gems").append(gemImage);

            gemImage.on('click', function () {
                gemVal = $(this).attr('data-gem-value');
                console.log("You clicked a gem " + gemVal);

                // console.log("total before getTotal(): " + total);
                total = parseInt(total);
                gemVal = parseInt(gemVal);

                total = getTotal(total, gemVal);
                console.log("total after getTotal(): " + total);
                $("#totalScore").text(total);

                if (total === randNum) {
                    getWins();
                    getRandNum(randNumMin, randNumMax);
                    console.log("Winner! Click gem to play again.");

                }
                else if (total > randNum) {
                    getLoss();
                    console.log("randMin " + randNumMin + " randMax " + randNumMax);
                    getRandNum(randNumMin, randNumMax);
                    resetGame();

                }
            })
        }
    }





    function getRandGemVal(gemMin, gemMax) {
        return Math.floor(Math.random() * (gemMax - gemMin) + 1) + gemMin;
    }

    function getRandNum(randNumMin, RandNumMax) {
        randNum = Math.floor(Math.random() * (RandNumMax - randNumMin) + 1) + randNumMin;
        $("#randomNumber").text(randNum);
        console.log("randNum in getRandNum(): " + randNum);
    }

    function getTotal(total, gemVal) {
        total += gemVal;
        // console.log("gemVal inside getTotal() " + gemVal);
        // console.log("total inside getTotal() " + total);
        return total;

    }
    function getWins() {
        numWins++;
        $("#win").append(numWins);

    }

    function getLoss() {
        numLoss++;
        $("#loss").text(numLoss);
        console.log("BUST! Click any gem to play again.");
        
    }
    function resetGame() {
        total = 0 ;
        $("#totalScore").text(total);
        console.log("total inside getLoss(): " + total);
    }


});  //closes $(document).ready