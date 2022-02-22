var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function computerPlay(max) {
    if (max === void 0) { max = 3; }
    var choiceArr = ['rock', 'paper', 'scissors'];
    var compRandNum = Math.floor(Math.random() * max);
    var compChoice = choiceArr[compRandNum];
    return compChoice;
}
var state = {
    playerSelection: '',
    compSelection: ''
};
var scoreState = {
    playerScore: 0,
    compScore: 0,
    tie: 0
};
function playRound(_state) {
    var state_ = __assign({}, _state);
    var isPlayerWinner = true;
    if (state_.playerSelection === state_.compSelection) {
        return 'tie';
    }
    switch (state_.playerSelection) {
        case 'rock':
            if (state_.compSelection === 'scissors') {
                isPlayerWinner = true;
            }
            else {
                isPlayerWinner = false;
            }
            break;
        case 'paper':
            if (state_.compSelection === 'rock') {
                isPlayerWinner = true;
            }
            else {
                isPlayerWinner = false;
            }
            break;
        case 'scissors':
            if (state_.compSelection === 'paper') {
                isPlayerWinner = true;
            }
            else {
                isPlayerWinner = false;
            }
            break;
        default:
            console.log("hmmm shouldn't see this...");
    }
    return isPlayerWinner ? 'player' : 'comp';
}
var gameWinner = document.querySelector('.winner');
var rockBttn = document.querySelector('.rock');
var rockWinner = rockBttn.addEventListener('click', function () {
    state.playerSelection = 'rock';
    state.compSelection = computerPlay();
    var winner = playRound(state);
    if (winner === 'tie') {
        scoreState.tie++;
        console.log(scoreState);
    }
    if (winner === 'player') {
        scoreState.playerScore++;
        console.log(scoreState);
    }
    else if (winner === 'comp') {
        scoreState.compScore++;
        console.log(scoreState);
    }
    if (scoreState.playerScore === 5) {
        gameWinner.textContent = 'Congrats! You won!';
        //reset
        scoreState.playerScore = 0;
        scoreState.compScore = 0;
        scoreState.tie = 0;
    }
    else if (scoreState.compScore === 5) {
        gameWinner.textContent = 'Oh no! Computer won...';
        //reset
        scoreState.playerScore = 0;
        scoreState.compScore = 0;
        scoreState.tie = 0;
    }
    else if (scoreState.tie === 5) {
        gameWinner.textContent = 'Tie! How about another round?';
        //reset
        scoreState.playerScore = 0;
        scoreState.compScore = 0;
        scoreState.tie = 0;
    }
});
var paperBttn = document.querySelector('.paper');
paperBttn.addEventListener('click', function () {
    state.playerSelection = 'paper';
    state.compSelection = computerPlay();
    var winner = playRound(state);
    if (winner === 'tie') {
        scoreState.tie++;
        console.log(scoreState);
    }
    if (winner === 'player') {
        scoreState.playerScore++;
        console.log(scoreState);
    }
    else if (winner === 'comp') {
        scoreState.compScore++;
        console.log(scoreState);
    }
    if (scoreState.playerScore === 5) {
        gameWinner.textContent = 'Congrats! You won!';
        //reset
        scoreState.playerScore = 0;
        scoreState.compScore = 0;
        scoreState.tie = 0;
    }
    else if (scoreState.compScore === 5) {
        gameWinner.textContent = 'Oh no! Computer won...';
        //reset
        scoreState.playerScore = 0;
        scoreState.compScore = 0;
        scoreState.tie = 0;
    }
    else if (scoreState.tie === 5) {
        gameWinner.textContent = 'Tie! How about another round?';
        //reset
        scoreState.playerScore = 0;
        scoreState.compScore = 0;
        scoreState.tie = 0;
    }
});
var scissorsBttn = document.querySelector('.scissors');
scissorsBttn.addEventListener('click', function () {
    state.playerSelection = 'scissors';
    state.compSelection = computerPlay();
    var winner = playRound(state);
    if (winner === 'tie') {
        scoreState.tie++;
        console.log(scoreState);
    }
    if (winner === 'player') {
        scoreState.playerScore++;
        console.log(scoreState);
    }
    else if (winner === 'comp') {
        scoreState.compScore++;
        console.log(scoreState);
    }
    if (scoreState.playerScore === 5) {
        gameWinner.textContent = 'Congrats! You won!';
        //reset
        scoreState.playerScore = 0;
        scoreState.compScore = 0;
        scoreState.tie = 0;
    }
    else if (scoreState.compScore === 5) {
        gameWinner.textContent = 'Oh no! Computer won...';
        //reset
        scoreState.playerScore = 0;
        scoreState.compScore = 0;
        scoreState.tie = 0;
    }
    else if (scoreState.tie === 5) {
        gameWinner.textContent = 'Tie! How about another round?';
        //reset
        scoreState.playerScore = 0;
        scoreState.compScore = 0;
        scoreState.tie = 0;
    }
});
//~~Logic from the first part~~
//
// function playerPlay() {
// 	let playerSelection = prompt(
// 		" Hi! Enter 'rock' or 'paper' or 'scissors'! "
// 	).toLowerCase()
// 	return playerSelection
// }
//
// function game(
// 	_playRoundFN: typeof playRound,
// 	state_.playerSelectionFN: typeof playerPlay,
// 	state_.compSelectionFN: typeof computerPlay
// ) {
// 	var playerScore = 0
// 	var computerScore = 0
//
// 	for (let i = 1; i <= 5; i++) {
// 		var winner = _playRoundFN(state_.playerSelectionFN, state_.compSelectionFN)
// 		switch (winner) {
// 			case 'player wins':
// 				playerScore++
// 				console.log(`round ${i}: player wins, score: ${playerScore}`)
// 				break
// 			case 'comp wins':
// 				computerScore++
// 				console.log(`round ${i}: comp wins, score: ${computerScore}`)
// 				break
// 			default:
// 				console.log('hmm tie')
// 		}
// 	}
// }
//
// game(playRound, playerPlay, computerPlay)
