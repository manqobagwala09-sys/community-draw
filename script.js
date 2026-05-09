let users = JSON.parse(localStorage.getItem("users")) || [];
let invites = 0;

// ================= MAIN SYSTEM =================

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
"🎫 Ticket #" + Math.floor(100000 + Math.random()*900000);

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
alert("No users yet");
return;
}

let winner = users[Math.floor(Math.random()*users.length)];

document.getElementById("winnerBox").innerHTML =
"🏆 WINNER: " + winner;

}

// DASHBOARD
function updateDashboard(){

let total = users.length;
let revenue = total * 30;

let t = document.getElementById("totalUsers");
let r = document.getElementById("estimatedRevenue");

if(t) t.innerText = total;
if(r) r.innerText = revenue;

}

// ================= GROWTH SYSTEM =================

// generate referral link
function generateLinkSafe(){

let link = window.location.origin + "?ref=" + Date.now();

document.getElementById("refLink").value = link;

}

// copy link
function copyLinkSafe(){

let input = document.getElementById("refLink");

if(!input.value){
alert("Generate link first");
return;
}

navigator.clipboard.writeText(input.value);

alert("Copied!");

}

// simulate invite system
function simulateInviteSafe(){

invites++;

document.getElementById("invites").innerText = invites;

// progress bar
let percent = (invites / 5) * 100;
if(percent > 100) percent = 100;

document.getElementById("bar").style.width = percent + "%";

// leaderboard
let board = document.getElementById("board");

let li = document.createElement("li");
li.innerText = "Invite #" + invites;

board.appendChild(li);

}

// ================= PAGE SWITCH =================

function goToPage(page){

let main = document.getElementById("mainPage");
let growth = document.getElementById("growthPage");

if(page === "growth"){
main.style.display = "none";
growth.style.display = "block";
}

if(page === "main"){
main.style.display = "block";
growth.style.display = "none";
}

}

// INIT
render();
updateDashboard();
