const winners = [
  "Sibusiso",
  "Ayanda",
  "Lerato",
  "Thando",
  "Nomusa"
];

function pickWinner(){
  const random =
    winners[Math.floor(Math.random()*winners.length)];

  document.getElementById("winnerBox").innerHTML =
    "Winner: " + random;
}

document.getElementById("joinForm")
.addEventListener("submit", function(e){

  e.preventDefault();

  alert("Registration successful!");
});
