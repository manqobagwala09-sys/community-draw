function registerUser(event) {
  event.preventDefault();

  let name = document.getElementById("name").value;
  let phone = document.getElementById("phone").value;
  let email = document.getElementById("email").value;

  let user = { name, phone, email };

  localStorage.setItem("user", JSON.stringify(user));

  alert("Registered successfully!");
  window.location.href = "payment.html";
}
