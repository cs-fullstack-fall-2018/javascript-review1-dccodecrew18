/*
make a range of numbers that allows you to print 1 - 100
 */
function main() {
    var enterNO = parseInt(prompt(" Enter a random number."));
    var randomNo = Math.floor(Math.random() * 100);
    while (enterNO >= 1 && enterNO <= 100) {


        if (randomNo< enterNO){
            console.log("The number is higher that was guessed")
        }
        else if (randomNo > enterNO){
            console.log("The number is lower that was guesed")
        }
        else if ( randomNo === enterNO){
            console.log(" They are equal ! Got it !");
            break
        }


    }

}

main();
