let users = JSON.parse(localStorage.getItem("users")) || [];

// JOIN DRAW
function joinDraw(){

let name = document.getElementById("name").value.trim();

if(name === ""){
alert("Enter name");
return;
}

if(users.includes(name)){
alert("Already entered");
return;
}

users.push(name);
localStorage.setItem("users", JSON.stringify(users));

document.getElementById("ticketInfo").innerHTML =
"🎫 Entry Confirmed | Ticket #" +
Math.floor(100000 + Math.random()*900000);

document.getElementById("name").value="";

render();
updateDashboard();

}

// RENDER USERS
function render(){

let list = document.getElementById("userList");
if(!list) return;

list.innerHTML="";

users.forEach((u,i)=>{
let li=document.createElement("li");
li.innerText=(i+1)+". "+u;
list.appendChild(li);
});

updateDashboard();

}

// WINNER
function pickWinner(){

if(users.length === 0){
alert("No entries yet");
return;
}

let winner = users[Math.floor(Math.random()*users.length)];

document.getElementById("winnerBox").innerHTML =
"🏆 WINNER: " + winner;

}

// DASHBOARD UPDATE
function updateDashboard(){

let total = users.length;
let revenue = total * 30;

let t = document.getElementById("totalUsers");
let r = document.getElementById("estimatedRevenue");

if(t) t.innerText = total;
if(r) r.innerText = revenue;

}

// INIT
render();
updateDashboard();
