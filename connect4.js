function buildBoard() {
  for (let col = 0; col < 7; col++) {
    $("#game-board").append(
      '<div id="A' +
        col +
        '" class="space empty" data-column="' +
        col +
        '"></div>'
    );
  }

  for (let col = 0; col < 7; col++) {
    $("#game-board").append(
      '<div id="B' +
        col +
        '" class="space empty" data-column="' +
        col +
        '"></div>'
    );
  }

  for (let col = 0; col < 7; col++) {
    $("#game-board").append(
      '<div id="C' +
        col +
        '" class="space empty" data-column="' +
        col +
        '")></div>'
    );
  }

  for (let col = 0; col < 7; col++) {
    $("#game-board").append(
      '<div id="D' +
        col +
        '" class="space empty" data-column="' +
        col +
        '")></div>'
    );
  }

  for (let col = 0; col < 7; col++) {
    $("#game-board").append(
      '<div id="E' +
        col +
        '" class="space empty" data-column="' +
        col +
        '")></div>'
    );
  }

  for (let col = 0; col < 7; col++) {
    $("#game-board").append(
      '<div id="F' +
        col +
        '" class="space empty" data-column="' +
        col +
        '")></div>'
    );
  }
}

buildBoard();

// starting variables

let isPlayer1Turn = true;
let playerWin = false;
let board = [
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0]
];

// rules and controls button functionality
let rules = document.getElementById("rules");
rules.addEventListener("click", function() {
  Swal.fire(
    "Rules",
    "To win Combine 3 & 1 you must be the first player to get four of your colored checkers in a row either horizontally, vertically or diagonally. The first player to score 3 points wins the game!",
    "question"
  );
});

let controls = document.getElementById("controls");
controls.addEventListener(`click`, function() {
  Swal.fire(
    "Controls",
    "To place a checker, click anywhere within the column you want to take your move",
    "question"
  );
});

// event listener for mouseover/out to select the move
document.querySelector("#game-board").addEventListener("mouseover", function(evt) {
  // console.log('mouseover')
  // let clicked = false;
  let column = document.querySelectorAll(
    `[data-column="${evt.target.dataset.column}"]`
  );
  for (let i = 0; i <= column.length - 1; i++) {
    if (column[i].classList.contains("empty")) {
      // column[i].classList.remove("empty");
      column[i].classList.add(`${isPlayer1Turn ? "red-move" : "black-move"}`);
    }
    return;
  }
})

// // mouseout
document.querySelector("#game-board").addEventListener("mouseout", function(evt) {
  // console.log('mouseout')
  let column = document.querySelectorAll(
    `[data-column="${evt.target.dataset.column}"]`
  );
  for (let i = 0; i <= column.length - 1; i++) {
    if (column[i].classList.contains("red-move") || column[i].classList.contains("black-move")) {
      column[i].classList.remove("red-move");
      column[i].classList.remove("black-move");
      // column[i].classList.add('empty');
    }
    break;
  }
})

// populate board matrix with indicator of which spaces are played by each player
// with each move, check for a win and then reset the board for the next round

document.querySelector("#game-board").addEventListener("click", function(evt) {
  console.log('click')
  let column = document.querySelectorAll(
    `[data-column="${evt.target.dataset.column}"]`
  );
  for (let i = column.length - 1; i >= 0; i--) {
    if (column[i].classList.contains("empty")) {
      column[i].classList.remove("empty");
      column[i].classList.add(`${isPlayer1Turn ? "black" : "red"}`);
      board[i][parseInt(evt.target.dataset.column)] = isPlayer1Turn ? "2" : "1";
      console.log(board);
        checkHorizontal();
        checkVertical();
        checkDiagonalTL();
        checkDiagonalTR();
      if (playerWin === true) {
        reset();
      }
      //   if all spaces are full, alert "Tie Game" Then reset
      if (document.getElementsByClassName("empty").length === 0) {
        Swal.fire("Tie Game!");
        reset();
      }
      return;
    }
  }
});




// change style of player icon in header and change boolean for isPlayer1turn

