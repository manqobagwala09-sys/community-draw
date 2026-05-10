let winners = [];

function addWinner() {
  let name = document.getElementById("winnerName").value;
  winners.push(name);
  document.getElementById("output").innerHTML =
    "Added: " + name;
}

function pickWinner() {
  if (winners.length === 0) {
    alert("No users yet!");
    return;
  }

  let random = winners[Math.floor(Math.random() * winners.length)];
  document.getElementById("output").innerHTML =
    "Winner: " + random;
}
