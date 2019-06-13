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

spaces.forEach(space => space.addEventListener("click", function() {
    space.classList.remove("empty");
    if (player1Turn === true) {
      space.classList.add("red");
      player1Turn=false
      document.getElementById('player1').classList.remove('activePlayer')
      document.getElementById('player2').classList.add('activePlayer')
    } else {
        space.classList.add("black");
        player1Turn=true
        document.getElementById('player2').classList.remove('activePlayer')
      document.getElementById('player1').classList.add('activePlayer')
    }
  })
);