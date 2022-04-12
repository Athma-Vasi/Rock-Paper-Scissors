document.addEventListener('DOMContentLoaded', function () {
    var rockBttn = document === null || document === void 0 ? void 0 : document.querySelector('.bttn-rock');
    var paperBttn = document === null || document === void 0 ? void 0 : document.querySelector('.bttn-paper');
    var scissorsBttn = document === null || document === void 0 ? void 0 : document.querySelector('.bttn-scissors');
    var restartBttn = document === null || document === void 0 ? void 0 : document.querySelector('.bttn-restart');
    var playerScore = document === null || document === void 0 ? void 0 : document.querySelector('.td-playerScore');
    var computerScore = document === null || document === void 0 ? void 0 : document.querySelector('.td-compScore');
    var tieScore = document === null || document === void 0 ? void 0 : document.querySelector('.td-tieScore');
    var displayScorePlayer = document === null || document === void 0 ? void 0 : document.querySelector('.displayScore-player');
    var displayScoreComputer = document === null || document === void 0 ? void 0 : document.querySelector('.displayScore-computer');
    var displayScoreWinner = document === null || document === void 0 ? void 0 : document.querySelector('.displayScore-winner');
    var state = {
        playerSelection: '',
        computerSelection: ''
    };
    var scoreCard = {
        player: 0,
        computer: 0,
        tie: 0
    };
    function displayScore(_state) {
        displayScorePlayer === null
            ? undefined
            : (displayScorePlayer.textContent = "You chose: ".concat(_state.playerSelection));
        displayScoreComputer === null
            ? undefined
            : (displayScoreComputer.textContent = "Computer chose: ".concat(_state.computerSelection));
    }
    function scoreKeeping(_scoreCard) {
        playerScore === null
            ? undefined
            : (playerScore.textContent = _scoreCard.player.toString());
        computerScore === null
            ? undefined
            : (computerScore.textContent = _scoreCard.computer.toString());
        tieScore === null ? undefined : (tieScore.textContent = _scoreCard.tie.toString());
    }
    function displayWinner(winner) {
        state.playerSelection = '';
        state.computerSelection = '';
        scoreCard.player = 0;
        scoreCard.computer = 0;
        scoreCard.tie = 0;
        displayScorePlayer === null ? undefined : (displayScorePlayer.style.display = 'none');
        displayScoreComputer === null
            ? undefined
            : (displayScoreComputer.style.display = 'none');
        if (displayScoreWinner === null) {
            undefined;
        }
        else {
            if (winner === 'player') {
                displayScoreWinner.textContent = 'Congrats! You won! Go on, give it another go!';
            }
            else if (winner === 'computer') {
                displayScoreWinner.textContent = 'Oh no! Computer won! You can do it!';
            }
            else if (winner === 'tie') {
                displayScoreWinner.textContent = 'There can be only one.';
            }
        }
    }
    function computerSelection(max) {
        if (max === void 0) { max = 3; }
        var choiceArr = ['rock', 'paper', 'scissors'];
        var compRandom = Math.floor(Math.random() * max);
        return choiceArr[compRandom];
    }
    function rockSelection() {
        var _computerSelection = computerSelection();
        state.playerSelection = 'rock';
        state.computerSelection = _computerSelection;
        if (_computerSelection === 'rock') {
            scoreCard.tie === 4 ? displayWinner('tie') : scoreCard.tie++;
        }
        else if (_computerSelection === 'paper') {
            scoreCard.computer === 4 ? displayWinner('computer') : scoreCard.computer++;
        }
        else {
            scoreCard.player === 4 ? displayWinner('player') : scoreCard.player++;
        }
        scoreKeeping(scoreCard);
        displayScore(state);
    }
    function paperSelection() {
        var _computerSelection = computerSelection();
        state.playerSelection = 'paper';
        state.computerSelection = _computerSelection;
        if (_computerSelection === 'paper') {
            scoreCard.tie === 4 ? displayWinner('tie') : scoreCard.tie++;
        }
        else if (_computerSelection === 'scissors') {
            scoreCard.computer === 4 ? displayWinner('computer') : scoreCard.computer++;
        }
        else {
            scoreCard.player === 4 ? displayWinner('player') : scoreCard.player++;
        }
        scoreKeeping(scoreCard);
        displayScore(state);
    }
    function scissorsSelection() {
        var _computerSelection = computerSelection();
        state.playerSelection = 'scissors';
        state.computerSelection = _computerSelection;
        if (_computerSelection === 'scissors') {
            scoreCard.tie === 4 ? displayWinner('tie') : scoreCard.tie++;
        }
        else if (_computerSelection === 'rock') {
            scoreCard.computer === 4 ? displayWinner('computer') : scoreCard.computer++;
        }
        else {
            scoreCard.player === 4 ? displayWinner('player') : scoreCard.player++;
        }
        scoreKeeping(scoreCard);
        displayScore(state);
    }
    function restartGame() {
        window.location.reload();
        // state.playerSelection = ''
        // state.computerSelection = ''
        // scoreCard.player = 0
        // scoreCard.computer = 0
        // scoreCard.tie = 0
        // playerScore === null
        // 	? undefined
        // 	: (playerScore.textContent = scoreCard.player.toString())
        // computerScore === null
        // 	? undefined
        // 	: (computerScore.textContent = scoreCard.computer.toString())
        // tieScore === null ? undefined : (tieScore.textContent = scoreCard.tie.toString())
        // displayScorePlayer === null ? undefined : (displayScorePlayer.style.display = '')
        // displayScoreComputer === null ? undefined : (displayScoreComputer.style.display = '')
        // displayScoreWinner === null ? undefined : (displayScoreWinner.style.display = 'none')
    }
    rockBttn === null || rockBttn === void 0 ? void 0 : rockBttn.addEventListener('click', rockSelection);
    paperBttn === null || paperBttn === void 0 ? void 0 : paperBttn.addEventListener('click', paperSelection);
    scissorsBttn === null || scissorsBttn === void 0 ? void 0 : scissorsBttn.addEventListener('click', scissorsSelection);
    restartBttn === null || restartBttn === void 0 ? void 0 : restartBttn.addEventListener('click', restartGame);
});
