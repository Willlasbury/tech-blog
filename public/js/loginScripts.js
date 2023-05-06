const signUpForm = document.querySelector("#signup-form");

signUpForm.addEventListener("submit", async (event) => {
  try {
    event.preventDefault();

    const newUser = {
        email: document.querySelector("#user-email").value,
        password: document.querySelector("#user-password").value,
    }

    console.log("newUser:", newUser)

    const response = await fetch("/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    });
    console.log("response:", response)
    if (response.ok) {
        location.href = "/"
    } else {
        alert('some error')
    }
  } catch (err) {
    console.log("error:", error);
    alert(err);
  }
});
