"use strict";
document.addEventListener('DOMContentLoaded', () => {
    let roundFlag = true;
    const rockBttn = document === null || document === void 0 ? void 0 : document.querySelector('.bttn-rock');
    const paperBttn = document === null || document === void 0 ? void 0 : document.querySelector('.bttn-paper');
    const scissorsBttn = document === null || document === void 0 ? void 0 : document.querySelector('.bttn-scissors');
    const restartBttn = document === null || document === void 0 ? void 0 : document.querySelector('.bttn-restart');
    const playerScore = document === null || document === void 0 ? void 0 : document.querySelector('.td-playerScore');
    const computerScore = document === null || document === void 0 ? void 0 : document.querySelector('.td-compScore');
    const tieScore = document === null || document === void 0 ? void 0 : document.querySelector('.td-tieScore');
    const displayScorePlayer = document === null || document === void 0 ? void 0 : document.querySelector('.displayScore-player');
    const displayScoreComputer = document === null || document === void 0 ? void 0 : document.querySelector('.displayScore-computer');
    const displayScoreWinner = document === null || document === void 0 ? void 0 : document.querySelector('.displayScore-winner');
    const state = {
        playerSelection: '',
        computerSelection: '',
    };
    const scoreCard = {
        player: 0,
        computer: 0,
        tie: 0,
    };
    function displayScore(_state) {
        displayScorePlayer === null
            ? undefined
            : (displayScorePlayer.textContent = `You chose: ${_state.playerSelection}`);
        displayScoreComputer === null
            ? undefined
            : (displayScoreComputer.textContent = `Computer chose: ${_state.computerSelection}`);
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
                displayScoreWinner.textContent = 'Oh no! Computer won!';
            }
            else if (winner === 'tie') {
                displayScoreWinner.textContent = 'There can be only one.';
            }
        }
        roundFlag = false;
    }
    function computerSelection(max = 3) {
        const choiceArr = ['Rock', 'Paper', 'Scissors'];
        const compRandom = Math.floor(Math.random() * max);
        return choiceArr[compRandom];
    }
    function rockSelection() {
        if (roundFlag) {
            const _computerSelection = computerSelection();
            state.playerSelection = 'Rock';
            state.computerSelection = _computerSelection;
            if (_computerSelection === 'Rock') {
                scoreCard.tie === 4 ? displayWinner('tie') : scoreCard.tie++;
            }
            else if (_computerSelection === 'Paper') {
                scoreCard.computer === 4 ? displayWinner('computer') : scoreCard.computer++;
            }
            else {
                scoreCard.player === 4 ? displayWinner('player') : scoreCard.player++;
            }
            scoreKeeping(scoreCard);
            displayScore(state);
        }
    }
    function paperSelection() {
        if (roundFlag) {
            const _computerSelection = computerSelection();
            state.playerSelection = 'Paper';
            state.computerSelection = _computerSelection;
            if (_computerSelection === 'Paper') {
                scoreCard.tie === 4 ? displayWinner('tie') : scoreCard.tie++;
            }
            else if (_computerSelection === 'Scissors') {
                scoreCard.computer === 4 ? displayWinner('computer') : scoreCard.computer++;
            }
            else {
                scoreCard.player === 4 ? displayWinner('player') : scoreCard.player++;
            }
            scoreKeeping(scoreCard);
            displayScore(state);
        }
    }
    function scissorsSelection() {
        if (roundFlag) {
            const _computerSelection = computerSelection();
            state.playerSelection = 'Scissors';
            state.computerSelection = _computerSelection;
            if (_computerSelection === 'Scissors') {
                scoreCard.tie === 4 ? displayWinner('tie') : scoreCard.tie++;
            }
            else if (_computerSelection === 'Rock') {
                scoreCard.computer === 4 ? displayWinner('computer') : scoreCard.computer++;
            }
            else {
                scoreCard.player === 4 ? displayWinner('player') : scoreCard.player++;
            }
            scoreKeeping(scoreCard);
            displayScore(state);
        }
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
