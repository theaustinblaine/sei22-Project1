function reset() {
  for (let col = 0; col < 7; col++) {
    $("#game-board").append(
      '<div id="A' + col + '" class="empty" data-column="' + col + '"></div>'
    );
  }

  for (let col = 0; col < 7; col++) {
    $("#game-board").append(
      '<div id="B' + col + '" class="empty" data-column="' + col + '"></div>'
    );
  }

  for (let col = 0; col < 7; col++) {
    $("#game-board").append(
      '<div id="C' + col + '" class="empty" data-column="' + col + '")></div>'
    );
  }

  for (let col = 0; col < 7; col++) {
    $("#game-board").append(
      '<div id="D' + col + '" class="empty" data-column="' + col + '")></div>'
    );
  }

  for (let col = 0; col < 7; col++) {
    $("#game-board").append(
      '<div id="E' + col + '" class="empty" data-column="' + col + '")></div>'
    );
  }

  for (let col = 0; col < 7; col++) {
    $("#game-board").append(
      '<div id="F' + col + '" class="empty" data-column="' + col + '")></div>'
    );
  }
}

reset();

let board = [
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0]
];

// button functionality
let rules = document.getElementById("rules");
rules.addEventListener("click", function() {
  Swal.fire(
    "Rules",
    "To win Combine 3 & 1 you must be the first player to get four of your colored checkers in a row either horizontally, vertically or diagonally.",
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

let isPlayer1Turn = true;

document.querySelector("#game-board").addEventListener("click", function(evt) {
  let column = document.querySelectorAll(
    `[data-column="${evt.target.dataset.column}"]`
  );
  for (let i = column.length - 1; i >= 0; i--) {
    if (column[i].className === "empty") {
      column[i].classList.remove("empty");
      column[i].classList.add(`${isPlayer1Turn ? "black" : "red"}`);
      board[i][parseInt(evt.target.dataset.column)] = isPlayer1Turn ? "2" : "1";
      console.log(board);
      checkHorizontal();
      checkVertical();
      break;
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

let player1Score = $("#player1 .score").text();
let player2Score = $("#player2 .score").text();

function addPoint() {
  if (isPlayer1Turn === true) {
    player1Score = parseInt(player1Score) + 1;
    $("#player1 .score").text(player1Score);
  } else {
    player2Score = parseInt(player2Score) + 1;
    $("#player2 .score").text(player2Score);
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
        alert("Horizontal Player Win!!");
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
        alert("Vertical Player Win");
      }
    }
  }
}

//if diagonal win, alert for winner, and add a point. Then Reset the board.

//one direction
// for (let row = 0; row < board.length; row++) {
//   for (let col = 0; col < board[row].length; col++) {
//     if (
//       board[row][col] != `0` &&
//       board[row][col] == board[row + 1][col + 1] &&
//       board[row][col] == board[row + 2][col + 2] &&
//       board[row][col] == board[row + 3][col + 3]
//     ) {
//       console.log("Player Win");
//     }
//   }
// }

//other direction
// for (let row = 0; row < board.length; row++) {
//   for (let col = 0; col < board[row].length; col++) {
//     if (
//       board[row][col] != `0` &&
//       board[row][col] == board[row + 1][col - 1] &&
//       board[row][col] == board[row + 2][col - 2] &&
//       board[row][col] == board[row + 3][col - 3]
//     ) {
//       console.log("Player Win");
//     }
//   }
// }
