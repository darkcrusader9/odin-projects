function game(){

    let userScore = 0
    let computerScore = 0
    while(userScore != 5 && computerScore !=5 ){
        let randomNumber1 = Math.floor(Math.random() * 3) + 0
        let rps = ["rock","paper","scissor"]
        let computerChoice = rps[randomNumber1]
        console.log(computerChoice)
        let userChoice = prompt("User Choice")
        userChoice = userChoice.toLowerCase()
        
        if(userChoice === "rock"){
            if(computerChoice === "paper"){
                computerScore++
            }
            else if(computerChoice === "scissor"){
                userScore++
            }

        }
        else if(userChoice === "paper"){
            if(computerChoice === "rock"){
                userScore++         
            }
            else if(computerChoice === "scissor"){
                computerScore++
            }

        }
        else if(userChoice === "scissor"){
            if(computerChoice === "rock"){
                computerScore++
            }
            else if(computerChoice === "paper"){
                userScore++
            }
        }
        else{
            alert("invalid option")
        }
    }
    if(userScore === 5)
        alert("user won")
    else
        alert("computer won")
}
game()