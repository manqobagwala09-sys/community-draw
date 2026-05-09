let users = [];
let invites = 0;

function join(){
let n = document.getElementById("name").value;
users.push(n);
document.getElementById("count").innerText = users.length;
}

function pick(){
let w = users[Math.floor(Math.random()*users.length)];
document.getElementById("winner").innerText = "Winner: " + w;
}

function ref(){
document.getElementById("link").value =
"https://yourapp.com/?ref=" + Date.now();
}

function goTo(p){
document.getElementById("main").style.display="none";
document.getElementById("growth").style.display="none";
document.getElementById("hub").style.display="none";

document.getElementById(p).style.display="block";
}

function game(type){
alert(type + " system coming next upgrade");
}
