// Rock Paper Scissors Game Logic
document.addEventListener('DOMContentLoaded', function() {
  console.log('Rock Paper Scissors game loaded!');
  
  // Game state
  let playerScore = 0;
  let computerScore = 0;
  
  // DOM elements
  const choiceInput = document.getElementById('choice-input');
  const submitBtn = document.getElementById('submit');
  const resetBtn = document.getElementById('reset');
  
  const gameResultDisplay = document.getElementById('game-result');
  const playerScoreDisplay = document.getElementById('player-score');
  const computerScoreDisplay = document.getElementById('computer-score');
  
  // Game choices
  const choices = ['rock', 'paper', 'scissor'];
  
  // Add event listeners
  submitBtn.addEventListener('click', playGame);
  resetBtn.addEventListener('click', resetGame);
  
  // Allow Enter key to submit
  choiceInput.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
          playGame();
      }
  });
  
  // Generate computer choice
  function getComputerChoice() {
      const randomIndex = Math.floor(Math.random() * choices.length);
      return choices[randomIndex];
  }
  
  // Determine winner
  function determineWinner(playerChoice, computerChoice) {
      if (playerChoice === computerChoice) {
          return 'tie';
      }
      
      if (
          (playerChoice === 'rock' && computerChoice === 'scissor') ||
          (playerChoice === 'paper' && computerChoice === 'rock') ||
          (playerChoice === 'scissor' && computerChoice === 'paper')
      ) {
          return 'player';
      } else {
          return 'computer';
      }
  }
  
  // Main game function
  function playGame() {
      const inputValue = choiceInput.value.trim();
      
      // Validate input
      if (inputValue !== '0' && inputValue !== '1' && inputValue !== '2') {
          gameResultDisplay.textContent = 'Please enter 0, 1, or 2';
          return;
      }
      
      // Convert input to choice
      const playerChoice = choices[parseInt(inputValue)];
      const computerChoice = getComputerChoice();
      const winner = determineWinner(playerChoice, computerChoice);
      
      // Update result and score
      if (winner === 'tie') {
          gameResultDisplay.textContent = "Tie!";
      } else if (winner === 'player') {
          gameResultDisplay.textContent = 'You Win!';
          playerScore++;
          playerScoreDisplay.textContent = playerScore;
      } else {
          gameResultDisplay.textContent = 'You Lose!';
          computerScore++;
          computerScoreDisplay.textContent = computerScore;
      }
      
      // Clear input
      choiceInput.value = '';
  }
  
  // Reset game
  function resetGame() {
      playerScore = 0;
      computerScore = 0;
      playerScoreDisplay.textContent = '0';
      computerScoreDisplay.textContent = '0';
      gameResultDisplay.textContent = '';
      choiceInput.value = '';
  }
});