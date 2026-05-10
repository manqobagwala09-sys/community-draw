function pay() {
  let user = JSON.parse(localStorage.getItem("user"));

  if (!user) {
    alert("Please register first!");
    window.location.href = "register.html";
    return;
  }

  localStorage.setItem("paid", "true");

  alert("Payment successful (demo)");
  window.location.href = "winners.html";
}
