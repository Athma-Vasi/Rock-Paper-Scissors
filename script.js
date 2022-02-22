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
function gameWinner(_winner) {
    var winnerText = document.querySelector('.winner');
    var playerCard = document.querySelector('.playerCard');
    playerCard.textContent = scoreState.playerScore.toString();
    var compCard = document.querySelector('.compCard');
    compCard.textContent = scoreState.compScore.toString();
    var tieCard = document.querySelector('.tieCard');
    tieCard.textContent = scoreState.tie.toString();
    if (_winner === 'tie') {
        scoreState.tie++;
        tieCard.textContent = scoreState.tie.toString();
    }
    if (_winner === 'player') {
        scoreState.playerScore++;
        playerCard.textContent = scoreState.playerScore.toString();
    }
    else if (_winner === 'comp') {
        scoreState.compScore++;
        compCard.textContent = scoreState.compScore.toString();
    }
    if (scoreState.playerScore === 5) {
        winnerText.textContent = 'Congrats! You won!';
        //reset
        scoreState.playerScore = 0;
        scoreState.compScore = 0;
        scoreState.tie = 0;
    }
    else if (scoreState.compScore === 5) {
        winnerText.textContent = 'Oh no! Computer won...';
        //reset
        scoreState.playerScore = 0;
        scoreState.compScore = 0;
        scoreState.tie = 0;
    }
    else if (scoreState.tie === 5) {
        winnerText.textContent = 'Tie! How about another round?';
        //reset
        scoreState.playerScore = 0;
        scoreState.compScore = 0;
        scoreState.tie = 0;
    }
}
var rockBttn = document.querySelector('.rock');
var rockWinner = rockBttn.addEventListener('click', function () {
    state.playerSelection = 'rock';
    state.compSelection = computerPlay();
    var winner = playRound(state);
    gameWinner(winner);
});
var paperBttn = document.querySelector('.paper');
paperBttn.addEventListener('click', function () {
    state.playerSelection = 'paper';
    state.compSelection = computerPlay();
    var winner = playRound(state);
    gameWinner(winner);
});
var scissorsBttn = document.querySelector('.scissors');
scissorsBttn.addEventListener('click', function () {
    state.playerSelection = 'scissors';
    state.compSelection = computerPlay();
    var winner = playRound(state);
    gameWinner(winner);
});
