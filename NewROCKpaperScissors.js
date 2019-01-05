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
      if (!(userInput === 'rock' || userInput === 'paper' || userInput === 'scissors')) {
        console.log('Bad choice');
        return;
      } /* GUARD PATTERN => UPGRADE: if you have few reasons what should and what souldn't be input just use it intead 
       of if/else. Old version:


    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
      return userInput;
    } else {
      console.log('Bad choice');
    }
  } */
  
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
      computerChoice === 'paper' ? console.log('Computer Won!') : console.log ('USer Won!');
    }
    
    if (userChoice === 'paper') {
      computerChoice === 'scissors' ? console.log('Computer Won!') : console.log ('USer Won!');
    } 
    
    if (userChoice === 'scissors') {
      computerChoice === 'rock' ? console.log('Computer Won!') : console.log ('USer Won!');
    }
  }

  /* All if above has been changed for TERNARY - ealier there were another if/else inside 
  but just with one option what was pointless */
  
  
  
  const playGame = () => {
    const userChoice = getUserChoice('scissors');
    const computerChoice = getComputerChoice();
    console.log(`You threw: + ${userChoice} + Computer threw:  + ${computerChoice}`); // UPGRADED : TEMPLATE STRING INSTEAD OF TWO CONSOLES!
    console.log(determineWinner(userChoice, computerChoice));
  }
  
  console.log(playGame());