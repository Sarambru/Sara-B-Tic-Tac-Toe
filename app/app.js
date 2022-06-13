// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
// telling the file where to look for what we're importing
const authEvents = require('./events')
$(() => {
  // your JS code goes here

  $('#sign-up-form').on('submit', authEvents.onSignUp)
  $('#log-in-form').on('submit', authEvents.onSignIn)
  $('#sign-out').on('click', authEvents.onSignOut)
})
// game JS
// declare variables
const statusDisplay = document.querySelector('.game--status')

let gameActive = true
// store current player
let currentPlayer = 'X'
// store game state to track clicked cells and validate game
let gameState = ['', '', '', '', '', '', '', '', '']

// message variables
const winningMessage = () => `Player ${currentPlayer} has won!`
const drawMessage = () => 'Game ended in a draw!'
const currentPlayerTurn = () => `It's ${currentPlayer}'s turn`

statusDisplay.innerHTML = currentPlayerTurn()
// winning condition array
const winningConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]

function handleCellPlayed (clickedCell, clickedCellIndex) {
  gameState[clickedCellIndex] = currentPlayer
  clickedCell.innerHTML = currentPlayer
}

function handlePlayerChange () {
  currentPlayer = currentPlayer === 'X' ? 'O' : 'X'
  statusDisplay.innerHTML = currentPlayerTurn()
}

// for loop
// check if game state array matches winning conditions

function handleResultValidation () {
  let roundWon = false
  for (let i = 0; i <= 7; i++) {
    const winCondition = winningConditions[i]
    let a = gameState[winCondition[0]]
    let b = gameState[winCondition[1]]
    let c = gameState[winCondition[2]]
    if (a === '' || b === '' || c === '') {
      continue
    }
    if (a === b && b === c) {
      roundWon = true
      break
    }
  }
  //  results display
  if (roundWon) {
    statusDisplay.innerHTML = winningMessage()
    gameActive = false
    return
  }

  let roundDraw = !gameState.includes('')
  if (roundDraw) {
    statusDisplay.innerHTML = drawMessage()
    gameActive = false
    return
  }

  handlePlayerChange()
}

function handleCellClick (clickedCellEvent) {
  const clickedCell = clickedCellEvent.target
  const clickedCellIndex = parseInt(
    clickedCell.getAttribute('data-cell-index')
  )

  if (gameState[clickedCellIndex] !== '' || !gameActive) {
    return
  }

  handleCellPlayed(clickedCell, clickedCellIndex)
  handleResultValidation()
}

// new game function
function handleRestartGame () {
  gameActive = true
  currentPlayer = 'X'
  gameState = ['', '', '', '', '', '', '', '', '']
  statusDisplay.innerHTML = currentPlayerTurn()
  document.querySelectorAll('.cell').forEach((cell) => (cell.innerHTML = ''))
}

// even listeners to make each cell clickable and create new game
document.querySelectorAll('.cell').forEach((cell) => cell.addEventListener('click', handleCellClick))
document.querySelector('.game--restart').addEventListener('click', handleRestartGame)
