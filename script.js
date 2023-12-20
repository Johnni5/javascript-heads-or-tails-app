let score = JSON.parse(localStorage.getItem('score')) || {
  headsWins: 0,
  tailsWins: 0,
};

function resetScore() {
  score.headsWins = 0;
  document.getElementById("showScoreHeadsWins").innerHTML = 'Heads Win: ' + '';
  score.tailsWins = 0;
  document.getElementById("showScoreTailsWins").innerHTML = 'Tails Win: ' + '';
  localStorage.removeItem('score');
  document.getElementById("resetScoreText").innerHTML = 'Score was reset';
};

function playGame(btnClick) {
  document.getElementById("resetScoreText").innerHTML = '';
  const btnHeads = document.getElementById("btnHeads");
  const btnTails = document.getElementById("btnTails");
  let num1 = Math.random();

  document.getElementById("actNum").innerHTML = num1;

  if (btnClick === 'heads' && num1 < 0.5) {
    score.headsWins++;
    document.getElementById("showScoreHeadsWins").innerHTML = 'Heads Win: ' + score.headsWins;
  } else if (btnClick === 'tails' && num1 >= 0.5) {
    score.tailsWins++;
    document.getElementById("showScoreTailsWins").innerHTML = 'Tails Win: ' + score.tailsWins;
  }

  localStorage.setItem('score', JSON.stringify(score));
  console.log(score);
} 
