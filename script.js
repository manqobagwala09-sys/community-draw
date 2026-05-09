let users = JSON.parse(localStorage.getItem("users")) || [];

// JOIN SYSTEM (clean + mobile optimized)
function joinDraw(){

let name = document.getElementById("name").value.trim();

if(name === ""){
alert("Please enter your name");
return;
}

if(users.includes(name)){
alert("Already entered");
return;
}

users.push(name);
localStorage.setItem("users", JSON.stringify(users));

// ticket
let ticket = Math.floor(100000 + Math.random() * 900000);

document.getElementById("ticketInfo").innerHTML =
"🎫 Entry Confirmed | Ticket #" + ticket;

document.getElementById("name").value = "";

render();

}

// DISPLAY USERS
function render(){

let list = document.getElementById("userList");
if(!list) return;

list.innerHTML = "";

users.forEach((u,i)=>{
let li = document.createElement("li");
li.innerText = (i+1) + ". " + u;
list.appendChild(li);
});

}

// WINNER SYSTEM
function pickWinner(){

if(users.length === 0){
alert("No entries yet");
return;
}

let winner = users[Math.floor(Math.random() * users.length)];

document.getElementById("winnerBox").innerHTML =
"🏆 WINNER: " + winner;

}

// INIT
render();
