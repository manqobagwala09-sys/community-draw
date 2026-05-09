// ===============================
// 🌍 CORE PLATFORM ENGINE
// ===============================

const Platform = {
state: JSON.parse(localStorage.getItem("platform_state")) || {
users: [],
currentUser: null,
points: 0,
invites: 0,
winner: null,
activity: []
},

// SAVE DATA
save(){
localStorage.setItem("platform_state", JSON.stringify(this.state));
},

// LOG SYSTEM
log(text){

this.state.activity.push({
text,
time: new Date().toLocaleString()
});

if(this.state.activity.length > 30){
this.state.activity.shift();
}

this.save();
this.syncUI();
},

// ===============================
// 👤 USER SYSTEM
// ===============================

join(name){

if(!name) return;

if(this.state.users.includes(name)){
this.log("Duplicate user blocked: " + name);
return;
}

this.state.users.push(name);
this.state.currentUser = name;

this.log("User joined: " + name);

this.save();
this.syncUI();
},

// ===============================
// 🏆 DRAW SYSTEM
// ===============================

draw(){

if(this.state.users.length === 0){
this.log("Draw failed: no users");
return null;
}

const winner =
this.state.users[Math.floor(Math.random() * this.state.users.length)];

this.state.winner = winner;

this.log("Winner selected: " + winner);

this.save();
this.syncUI();

return winner;
},

// ===============================
// 🔗 REFERRAL SYSTEM
// ===============================

referral(){

this.state.invites++;

let link = "https://yourapp.com/?ref=" + this.state.invites;

this.log("Referral generated");

this.save();
this.syncUI();

return link;
},

// ===============================
// 🎮 GAME ENGINE
// ===============================

game(type){

let reward = 0;

if(type === "chess") reward = 3;
if(type === "predict") reward = 2;
if(type === "fish") reward = 1;

this.state.points += reward;

this.log(type + " played +" + reward + " points");

this.save();
this.syncUI();

return reward;
},

// ===============================
// 📊 UI SYNC
// ===============================

syncUI(){

if(document.getElementById("users"))
document.getElementById("users").innerText = this.state.users.length;

if(document.getElementById("points"))
document.getElementById("points").innerText = this.state.points;

if(document.getElementById("invites"))
document.getElementById("invites").innerText = this.state.invites;

if(document.getElementById("winner") && this.state.winner)
document.getElementById("winner").innerText = "🏆 " + this.state.winner;
},

// ===============================
// 🚀 INIT SYSTEM
// ===============================

init(){
this.syncUI();
this.log("Platform Engine initialized");
}
};

// AUTO START
Platform.init();
