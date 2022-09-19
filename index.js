const options = ["rock","paper", "scissors"]

function getComputerChoice(){
    const choice = options[Math.floor(Math.random() * options.length)];
    console.log(choice)
    return choice;
    

}
function checkWinner(playerselection, computerselection){
    if(playerselection == computerselection){
        return "Tie";
    }
    else if(
        (playerselection == "rock" && computerselection == "scissors") ||
        (playerselection == "scissors" && computerselection == "paper") ||
        (playerselection == "paper" && computerselection == "rock")
    ){
        return "Player"
    }
    else{
        return "Computer"
    }
}
function playRound(playerselection, computerselection){
    const result = checkWinner(playerselection, computerselection);
    if(result == "Tie"){
        return "It's a Tie!"
    }
    else if(result == "Player"){
        return `You Win! ${playerselection} beats ${computerselection}`
    }
    else{
        return `You Lose! ${computerselection} beats ${playerselection}`
    }
}
function getPlayerChoice(){
    let validatedInput = false;
    while(validatedInput == false){
        const choice = prompt("Rock Paper Scissors");
        if (choice == null){
            continue
        }
        const choiceInLower = choice.toLowerCase()
        if(options.includes(choiceInLower)){
            validatedInput = true;
            return choiceInLower;
        }
    }
}

function game(){
    let scorePlayer = 0;
    let scoreComputer = 0;
    console.log("Welcome!")
    for (let i=0; i<5; i++){
        const playerselection = getPlayerChoice();
        const computerselection = getComputerChoice();
        console.log(playRound(playerselection,computerselection));
        console.log("---------------")
        if(checkWinner(playerselection, computerselection) == "Player"){
            scorePlayer ++;
        }
        else if (checkWinner(playerselection, computerselection) == "Computer"){
            scoreComputer ++;
        }

    }
    console.log("Game Over")
    if(scorePlayer > scoreComputer){
        console.log("Player is the winner")
    }
    else if (scorePlayer < scoreComputer){
        console.log("Computer is the winner")
    }
    else(
        console.log("It is a tie!.")
    )
}

game()
