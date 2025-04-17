document.getElementById("togglePassword").addEventListener("click", function () {
    const passwordInput = document.getElementById("password");
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
    } else {
        passwordInput.type = "password";
    }
});

const Button = document.getElementById("button");

async function login() {
  const Email = document.getElementById("email").value;
  const Password = document.getElementById("password").value;
    try {
      const response = await fetch(
        "https://quiz-be-zeta.vercel.app/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: Email,
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

Button.addEventListener("click", login);