//create a game where you start with any random game Number. Ask the user to keep guessing the game number until the user enters correct value.

//(here it is a game where we will have a one number and ask for user to guess it until they give you correct answer it asks again and again)

let num=15;
let usernum=prompt("Guess the Number:");
//now we will use an while loop beacuse we dont know at any many loops the user may guess the answer
//and that loop continues until the user guesses correct answer
while(usernum!=num){
    prompt("You entered the wrong number.Guess again:");
}
prompt("congratulations,you have entered the right number");
