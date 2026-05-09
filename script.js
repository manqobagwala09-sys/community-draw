// ==============================
// 🌍 GLOBAL PLATFORM ENGINE
// ==============================

let state = JSON.parse(localStorage.getItem("platformState")) || {
users: [],
currentUser: null,
invites: 0,
points: 0,
activityLog: []
};

function saveState(){
localStorage.setItem("platformState", JSON.stringify(state));
}

// ==============================
// 🏠 USER SYSTEM (MAIN PAGE)
// ==============================

function join(){

let name = document.getElementById("name").value.trim();

if(!name){
alert("Enter name");
return;
}

if(state.users.includes(name)){
alert("User already exists");
return;
}

state.users.push(name);
state.currentUser = name;

logActivity("User joined: " + name);

saveState();

updateUI();

alert("Welcome " + name);
}

function pickWinner(){

if(state.users.length === 0){
alert("No users available");
return;
}

let winner = state.users[Math.floor(Math.random() * state.users.length)];

logActivity("Winner selected: " + winner);

document.getElementById("winner").innerText = "🏆 " + winner;

saveState();
}

// ==============================
// 📊 GROWTH ENGINE
// ==============================

function generateReferral(){

state.invites++;
state.points += 2;

let link = "https://yourapp.com/?ref=" + state.invites;

document.getElementById("link").value = link;

logActivity("Referral generated");

saveState();

updateUI();
}

// ==============================
// 🎮 GAME / HUB ENGINE
// ==============================

function playGame(type){

let reward = 0;

switch(type){
case "chess":
reward = 3;
break;
case "predict":
reward = 2;
break;
case "fish":
reward = 1;
break;
default:
reward = 1;
}

state.points += reward;

logActivity("Game played: " + type + " +" + reward);

saveState();

updateUI();

alert(type + " completed +" + reward + " points");
}

// ==============================
// 🧠 PLATFORM LOGIC CORE
// ==============================

function logActivity(text){

state.activityLog.push({
text,
time: new Date().toISOString()
});

if(state.activityLog.length > 50){
state.activityLog.shift();
}
}

// ==============================
// 🔄 UI ENGINE
// ==============================

function updateUI(){

if(document.getElementById("count"))
document.getElementById("count").innerText = state.users.length;

if(document.getElementById("inv"))
document.getElementById("inv").innerText = state.invites;

if(document.getElementById("points"))
document.getElementById("points").innerText = state.points;
}

// ==============================
// 🌐 PAGE CONTROLLER
// ==============================

function goTo(page){

document.getElementById("main").style.display = "none";
document.getElementById("growth").style.display = "none";
document.getElementById("hub").style.display = "none";

if(page === "main") document.getElementById("main").style.display = "block";
if(page === "growth") document.getElementById("growth").style.display = "block";
if(page === "hub") document.getElementById("hub").style.display = "block";
}

// ==============================
// 🚀 INIT SYSTEM
// ==============================

updateUI();
