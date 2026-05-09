let users = JSON.parse(localStorage.getItem("users")) || [];
let invites = 0;
let points = 0;

// ================= MAIN SYSTEM =================

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

document.getElementById("ticketInfo").innerText =
"Ticket #" + Math.floor(100000 + Math.random()*900000);

document.getElementById("name").value="";

render();
updateDashboard();

}

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

function pickWinner(){

if(users.length === 0){
alert("No users");
return;
}

let winner = users[Math.floor(Math.random()*users.length)];

document.getElementById("winnerBox").innerText =
"🏆 " + winner;

}

function updateDashboard(){

let total = users.length;
let revenue = total * 30;

document.getElementById("totalUsers").innerText = total;
document.getElementById("estimatedRevenue").innerText = revenue;

}

// ================= GROWTH SYSTEM =================

function generateLinkSafe(){

let link = window.location.origin + "?ref=" + Date.now();

document.getElementById("refLink").value = link;

}

function copyLinkSafe(){

let input = document.getElementById("refLink");

if(!input.value){
alert("Generate link first");
return;
}

navigator.clipboard.writeText(input.value);

alert("Copied");

}

function simulateInviteSafe(){

invites++;

document.getElementById("invites").innerText = invites;

let percent = (invites/5)*100;
if(percent>100) percent=100;

document.getElementById("bar").style.width = percent+"%";

let board = document.getElementById("board");

let li = document.createElement("li");
li.innerText = "Invite #" + invites;

board.appendChild(li);

}

// ================= HUB SYSTEM =================

function addPoint(type){

points++;

document.getElementById("points").innerText = points;

let board = document.getElementById("hubBoard");

let li = document.createElement("li");

if(type==="prediction") li.innerText="⚽ Prediction +1";
if(type==="team") li.innerText="👥 Team +1";
if(type==="reward") li.innerText="🎁 Reward +1";

board.appendChild(li);

}

// ================= PAGE SWITCH =================

function goToPage(page){

document.getElementById("mainPage").style.display="none";
document.getElementById("growthPage").style.display="none";
document.getElementById("hubPage").style.display="none";

if(page==="main") document.getElementById("mainPage").style.display="block";
if(page==="growth") document.getElementById("growthPage").style.display="block";
if(page==="hub") document.getElementById("hubPage").style.display="block";

}

// INIT
render();
updateDashboard();
