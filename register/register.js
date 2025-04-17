document.getElementById("togglePassword").addEventListener("click", function () {
    const passwordInput = document.getElementById("password");
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
    } else {
        passwordInput.type = "password";
    }
});

document.getElementById("toggle-password").addEventListener("click", function () {
    const confirmPasswordInput = document.getElementById("repeat-password");
    if (confirmPasswordInput.type === "password") {
        confirmPasswordInput.type = "text";
    } else {
        confirmPasswordInput.type = "password";
    }
});

const loginButton = document.getElementById("button");

async function register() {
  const Email = document.getElementById("email").value;
  const Username = document.getElementById("username").value;
  const Password = document.getElementById("password").value;
  const ConfirmPassword = document.getElementById("repeat-password").value;
  if (Password !== ConfirmPassword) {
    print.innerHTML = "Passwords do not match!";
  } else {
    try {
      const response = await fetch(
        "https://quiz-be-zeta.vercel.app/auth/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: Email,
            username: Username,
            password: Password,
          }),
        }
      );
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Error:", error);
    }
  }
}

loginButton.addEventListener("click", register);

