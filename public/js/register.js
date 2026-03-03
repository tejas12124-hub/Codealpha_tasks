document.addEventListener("DOMContentLoaded", () => {
  console.log("register.js loaded");

  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const registerBtn = document.getElementById("registerBtn");

  if (!nameInput || !emailInput || !passwordInput || !registerBtn) {
    alert("Inputs or button not found");
    return;
  }

  registerBtn.addEventListener("click", () => {
    console.log("Register button clicked");

    if (
      nameInput.value.trim() === "" ||
      emailInput.value.trim() === "" ||
      passwordInput.value.trim() === ""
    ) {
      alert("All fields are required");
      return;
    }

    fetch("/api/users/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: nameInput.value,
        email: emailInput.value,
        password: passwordInput.value
      })
    })
      .then(res => res.json())
      .then(data => alert(data.message))
      .catch(err => console.error(err));
  });
});
