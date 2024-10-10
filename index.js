function randomDice() {
    var min = 1;
    var max = 7;

    // Randomize the first dice and return the value
    function randomNumber1(min, max) {
        var rand1 = Math.floor(Math.random() * (max - min) + min);
        var imgSource = "./images/dice" + rand1 + ".png"; // Dynamically set the image source
        document.querySelector("img.img1").setAttribute("src", imgSource);
        return rand1; // Return the random value
    }

    // Randomize the second dice and return the value
    function randomNumber2(min, max) {
        var rand2 = Math.floor(Math.random() * (max - min) + min);
        var imgSource = "./images/dice" + rand2 + ".png"; // Dynamically set the image source
        document.querySelector("img.img2").setAttribute("src", imgSource);
        return rand2; // Return the random value
    }

    // Compare the two random values and display the winner
    function compare(rand1, rand2) {
        if (rand1 < rand2) {
            document.querySelector("h1").innerHTML = "Player 2 Wins!🚩";
        } else if (rand2 < rand1) {
            document.querySelector("h1").innerHTML = "🚩Player 1 Wins!";
        } else {
            document.querySelector("h1").innerHTML = "Draw!";
        }
    }

    // Get the random values for both dice
    var rand1 = randomNumber1(min, max);
    var rand2 = randomNumber2(min, max);

    // Compare the random values to determine the winner
    compare(rand1, rand2);
}

// Call the randomDice function to roll the dice
randomDice() ;
