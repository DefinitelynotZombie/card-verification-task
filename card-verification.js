const readline = require('readline');

// Create an interface for reading input from the console
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let cardNumber;
//asking the user for the card details to verify
rl.question("what is your card number? ", (input)=>{
    //saving the input in a variable
    cardNumber = input;
    rl.close()
    //creating a function that takes the cardNumber as an argument and verifies it
    function verificationOfCard(cardNumber){
        //writing different codes for different card types

        //mastercard starts with either 5 then another digit 1-5 or 2 then followed by the remaining 15 digits
        let masterCardNumber = /^(5[1-5]|2\d)\d{14}$/.test(cardNumber);

        //visa card starts with 4 followed by the remaining 15 digits
        let visaCardNumber = /^4\d{15}$/.test(cardNumber)
        
        //verve card starts with any number but its 18 digits long
        let verveCardNumber = /^\d\d{17}$/.test(cardNumber)
        //verifying which card the inputed number is and returning the card type
        if (masterCardNumber){
            console.log(`this card is a Master card`)

        }else if(visaCardNumber){
            console.log(`this card is a visa card`)

        }else if (verveCardNumber){
            console.log(`this card is a vervecard`)

        }else console.log("verify inputed card details")
    }
    return verificationOfCard(cardNumber);
})

