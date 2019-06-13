function reset() {
  for (let i = 0; i < 7; i++) {
    $("#game-board").append('<div id="A' + i + '" class="empty"></div>');
  }

  for (let i = 0; i < 7; i++) {
    $("#game-board").append('<div id="B' + i + '" class="empty"></div>');
  }

  for (let i = 0; i < 7; i++) {
    $("#game-board").append('<div id="C' + i + '" class="empty"></div>');
  }

  for (let i = 0; i < 7; i++) {
    $("#game-board").append('<div id="D' + i + '" class="empty"></div>');
  }

  for (let i = 0; i < 7; i++) {
    $("#game-board").append('<div id="E' + i + '" class="empty"></div>');
  }

  for (let i = 0; i < 7; i++) {
    $("#game-board").append('<div id="F' + i + '" class="empty"></div>');
  }
}
reset();

let player1Turn = true;
const spaces = document.querySelectorAll(".empty");

// Make a move function
// If player1turn is true, change class to red and make player1turn false
// if player1Turn is false, change class to black and make player1Turn true


spaces.forEach(space => space.addEventListener("click", function() {
    space.classList.remove("empty");
    if (player1Turn === true) {
      space.classList.add("red");
      player1Turn=false
    } else {
        space.classList.add("black");
        player1Turn=true
    }
  })
);
