// =====================
// 🧠 GLOBAL DATA ENGINE
// =====================

let data = JSON.parse(localStorage.getItem("appData")) || {
users: [],
invites: 0,
points: 0,
history: []
};

function save(){
localStorage.setItem("appData", JSON.stringify(data));
}

// =====================
// 🏠 MAIN SYSTEM (DRAW)
// =====================

function join(){

let name = document.getElementById("name").value.trim();

if(!name){
alert("Enter name");
return;
}

if(data.users.includes(name)){
alert("Already joined");
return;
}

data.users.push(name);
data.history.push("Joined: " + name);

save();

if(document.getElementById("count"))
document.getElementById("count").innerText = data.users.length;

alert("Entry successful ✔");
}

function pick(){

if(data.users.length === 0){
alert("No users yet");
return;
}

let winner = data.users[Math.floor(Math.random()*data.users.length)];

data.history.push("Winner: " + winner);

document.getElementById("winner").innerText =
"🏆 Winner: " + winner;
}

// =====================
// 📊 GROWTH SYSTEM
// =====================

function ref(){

data.invites++;
data.points += 2;

save();

if(document.getElementById("inv"))
document.getElementById("inv").innerText = data.invites;

let link = "https://yourapp.com/?ref=" + data.invites;

document.getElementById("link").value = link;

alert("Referral generated ✔");
}

// =====================
// 🎮 GAME HUB ENGINE
// =====================

function game(type){

let reward = 0;

if(type === "chess"){
reward = 3;
}

if(type === "predict"){
reward = 2;
}

if(type === "fish"){
reward = 1;
}

data.points += reward;
data.history.push(type + " played +" + reward);

save();

alert(type + " played ✔ +" + reward + " points");
}

// =====================
// 📈 LIVE INIT UPDATE
// =====================

function init(){

if(document.getElementById("count"))
document.getElementById("count").innerText = data.users.length;

if(document.getElementById("inv"))
document.getElementById("inv").innerText = data.invites;

if(document.getElementById("points"))
document.getElementById("points").innerText = data.points;
}

init();

// =====================
// 🔁 PAGE NAVIGATION SAFE
// =====================

function goTo(page){

let main = document.getElementById("main");
let growth = document.getElementById("growth");
let hub = document.getElementById("hub");

if(main) main.style.display = "none";
if(growth) growth.style.display = "none";
if(hub) hub.style.display = "none";

if(page === "main" && main) main.style.display = "block";
if(page === "growth" && growth) growth.style.display = "block";
if(page === "hub" && hub) hub.style.display = "block";
  }
