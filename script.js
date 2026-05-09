let users = JSON.parse(localStorage.getItem("users")) || [];
let revenue = users.length * 30;

// JOIN DRAW
function joinDraw(){

let name = document.getElementById("name").value.trim();
let ref = document.getElementById("ref").value.trim();

if(name === "") return alert("Enter name");

if(users.includes(name)){
return alert("Already entered");
}

users.push(name);
localStorage.setItem("users", JSON.stringify(users));

document.getElementById("ticketInfo").innerText =
"🎫 Ticket #" + Math.floor(100000 + Math.random()*900000);

document.getElementById("name").value="";
document.getElementById("ref").value="";

render();
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

}

// WINNER
function pickWinner(){

if(users.length===0){
alert("No users");
return;
}

let winner = users[Math.floor(Math.random()*users.length)];

document.getElementById("winnerBox").innerHTML =
"🏆 WINNER: " + winner;

}

// SHARE
function share(){

let link = window.location.href;

window.open(
"https://wa.me/?text=Join%20Community%20Draw:%20" + link,
"_blank"
);

}

// ADMIN FUNCTIONS
function clearAll(){
localStorage.clear();
alert("System Reset");
location.reload();
}

function exportData(){
alert(JSON.stringify(users));
}

render();
