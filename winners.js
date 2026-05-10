let list = [
  "John Doe - R100 Winner",
  "Sarah M - R200 Winner",
  "Lucky Draw - R500 Winner"
];

document.getElementById("winners").innerHTML =
  list.map(w => "<p>" + w + "</p>").join("");
