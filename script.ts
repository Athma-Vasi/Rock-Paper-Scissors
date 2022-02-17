function computerPlay(max = 3) {
	let choiceArr = ['rock', 'paper', 'scissors']
	let compRandNum = Math.floor(Math.random() * max)
	let compChoice = choiceArr[compRandNum]
	return compChoice
}

function playerPlay() {
	let playerSelection = prompt(
		" Hi! Enter 'rock' or 'paper' or 'scissors'! "
	).toLowerCase()
	return playerSelection
}

function playRound(
	_playerSelectionFN: typeof playerPlay,
	_computerSelectionFN: typeof computerPlay
) {
	let _playerSelection = _playerSelectionFN()
	let _computerSelection = _computerSelectionFN()
	let isPlayerWinner = true

	if (_playerSelection === _computerSelection) {
		return 'Tie! Go again!'
	}

	switch (_playerSelection) {
		case 'rock':
			if (_computerSelection === 'scissors') {
				isPlayerWinner = true
			} else {
				isPlayerWinner = false
			}
			break
		case 'paper':
			if (_computerSelection === 'rock') {
				isPlayerWinner = true
			} else {
				isPlayerWinner = false
			}
			break
		case 'scissors':
			if (_computerSelection === 'paper') {
				isPlayerWinner = true
			} else {
				isPlayerWinner = false
			}
			break
		default:
			console.log('hmmm')
	}

	return isPlayerWinner ? 'player wins' : 'comp wins'
}

function game(
	_playRoundFN: typeof playRound,
	_playerSelectionFN: typeof playerPlay,
	_computerSelectionFN: typeof computerPlay
) {
	var playerScore = 0
	var computerScore = 0

	for (let i = 1; i <= 5; i++) {
		var winner = _playRoundFN(_playerSelectionFN, _computerSelectionFN)
		switch (winner) {
			case 'player wins':
				playerScore++
				console.log(`round ${i}: player wins, score: ${playerScore}`)
				break
			case 'comp wins':
				computerScore++
				console.log(`round ${i}: comp wins, score: ${computerScore}`)
				break
			default:
				console.log('hmm tie')
		}
	}
}

game(playRound, playerPlay, computerPlay)
