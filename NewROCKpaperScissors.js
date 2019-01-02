/* Rock paper scissors is a classic two player game. Each player chooses either rock, 
paper, or scissors. The items are compared, and whichever player chooses the more 
powerful item wins.

The possible outcomes are:

Rock destroys scissors.
Scissors cut paper.
Paper covers rock.
If there's a tie, then the game ends in a draw.
Our code will break the game into four parts:

Get the user's choice.
Get the computer's choice.
Compare the two choices and determine a winner. */

const getUserChoice = userInput => {
    userInput = 'paper';
      userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
      return userInput;
    } else {
      console.log('Bad choice');
    }
  }
  
  const getComputerChoice = () => {
    const randomNum = Math.floor(Math.random() * 3);
  switch (randomNum) {
    case 0:
      return 'rock';
    case 1:
      return 'paper';
    case 2:
      return 'scissors';
      
  }
  }
  
  const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
      return 'Tie';
    } 
    
    if (userChoice === 'rock') {
      if (computerChoice === 'paper') {
        return 'Computer Won!';
      } else {
        return 'User Won!';
      }
    }
    
    if (userChoice === 'paper') {
      if (computerChoice === 'scissors') {
        return 'Computer Won!';
      } else {
        return 'User Won!';
      }
    } 
    
    if (userChoice === 'scissors') {
      if (computerChoice === 'rock') {
        return 'Computer Won!' 
      } else {
        return 'User Won!'
      }
    }
  }
  
  
  
  const playGame = () => {
    let userChoice = getUserChoice('scissors');
    let computerChoice = getComputerChoice();
    console.log('You threw: '+ userChoice);
    console.log('Computer threw: ' + computerChoice);
    console.log(determineWinner(userChoice, computerChoice));
  }
  
  console.log(playGame());