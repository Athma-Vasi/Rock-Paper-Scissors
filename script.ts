document.addEventListener('DOMContentLoaded', () => {
	let roundFlag = true

	type Button = HTMLButtonElement | null
	const rockBttn: Button = document?.querySelector('.bttn-rock')
	const paperBttn: Button = document?.querySelector('.bttn-paper')
	const scissorsBttn: Button = document?.querySelector('.bttn-scissors')
	const restartBttn: Button = document?.querySelector('.bttn-restart')

	type TableRow = HTMLTableRowElement | null
	const playerScore: TableRow = document?.querySelector('.td-playerScore')
	const computerScore: TableRow = document?.querySelector('.td-compScore')
	const tieScore: TableRow = document?.querySelector('.td-tieScore')

	type H3 = HTMLHeadElement | null
	const displayScorePlayer: H3 = document?.querySelector('.displayScore-player')
	const displayScoreComputer: H3 = document?.querySelector('.displayScore-computer')
	const displayScoreWinner: H3 = document?.querySelector('.displayScore-winner')

	type State = {
		playerSelection: string
		computerSelection: string
	}
	const state: State = {
		playerSelection: '',
		computerSelection: '',
	}

	type ScoreCard = {
		player: number
		computer: number
		tie: number
	}
	const scoreCard: ScoreCard = {
		player: 0,
		computer: 0,
		tie: 0,
	}

	function displayScore(_state: State): undefined | void {
		displayScorePlayer === null
			? undefined
			: (displayScorePlayer.textContent = `You chose: ${_state.playerSelection}`)

		displayScoreComputer === null
			? undefined
			: (displayScoreComputer.textContent = `Computer chose: ${_state.computerSelection}`)
	}

	function scoreKeeping(_scoreCard: ScoreCard): undefined | void {
		playerScore === null
			? undefined
			: (playerScore.textContent = _scoreCard.player.toString())

		computerScore === null
			? undefined
			: (computerScore.textContent = _scoreCard.computer.toString())

		tieScore === null ? undefined : (tieScore.textContent = _scoreCard.tie.toString())
	}

	function displayWinner(winner: string): void | undefined {
		displayScorePlayer === null ? undefined : (displayScorePlayer.style.display = 'none')

		displayScoreComputer === null
			? undefined
			: (displayScoreComputer.style.display = 'none')

		if (displayScoreWinner === null) {
			undefined
		} else {
			if (winner === 'player') {
				displayScoreWinner.textContent = 'Congrats! You won! Go on, give it another go!'
			} else if (winner === 'computer') {
				displayScoreWinner.textContent = 'Oh no! Computer won!'
			} else if (winner === 'tie') {
				displayScoreWinner.textContent = 'There can be only one.'
			}
		}
		roundFlag = false
	}

	function computerSelection(max = 3): string {
		const choiceArr = ['Rock', 'Paper', 'Scissors']
		const compRandom = Math.floor(Math.random() * max)
		return choiceArr[compRandom]
	}

	function rockSelection(this: HTMLButtonElement): void {
		if (roundFlag) {
			const _computerSelection = computerSelection()
			state.playerSelection = 'Rock'
			state.computerSelection = _computerSelection

			if (_computerSelection === 'Rock') {
				scoreCard.tie === 4 ? displayWinner('tie') : scoreCard.tie++
			} else if (_computerSelection === 'Paper') {
				scoreCard.computer === 4 ? displayWinner('computer') : scoreCard.computer++
			} else {
				scoreCard.player === 4 ? displayWinner('player') : scoreCard.player++
			}

			scoreKeeping(scoreCard)

			displayScore(state)
		}
	}

	function paperSelection(this: HTMLButtonElement): void {
		if (roundFlag) {
			const _computerSelection = computerSelection()
			state.playerSelection = 'Paper'
			state.computerSelection = _computerSelection

			if (_computerSelection === 'Paper') {
				scoreCard.tie === 4 ? displayWinner('tie') : scoreCard.tie++
			} else if (_computerSelection === 'Scissors') {
				scoreCard.computer === 4 ? displayWinner('computer') : scoreCard.computer++
			} else {
				scoreCard.player === 4 ? displayWinner('player') : scoreCard.player++
			}

			scoreKeeping(scoreCard)

			displayScore(state)
		}
	}

	function scissorsSelection(this: HTMLButtonElement): void {
		if (roundFlag) {
			const _computerSelection = computerSelection()
			state.playerSelection = 'Scissors'
			state.computerSelection = _computerSelection

			if (_computerSelection === 'Scissors') {
				scoreCard.tie === 4 ? displayWinner('tie') : scoreCard.tie++
			} else if (_computerSelection === 'Rock') {
				scoreCard.computer === 4 ? displayWinner('computer') : scoreCard.computer++
			} else {
				scoreCard.player === 4 ? displayWinner('player') : scoreCard.player++
			}

			scoreKeeping(scoreCard)

			displayScore(state)
		}
	}

	function restartGame(this: HTMLButtonElement) {
		window.location.reload()
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

	rockBttn?.addEventListener('click', rockSelection)
	paperBttn?.addEventListener('click', paperSelection)
	scissorsBttn?.addEventListener('click', scissorsSelection)
	restartBttn?.addEventListener('click', restartGame)
})
