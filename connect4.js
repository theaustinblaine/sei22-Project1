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


document.querySelector("#game-board").addEventListener('click', function(evt) {
    let stuff = document.querySelectorAll(`[data-column="${evt.target.dataset.column}"]`) 
    console.log(stuff)
})


let player1Turn = true;
const spaces = document.querySelectorAll(".empty");

spaces.forEach(space =>
  space.addEventListener("click", function() {
    if (player1Turn === true) {
      space.classList.remove("empty");
      space.classList.add("red");
      player1Turn = false;
      document.getElementById("player1").classList.remove("activePlayer");
      document.getElementById("player2").classList.add("activePlayer");
    } else if (space.className == "empty") {
      space.classList.remove("empty");
      space.classList.add("black");
      player1Turn = true;
      document.getElementById("player2").classList.remove("activePlayer");
      document.getElementById("player1").classList.add("activePlayer");
    }
  })
);

// let boardSpace = document.getElementsByClassName("boardSpace");

// Let column0 = []
// for loop running from the bottom up looking for empty space
// would require column to be an array

//push event to bottom-most space of a column that contains 'empty' class

//Set each column to a variable - let the column be the event listener
//run if statements to check if the space at the bottom is empty, else if check the next step, and so on.
//make sure all columns can handle this function

// break up player move functions into smaller functions
