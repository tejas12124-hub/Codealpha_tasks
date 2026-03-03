function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  fetch("/api/users/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password })
  })
    .then(res => res.json())
    .then(data => {
      if (data.userId) {
        localStorage.setItem("userId", data.userId);

        alert("Login successful");
        window.location.href = "/";
      } else {
        alert(data.message);
      }
    });
}
