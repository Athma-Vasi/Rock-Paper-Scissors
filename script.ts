function computerPlay(max = 3) {
	let choiceArr = ['rock', 'paper', 'scissors']
	let compRandNum = Math.floor(Math.random() * max)
	let compChoice = choiceArr[compRandNum]
	return compChoice
}

type State = {
	playerSelection: string
	compSelection: string
}
const state = {
	playerSelection: '',
	compSelection: '',
}

type ScoreState = {
	playerScore: number
	compScore: number
	tie: number
}
const scoreState = {
	playerScore: 0,
	compScore: 0,
	tie: 0,
}

function playRound(_state: State) {
	const state_ = { ..._state }

	let isPlayerWinner = true

	if (state_.playerSelection === state_.compSelection) {
		return 'tie'
	}

	switch (state_.playerSelection) {
		case 'rock':
			if (state_.compSelection === 'scissors') {
				isPlayerWinner = true
			} else {
				isPlayerWinner = false
			}
			break
		case 'paper':
			if (state_.compSelection === 'rock') {
				isPlayerWinner = true
			} else {
				isPlayerWinner = false
			}
			break
		case 'scissors':
			if (state_.compSelection === 'paper') {
				isPlayerWinner = true
			} else {
				isPlayerWinner = false
			}
			break
		default:
			console.log("hmmm shouldn't see this...")
	}

	return isPlayerWinner ? 'player' : 'comp'
}

function gameWinner(_winner: string) {
	const winnerText = document.querySelector('.winner')

	const playerCard = document.querySelector('.playerCard')
	playerCard.textContent = scoreState.playerScore.toString()

	const compCard = document.querySelector('.compCard')
	compCard.textContent = scoreState.compScore.toString()

	const tieCard = document.querySelector('.tieCard')
	tieCard.textContent = scoreState.tie.toString()

	if (_winner === 'tie') {
		scoreState.tie++
		tieCard.textContent = scoreState.tie.toString()
	}

	if (_winner === 'player') {
		scoreState.playerScore++
		playerCard.textContent = scoreState.playerScore.toString()
	} else if (_winner === 'comp') {
		scoreState.compScore++
		compCard.textContent = scoreState.compScore.toString()
	}

	if (scoreState.playerScore === 5) {
		winnerText.textContent = 'Congrats! You won!'
		//reset
		scoreState.playerScore = 0
		scoreState.compScore = 0
		scoreState.tie = 0
	} else if (scoreState.compScore === 5) {
		winnerText.textContent = 'Oh no! Computer won...'
		//reset
		scoreState.playerScore = 0
		scoreState.compScore = 0
		scoreState.tie = 0
	} else if (scoreState.tie === 5) {
		winnerText.textContent = 'Tie! How about another round?'
		//reset
		scoreState.playerScore = 0
		scoreState.compScore = 0
		scoreState.tie = 0
	}
}

const rockBttn = document.querySelector('.rock')
const rockWinner = rockBttn.addEventListener('click', () => {
	state.playerSelection = 'rock'
	state.compSelection = computerPlay()

	let winner = playRound(state)

	gameWinner(winner)
})

const paperBttn = document.querySelector('.paper')
paperBttn.addEventListener('click', () => {
	state.playerSelection = 'paper'
	state.compSelection = computerPlay()

	let winner = playRound(state)
	gameWinner(winner)
})

const scissorsBttn = document.querySelector('.scissors')
scissorsBttn.addEventListener('click', () => {
	state.playerSelection = 'scissors'
	state.compSelection = computerPlay()

	let winner = playRound(state)
	gameWinner(winner)
})
