function computerPlay(max) {
    if (max === void 0) { max = 3; }
    var choiceArr = ['rock', 'paper', 'scissors'];
    var compRandNum = Math.floor(Math.random() * max);
    var compChoice = choiceArr[compRandNum];
    return compChoice;
}
function playerPlay() {
    var playerSelection = prompt(" Hi! Enter 'rock' or 'paper' or 'scissors'! ").toLowerCase();
    return playerSelection;
}
function playRound(_playerSelectionFN, _computerSelectionFN) {
    var _playerSelection = _playerSelectionFN();
    var _computerSelection = _computerSelectionFN();
    var isPlayerWinner = true;
    if (_playerSelection === _computerSelection) {
        return 'Tie! Go again!';
    }
    switch (_playerSelection) {
        case 'rock':
            if (_computerSelection === 'scissors') {
                isPlayerWinner = true;
            }
            else {
                isPlayerWinner = false;
            }
            break;
        case 'paper':
            if (_computerSelection === 'rock') {
                isPlayerWinner = true;
            }
            else {
                isPlayerWinner = false;
            }
            break;
        case 'scissors':
            if (_computerSelection === 'paper') {
                isPlayerWinner = true;
            }
            else {
                isPlayerWinner = false;
            }
            break;
        default:
            console.log('hmmm');
    }
    return isPlayerWinner ? 'player wins' : 'comp wins';
}
function game(_playRoundFN, _playerSelectionFN, _computerSelectionFN) {
    var playerScore = 0;
    var computerScore = 0;
    for (var i = 1; i <= 5; i++) {
        var winner = _playRoundFN(_playerSelectionFN, _computerSelectionFN);
        switch (winner) {
            case 'player wins':
                playerScore++;
                console.log("round ".concat(i, ": player wins, score: ").concat(playerScore));
                break;
            case 'comp wins':
                computerScore++;
                console.log("round ".concat(i, ": comp wins, score: ").concat(computerScore));
                break;
            default:
                console.log('hmm tie');
        }
    }
}
game(playRound, playerPlay, computerPlay);