const spaces = document.querySelectorAll(".empty");
spaces.forEach(space =>
  space.addEventListener("click", function() {
    if (isPlayer1Turn === true) {
      isPlayer1Turn = false;
      document.getElementById("player1").classList.remove("activePlayer");
      document.getElementById("player2").classList.add("activePlayer");
    } else {
      isPlayer1Turn = true;
      document.getElementById("player2").classList.remove("activePlayer");
      document.getElementById("player1").classList.add("activePlayer");
    }
  })
);

// Add Point to player score on win (test with each move)

function addPoint() {
  let player1Score = $("#player1 .score").text();
  let player2Score = $("#player2 .score").text();

  if (isPlayer1Turn === false) {
    player1Score = parseInt(player1Score) + 1;
    $("#player1 .score").text(player1Score);
    if (parseInt(player1Score) === 3) {
      Swal.fire("Player 1 Wins The Game!!");
      $("#player1 .score").text("00");
      $("#player2 .score").text("00");
    }
  } else {
    player2Score = parseInt(player2Score) + 1;
    $("#player2 .score").text(player2Score);
    if (parseInt(player2Score) === 3) {
      Swal.fire("Player 2 Wins The Game!!");
      $("#player1 .score").text("00");
      $("#player2 .score").text("00");
    }
  }
}

// Win condition: if 4 in a row, alert 1 person winner and add point to score
//need a for loop to check each individual solution

//if horizontal win, alert for winner, and add a point. Then Reset the board.

function checkHorizontal() {
  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[row].length - 3; col++) {
      if (
        board[row][col] != `0` &&
        board[row][col] == board[row][col + 1] &&
        board[row][col] == board[row][col + 2] &&
        board[row][col] == board[row][col + 3]
      ) {
        if (isPlayer1Turn === true) {
          Swal.fire("Player 2 Won This Round!!");
        } else {
          Swal.fire("Player 1 Won This Round!!");
        }
        addPoint();
        playerWin = true;
      }
    }
  }
}

// if vertical win, alert for winner, and add a point. Then Reset the board.

function checkVertical() {
  for (let col = 0; col < board[0].length; col++) {
    for (let row = 0; row < board.length - 3; row++) {
      if (
        board[row][col] != `0` &&
        board[row][col] == board[row + 1][col] &&
        board[row][col] == board[row + 2][col] &&
        board[row][col] == board[row + 3][col]
      ) {
        if (isPlayer1Turn === true) {
          Swal.fire("Player 2 Won This Round!!");
        } else {
          Swal.fire("Player 1 Won This Round!!");
        }
        addPoint();
        playerWin = true;
      }
    }
  }
}

//if diagonal win, alert for winner, and add a point. Then Reset the board.

// one direction
function checkDiagonalTL() {
  for (let row = 0; row < board.length - 3; row++) {
    for (let col = 0; col < board[row].length - 3; col++) {
      if (
        board[row][col] != `0` &&
        board[row][col] == board[row + 1][col + 1] &&
        board[row][col] == board[row + 2][col + 2] &&
        board[row][col] == board[row + 3][col + 3]
      ) {
        if (isPlayer1Turn === true) {
          Swal.fire("Player 2 Won This Round!!");
        } else {
          Swal.fire("Player 1 Won This Round!!");
        }
        addPoint();
        playerWin = true;
      }
    }
  }
}

//other direction

function checkDiagonalTR() {
  for (let row = 0; row < board.length - 3; row++) {
    for (let col = 3; col < board[row].length; col++) {
      if (
        board[row][col] != `0` &&
        board[row][col] == board[row + 1][col - 1] &&
        board[row][col] == board[row + 2][col - 2] &&
        board[row][col] == board[row + 3][col - 3]
      ) {
        if (isPlayer1Turn === true) {
          Swal.fire("Player 2 Won This Round!!");
        } else {
          Swal.fire("Player 1 Won This Round!!");
        }
        addPoint();
        playerWin = true;
      }
    }
  }
}

// board reset function

let boardSpace = document.querySelectorAll(".space");

function reset() {
  board = [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0]
  ];

  let redSpaces = document.querySelectorAll(".red");
  let blackSpaces = document.querySelectorAll(".black");

  boardSpace.forEach(space => space.classList.add("empty"));
  redSpaces.forEach(redSpace => redSpace.classList.remove("red"));
  blackSpaces.forEach(blackSpace => blackSpace.classList.remove("black"));

  playerWin = false;
}
