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


