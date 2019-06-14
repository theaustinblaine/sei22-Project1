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

let isPlayer1Turn = true;

document.querySelector("#game-board").addEventListener("click", function(evt) {
  let column = document.querySelectorAll(
    `[data-column="${evt.target.dataset.column}"]`
  );
  for (let i = column.length - 1; i >= 0; i--) {
    if (column[i].className === "empty") {
      column[i].classList.remove("empty");
      column[i].classList.add(`${isPlayer1Turn ? "black" : "red"}`);
      break;
    }
  }
});

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

let player1Score = $("#player1 .score").text()
let player2Score = $("#player2 .score").text()

function addPoint() {
  if (isPlayer1Turn === true) {
      player1Score = parseInt(player1Score) + 1;
      $("#player1 .score").text(player1Score)
  } else {
      player2Score = parseInt(player2Score) + 1
      $("#player2 .score").text(player2Score)
  }
}

// Win condition: if 4 in a row, alert 1 person winner and add point to score
let board = [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
]

// function to check up and down match
// use the same column, check for consecutive column index

// function to check left to right match
// use same rows, check for ID pattern (A0, A1, A2, A3)
