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


let player1Turn = true;

document.querySelector("#game-board").addEventListener("click", function(evt) {
  let column = document.querySelectorAll(
    `[data-column="${evt.target.dataset.column}"]`
  );
    for (let i = column.length - 1; i >= 0; i--) {
      if ((column[i].className === "empty")) {
        column[i].classList.remove("empty");
        column[i].classList.add(`${player1Turn ? "black" : "red"}`);
        break;
        console.log(column[i])
      }
  }
});

const spaces = document.querySelectorAll(".empty");

spaces.forEach(space =>
  space.addEventListener("click", function() {
    if (player1Turn === true) {
      player1Turn = false;
      document.getElementById("player1").classList.remove("activePlayer");
      document.getElementById("player2").classList.add("activePlayer");
    } else {
      player1Turn = true;
      document.getElementById("player2").classList.remove("activePlayer");
      document.getElementById("player1").classList.add("activePlayer");
    }
  })
);


// break up player move functions into smaller functions
